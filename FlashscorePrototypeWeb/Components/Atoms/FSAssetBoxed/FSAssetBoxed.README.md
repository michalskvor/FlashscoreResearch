# FSAssetBoxed Component

A versatile boxed container component for displaying player photos and team/tournament logos with consistent styling across different sizes.

## Overview

FSAssetBoxed provides a bordered, rounded container designed to hold either player photos or team/tournament logos. The component automatically adjusts image sizing and alignment based on the content type.

## Types

### Type: Player
- Uses photos from **PlayerPhotos** assets only
- Images are **bottom-aligned** within the container
- Shows player portrait photos cropped to fit

### Type: Asset
- Uses **TeamLogos** and **TournamentLogos** assets
- Images are **center-aligned** within the container
- Logos are contained within the box maintaining aspect ratio

## Size Variants

| Size | Border Radius | Player Image Size | Asset Image Size | Use Case |
|------|---------------|-------------------|------------------|----------|
| 82px | 12px | 74px | 58px | Match detail duel (single) |
| 68px | 12px | 60px | 52px | Team detail, participant profile, competition detail |
| 52px | 12px | 48px | 36px | Match detail duel (single) |
| 42px | 8px | 38px | 30px | Match detail duel - double |
| 38px | 8px | 34px | 30px | Search result |
| 32px | 8px | 30px | 24px | Table Player statistics |
| 26px | 8px | 24px | 18px | Dialog Player Stats / Player comparison |
| 18px | 4px | 16px | 12px | Search result |

## Border Radius Logic

- **Large (82px, 68px, 52px)**: 12px border radius
- **Medium (42px, 38px, 32px, 26px)**: 8px border radius
- **Small (18px)**: 4px border radius

## Specifications

- **Background**: White (#FFFFFF)
- **Border**: 1px solid #EEEEEE (chalk-white/500)
- **Overflow**: Hidden (clips content to border radius)

## Usage

### Player Photo Example
```html
<div class="fs-asset-boxed fs-asset-boxed--68px fs-asset-boxed--player">
    <img src="../../Assets/PlayerPhotos/Football/Messi.imageset/Messi.png"
         alt="Player"
         class="fs-asset-boxed__image fs-asset-boxed__image--player">
</div>
```

### Team Logo Example
```html
<div class="fs-asset-boxed fs-asset-boxed--42px fs-asset-boxed--asset">
    <img src="../../Assets/TeamLogos/Bundesliga/Bayern.imageset/Bayern.png"
         alt="Team Logo"
         class="fs-asset-boxed__image fs-asset-boxed__image--asset">
</div>
```

### Tournament Logo Example
```html
<div class="fs-asset-boxed fs-asset-boxed--52px fs-asset-boxed--asset">
    <img src="../../Assets/TournamentLogos/Premier League.imageset/Premier League.png"
         alt="Tournament Logo"
         class="fs-asset-boxed__image fs-asset-boxed__image--asset">
</div>
```

## Asset Structure

### PlayerPhotos
- Located in: `Assets/PlayerPhotos/[Sport]/[PlayerName].imageset/`
- Format: PNG images
- Example: `Assets/PlayerPhotos/Football/Sima.imageset/Sima.png`

### TeamLogos
- Located in: `Assets/TeamLogos/[League]/[TeamName].imageset/`
- Format: PNG images
- Example: `Assets/TeamLogos/Bundesliga/Hoffenheim.imageset/Hoffenheim.png`

### TournamentLogos
- Located in: `Assets/TournamentLogos/[TournamentName].imageset/`
- Format: PNG images
- Example: `Assets/TournamentLogos/Euro 2020.imageset/Euro 2020.png`

## Common Use Cases

1. **Match Detail** - Display team/player matchups with 68px or 82px sizes
2. **Search Results** - Compact 18px or 38px variants for search listings
3. **Player Statistics Tables** - 32px size for data tables
4. **Player Comparison Dialogs** - 26px size for comparison views
5. **Team Detail Pages** - 68px size for team profiles

## Key Differences: Player vs Asset

| Aspect | Player | Asset |
|--------|--------|-------|
| Alignment | Bottom (flex-end) | Center |
| Source | PlayerPhotos only | TeamLogos + TournamentLogos |
| Image Fit | Cover (fills space) | Contain (preserves aspect ratio) |
| Sizing | Slightly smaller than container | Significantly smaller than container |

## Figma Reference

- Figma Node ID: 35178:32168

## Notes

- All containers have consistent 1px border in #EEEEEE
- **IMPORTANT**: All variants can NOT have grey border when the asset is on a colored background (e.g., when FSAssetBoxed is placed on a grey container). The border must provide sufficient contrast with the background.
- Player images are slightly larger than asset images for the same container size
- Border radius scales with container size for visual consistency
- Asset images use `object-fit: contain` to prevent logo distortion
- Player images use `object-fit: cover` for portrait cropping
