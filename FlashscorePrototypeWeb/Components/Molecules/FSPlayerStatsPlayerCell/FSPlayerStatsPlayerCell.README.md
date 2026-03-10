# FSPlayerStatsPlayerCell

## Component Type
Molecule

## Description
A player cell component used in statistics tables that displays a player's photo, team logo, name, and position. The team logo is positioned as a badge overlay on the player photo.

## Dependencies
- FSAssetBoxed (Atom) - 32px for player, 18px for team

## Structure

```
.fs-player-stats-player-cell
  ├── div.fs-player-stats-player-cell__player-container
  │   ├── FSAssetBoxed (32px, player type) - player photo
  │   └── div.fs-player-stats-player-cell__team-container
  │       └── FSAssetBoxed (18px, asset type) - team logo
  └── div.fs-player-stats-player-cell__text-container
      ├── span.fs-player-stats-player-cell__name
      └── span.fs-player-stats-player-cell__position
```

## Usage Example

```html
<div class="fs-player-stats-player-cell">
    <div class="fs-player-stats-player-cell__player-container">
        <div class="fs-asset-boxed fs-asset-boxed--32px fs-asset-boxed--player">
            <img class="fs-asset-boxed__image fs-asset-boxed__image--player"
                 src="../../../Assets/PlayerPhotos/Football/Messi.png" alt="Messi">
        </div>
        <div class="fs-player-stats-player-cell__team-container">
            <div class="fs-asset-boxed fs-asset-boxed--18px fs-asset-boxed--asset">
                <img class="fs-asset-boxed__image fs-asset-boxed__image--asset"
                     src="../../../Assets/TeamLogos/Premier league/Liverpool.png" alt="Liverpool">
            </div>
        </div>
    </div>
    <div class="fs-player-stats-player-cell__text-container">
        <span class="fs-player-stats-player-cell__name">Mohamed Salah</span>
        <span class="fs-player-stats-player-cell__position">Forward</span>
    </div>
</div>
```

## Technical Details

### Container
- `display: flex`
- `align-items: center`
- `gap: 16px` — spacing between player photo and text
- `position: relative`

### Player Container
- `position: relative` — for positioning team badge
- `flex-shrink: 0`
- Uses FSAssetBoxed 32px with player type

### Team Container
- `position: absolute`
- `bottom: -3px`, `left: 26px` — positioned at bottom-left of player photo
- Uses FSAssetBoxed 18px with asset type

### Text Container
- `display: flex`, `flex-direction: column`
- `justify-content: center`
- `flex-shrink: 0`

### Name
- Font: Livesport Finder LCGJK Bold
- `font-size: 13px`, `line-height: 18px`
- `color: #001E28`
- `overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap`

### Position
- Font: Livesport Finder LCGJK Regular
- `font-size: 12px`, `line-height: 14px`
- `color: #001E28`
- `white-space: pre-wrap`

## Design Tokens

| Token | Value |
|---|---|
| Player photo size | 32px |
| Team badge size | 18px |
| Gap (player to text) | 16px |
| Team badge offset | bottom: -3px, left: 26px |

## Typography Tokens

| Element | Font Size | Line Height | Weight | Color |
|---------|-----------|-------------|--------|-------|
| Name | 13px | 18px | 700 | #001E28 |
| Position | 12px | 14px | 400 | #001E28 |

## Color Tokens

| Element | Color |
|---------|-------|
| Name text | #001E28 |
| Position text | #001E28 |

## Usage Context
- **Player Statistics Tables**: Main player identification in statistics rows
- **Top Scorers**: Player lists with stats
- **Performance Tables**: Player performance rankings
- **Team Lineups**: Detailed player information
- **Match Statistics**: Player-specific match data

## Composition Details
- Player photo uses FSAssetBoxed 32px (--player type with border)
- Team badge uses FSAssetBoxed 18px (--asset type with border)
- Team badge positioned to overlap bottom-left of player photo
- Text container displays name above position
- Name truncates with ellipsis if too long
- Position text can wrap if needed

## Accessibility
- Player and team images should have appropriate alt text
- High contrast text on background
- Clear visual hierarchy (name is bold, position is regular)
- Team badge provides visual context for player's current team

## Notes
- The team badge is absolutely positioned relative to the player container
- The -3px bottom offset creates a slight overlap beyond the player photo
- The 26px left offset positions the badge at the bottom-left corner
- Name text truncates to prevent layout breaking
- Position text uses pre-wrap to allow natural text wrapping if needed
