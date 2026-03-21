# ComfyUI Batch Automation

Files:
- `sdxl-card-batch-template.json`
- `comfyui_batch_runner.py`
- `batches/riftforged-test.csv`

## What this gives you
This setup lets you:
- keep one workflow template
- read prompts from a CSV file
- auto-fill prompt, seed, and output filename
- queue cards one by one into ComfyUI
- save images automatically as they finish

You only need to run the Python script once.

## CSV format
Required columns:
- `slug`
- `seed`
- `prompt`
- `filename_prefix`

## How to run in Colab / notebook environment
Assuming ComfyUI is already running on `127.0.0.1:8188`, run:

```python
!python /content/drive/MyDrive/TCG/docs/comfyui/comfyui_batch_runner.py \
  --workflow /content/drive/MyDrive/TCG/docs/comfyui/sdxl-card-batch-template.json \
  --csv /content/drive/MyDrive/TCG/docs/comfyui/batches/riftforged-test.csv
```

If your repo is in another folder, change the paths.

## Dry run first
```python
!python /content/drive/MyDrive/TCG/docs/comfyui/comfyui_batch_runner.py \
  --workflow /content/drive/MyDrive/TCG/docs/comfyui/sdxl-card-batch-template.json \
  --csv /content/drive/MyDrive/TCG/docs/comfyui/batches/riftforged-test.csv \
  --dry-run
```

## How it works
The JSON workflow contains placeholders:
- `__PROMPT__`
- `__SEED__`
- `__FILENAME_PREFIX__`

The script replaces those for each CSV row and sends the workflow to ComfyUI.

## What you should keep fixed for consistency
Inside the workflow template, keep fixed for a whole faction:
- checkpoint
- negative prompt
- resolution
- steps
- cfg
- sampler
- scheduler

Only vary in the CSV:
- card prompt
- seed
- filename prefix

## Output behavior
ComfyUI saves using the `filename_prefix` you provide.
So each card gets written automatically into its folder as soon as generation completes.
