import argparse
import csv
import json
import time
import urllib.request
import urllib.parse
import pathlib
import uuid


def parse_args():
    parser = argparse.ArgumentParser(description="Run a ComfyUI workflow in batch from a CSV prompt file.")
    parser.add_argument("--workflow", required=True, help="Path to workflow template JSON with placeholders.")
    parser.add_argument("--csv", required=True, help="Path to CSV file with slug, seed, prompt, filename_prefix columns.")
    parser.add_argument("--server", default="127.0.0.1:8188", help="ComfyUI server host:port")
    parser.add_argument("--delay", type=float, default=2.0, help="Seconds to wait between history polls")
    parser.add_argument("--dry-run", action="store_true", help="Print payloads without sending them")
    return parser.parse_args()


def load_rows(csv_path):
    with open(csv_path, newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        rows = list(reader)
    required = {"slug", "seed", "prompt", "filename_prefix"}
    missing = required.difference(reader.fieldnames or [])
    if missing:
        raise ValueError(f"Missing required CSV columns: {sorted(missing)}")
    return rows


def load_workflow_template(workflow_path):
    return pathlib.Path(workflow_path).read_text(encoding="utf-8")


def build_workflow(template_text, row):
    filled = template_text
    filled = filled.replace("__PROMPT__", json.dumps(row["prompt"])[1:-1])
    filled = filled.replace("__FILENAME_PREFIX__", json.dumps(row["filename_prefix"])[1:-1])
    filled = filled.replace("__SEED__", str(int(row["seed"])))
    return json.loads(filled)


def post_json(url, payload):
    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(request) as response:
        return json.loads(response.read().decode("utf-8"))


def get_json(url):
    with urllib.request.urlopen(url) as response:
        return json.loads(response.read().decode("utf-8"))


def queue_prompt(server, workflow):
    client_id = str(uuid.uuid4())
    payload = {"prompt": workflow, "client_id": client_id}
    data = post_json(f"http://{server}/prompt", payload)
    return data["prompt_id"]


def wait_for_prompt(server, prompt_id, delay):
    history_url = f"http://{server}/history/{prompt_id}"
    while True:
        history = get_json(history_url)
        if prompt_id in history:
            return history[prompt_id]
        time.sleep(delay)


def main():
    args = parse_args()
    template_text = load_workflow_template(args.workflow)
    rows = load_rows(args.csv)

    print(f"Loaded {len(rows)} rows from {args.csv}")
    print(f"Using workflow template: {args.workflow}")
    print(f"ComfyUI server: {args.server}")

    for index, row in enumerate(rows, start=1):
        workflow = build_workflow(template_text, row)
        print(f"[{index}/{len(rows)}] {row['slug']}")
        print(f"  seed={row['seed']}")
        print(f"  save={row['filename_prefix']}")

        if args.dry_run:
            print(f"  prompt={row['prompt']}")
            continue

        prompt_id = queue_prompt(args.server, workflow)
        print(f"  queued prompt_id={prompt_id}")
        history = wait_for_prompt(args.server, prompt_id, args.delay)
        outputs = history.get("outputs", {})
        print(f"  finished outputs={list(outputs.keys())}")

    print("Batch complete.")


if __name__ == "__main__":
    main()
