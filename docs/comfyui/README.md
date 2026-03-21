# ComfyUI SDXL Card Workflow

Files:
- `sdxl-ipadapter-card-api.json`

## What this workflow is for
This is a **single-card generation template** for ComfyUI using:
- SDXL checkpoint
- IPAdapter reference portrait
- fixed negative prompt
- portrait card ratio

This is the correct way to keep one faction visually consistent.

## Required models / nodes
You need these available in ComfyUI:
- `CheckpointLoaderSimple`
- `CLIPTextEncode`
- `EmptyLatentImage`
- `KSampler`
- `VAEDecode`
- `SaveImage`
- `CLIPVisionLoader`
- `LoadImage`
- `IPAdapterModelLoader`
- `IPAdapterAdvanced`

This means you need an IPAdapter-capable ComfyUI install.

## Required assets/models to swap
Change these fields first:

### Node `1`
- `ckpt_name`
- set to your SDXL checkpoint filename

### Node `2`
- `clip_name`
- set to your CLIP vision model filename

### Node `3`
- `ipadapter_file`
- set to your SDXL IPAdapter model filename

### Node `4`
- `image`
- set to your master faction portrait image

### Node `5`
- `text`
- keep the fixed faction base prompt
- only change the final card-specific scene

### Node `9`
- `seed`
- keep stable within a faction range if you want lower drift
- change slightly only when needed

### Node `11`
- `filename_prefix`
- set the exact card slug before each render

## How to use for one faction
1. Generate or choose one strong master portrait for the faction.
2. Put that portrait into node `4`.
3. Keep nodes `1,2,3,6,8,9` fixed for the faction.
4. For each card:
   - change node `5` prompt ending
   - change node `11` filename prefix
5. Render cards in order.

## Consistency rules
For all 52 cards of one faction, keep fixed:
- checkpoint
- clip vision model
- ipadapter model
- reference portrait
- negative prompt
- width and height
- sampler
- scheduler
- steps
- cfg

Only change:
- positive prompt scene detail
- output filename
- seed only if absolutely necessary

## Recommended first test set
For each faction, first test:
- `c01`
- `c20`
- `c32`
- `c44`
- `c52`

If identity and style hold, then generate the full 52.

## Recommended faction rollout order
1. Riftforged Sentinel
2. Void Ranger
3. Ember Arcanist
4. Ironbound Beastmaster
5. Chronomancer
6. Abyss Revenant
