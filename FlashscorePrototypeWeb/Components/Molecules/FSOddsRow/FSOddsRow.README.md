# FSOddsRow

## Component Type
Molecule

## Description
A bookmaker odds row used in the Match Detail odds widget. Composed of a bookmaker logo, an FSBadgeLive atom, and three FSOddsCell atoms. Supports three match states: Pre-match, Live, and Post-match.

## Dependencies (Atoms)
- `FSBadgeLive` — live/scheduled badge (`../../Atoms/FSBadgeLive/FSBadgeLive.css`)
- `FSOddsCell` — individual odds cells (`../../Atoms/FSOddsCell/FSOddsCell.css`)
- Bookmaker logos from `Assets/BookmakerLogos/`
- Font: `DesignTokens/Typography/font-family/LivesportFinderLCGJK-Regular_Static.woff2`
- Font: `DesignTokens/Typography/font-family/LivesportFinderLCGJK-Bold_Static.woff2`

## Variants

### Match state
- *(base)* `fs-odds-row` — Pre-match: flex-column layout, FSBadgeLive with `--scheduled` modifier, standard FSOddsCell atoms, bottom divider
- `fs-odds-row--live` — Live: flex-column layout, FSBadgeLive (red, no modifier), `fs-odds-cell--live` cells, bottom divider
- `fs-odds-row--post-match` — Post-match: flex-row layout, no badge (placeholder spacer), `fs-odds-cell--post-match` cells, no divider

## Usage Examples

### Pre-match row
```html
<div class="fs-odds-row">
    <div class="fs-odds-row__odds-container">
        <div class="fs-odds-row__bookmaker">
            <img src="../../../Assets/BookmakerLogos/Bet365.png" alt="Bet365">
        </div>
        <div class="fs-odds-row__cells">
            <div class="fs-odds-row__badge-container">
                <div class="fs-badge-live fs-badge-live--scheduled">
                    <span class="fs-badge-live__text">LIVE</span>
                </div>
            </div>
            <div class="fs-odds-cell">
                <div class="fs-odds-cell__content"><span class="fs-odds-cell__value">1.85</span></div>
                <!-- indicator + external-link icons -->
            </div>
            <!-- repeat for Draw and Away cells -->
        </div>
    </div>
    <div class="fs-odds-row__divider"></div>
</div>
```

### Post-match row
```html
<div class="fs-odds-row fs-odds-row--post-match">
    <div class="fs-odds-row__odds-container">
        <div class="fs-odds-row__bookmaker">
            <img src="../../../Assets/BookmakerLogos/Unibet.png" alt="Unibet">
        </div>
        <div class="fs-odds-row__cells">
            <div class="fs-odds-row__badge-placeholder"></div>
            <div class="fs-odds-cell fs-odds-cell--post-match">
                <div class="fs-odds-cell__content"><span class="fs-odds-cell__value">1.85</span></div>
                <!-- external-link icon only (no indicator) -->
            </div>
            <!-- repeat for Draw and Away cells -->
        </div>
    </div>
</div>
```

## Technical Details

### Layout
- Pre-match / Live: `flex-direction: column`, full width, `padding: 8px 12px 9px`
- Post-match: `flex-direction: row`, `align-items: center`

### Bookmaker logo
- Size: 75×32px, `border-radius: 8px`, `object-fit: cover`

### Badge container
- Width: 26px, `align-self: stretch` (vertically fills row height)

### Badge placeholder (post-match)
- Width: 26px, height: 32px (matches bookmaker logo height)

### Divider
- `position: absolute`, bottom 0, full width, 1px `#EEEEEE`
- Present in Pre-match and Live only

### Cells area
- `display: flex`, `justify-content: flex-end`, `gap: 8px`
- Padding: 1px vertical

### Asset paths from molecule directory
- Bookmaker logos: `../../../Assets/BookmakerLogos/[Name].png`
- Atom CSS: `../../Atoms/FSBadgeLive/FSBadgeLive.css`, `../../Atoms/FSOddsCell/FSOddsCell.css`
