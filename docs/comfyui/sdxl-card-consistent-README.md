# Consistent ComfyUI Card Workflow

Files:
- `sdxl-card-consistent.json`

## Goal
Use one workflow repeatedly with minimal edits so outputs stay as consistent as possible and automatically save into the correct folder while they are generated.

## Where images save
Node `7` uses:
- `filename_prefix = tcg/riftforged/riftforged-sentinel-c01`

That means ComfyUI will save into its output folder under something like:
- `ComfyUI/output/tcg/riftforged/...`

As each render completes, the file is saved automatically.

## For consistency, keep these fixed for one faction
Do not change these while generating all 52 cards of the same faction:
- node `1` checkpoint
- node `3` negative prompt
- node `4` width and height
- node `5` steps
- node `5` cfg
- node `5` sampler_name
- node `5` scheduler
- faction identity wording inside node `2`

## Only change these per card

### Node `2`
Change only the final scene description.
Example:
- `young plated defender at fortress wall`
- `heavy guard raising hard-light barrier amid sparks`
- `heroic commander above bastion city`

Do not rewrite the whole faction identity every time.
Keep the faction identity block exactly the same.

### Node `5`
Change only `seed` slightly if you need a different composition.
Recommended pattern:
- c01 -> 1101
- c02 -> 1102
- c03 -> 1103
- ...

### Node `7`
Change the slug each time:
- `tcg/riftforged/riftforged-sentinel-c01`
- `tcg/riftforged/riftforged-sentinel-c02`
- etc.

## Best manual workflow
For one faction:
1. Load this JSON once.
2. Keep all quality settings fixed.
3. For each card:
   - edit node `2` scene ending
   - edit node `5` seed
   - edit node `7` filename prefix
4. Queue prompt.
5. Repeat.

## Recommended first test cards
Generate these first:
- `c01`
- `c20`
- `c32`
- `c44`
- `c52`

If they feel consistent enough, continue with the full 52.

## Important reality check
Without IPAdapter / reference-image nodes, perfect same-face consistency is not guaranteed.
This workflow is the best plain standard-node version for your current setup.
