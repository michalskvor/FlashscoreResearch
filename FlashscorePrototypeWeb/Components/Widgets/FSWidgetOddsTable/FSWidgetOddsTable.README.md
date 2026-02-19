# FSWidgetOddsTable

## Component Type
Widget

## Description
A Match Detail odds widget displaying bookmaker odds for a given market. Composed of an FSHeadersSection molecule, a secondary FSTabs row for market switching, a list of FSOddsRow molecules, and an FSButtonLink atom footer. Supports Pre-match, Live, and Post-match states (controlled by FSOddsRow variants).

## Dependencies

### Atoms
- `FSBadgeLive` — live/scheduled badge inside each odds row (`../../Atoms/FSBadgeLive/FSBadgeLive.css`)
- `FSOddsCell` — individual odds cells inside each odds row (`../../Atoms/FSOddsCell/FSOddsCell.css`)
- `FSTabs` — secondary pill-style tab row for market switching (`../../Atoms/FSTabs/FSTabs.css`)
- `FSButtonLink` — "Show more" footer link (`../../Atoms/FSButtonLink/FSButtonLink.css`)

### Molecules
- `FSHeadersSection` — "ODDS" section header (`../../Molecules/FSHeadersSection/FSHeadersSection.css`)
- `FSOddsRow` — bookmaker odds row (`../../Molecules/FSOddsRow/FSOddsRow.css`)

## Structure

```
.fs-widget-odds-table
  ├── .fs-headers-section          (FSHeadersSection molecule)
  ├── .fs-widget-odds-table__tabs
  │     └── .fs-tabs-row--secondary (FSTabs atom, market filters)
  ├── .fs-widget-odds-table__rows
  │     ├── .fs-odds-row           (FSOddsRow molecule × N)
  │     └── ...
  └── .fs-widget-odds-table__footer
        └── .fs-button-link--primary (FSButtonLink atom)
```

## Tabs (Markets)

Secondary pill-style tabs. First tab is active by default.

| Tab label | State |
|---|---|
| 1X2 | Active (`fs-tabs--active`) |
| Over/Under | Inactive |
| Asian Handicap | Inactive |
| Both Teams to Score | Inactive |

## Usage Examples

### Pre-match widget
```html
<div class="fs-widget-odds-table">

    <!-- Section header -->
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">ODDS</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <!-- Market tabs -->
    <div class="fs-widget-odds-table__tabs">
        <div class="fs-tabs-row fs-tabs-row--secondary">
            <div class="fs-tabs fs-tabs--secondary fs-tabs--active">
                <span class="fs-tabs__text">1X2</span>
            </div>
            <button class="fs-tabs fs-tabs--secondary">
                <span class="fs-tabs__text">Over/Under</span>
            </button>
            <!-- more tabs -->
        </div>
    </div>

    <!-- Odds rows (FSOddsRow — pre-match state) -->
    <div class="fs-widget-odds-table__rows">
        <!-- repeat fs-odds-row for each bookmaker -->
    </div>

    <!-- Footer -->
    <div class="fs-widget-odds-table__footer">
        <a href="#" class="fs-button-link fs-button-link--primary">
            <span class="fs-button-link__label">Show more</span>
            <img src="../../../Assets/Icons/Action/Navigation/Arrow/Right.svg" alt="" class="fs-button-link__icon">
        </a>
    </div>

</div>
```

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`, `width: 100%`
- `background-color: #FFFFFF`

### Tabs wrapper
- `overflow-x: auto` — allows horizontal scroll when labels overflow (narrow screens)

### Footer
- `display: flex`, `align-items: center`, `justify-content: center`
- `padding: 12px`
- `border-top: 1px solid #EEEEEE`

### Asset paths from widget directory
- Bookmaker logos: `../../../Assets/BookmakerLogos/[Name].png`
- Arrow icon: `../../../Assets/Icons/Action/Navigation/Arrow/Right.svg`
- Atom CSS: `../../Atoms/[Atom]/[Atom].css`
- Molecule CSS: `../../Molecules/[Molecule]/[Molecule].css`

## Match States

The widget match state is set via FSOddsRow modifiers:

| State | FSOddsRow class | FSOddsCell class | FSBadgeLive |
|---|---|---|---|
| Pre-match | `fs-odds-row` | `fs-odds-cell` | `fs-badge-live--scheduled` |
| Live | `fs-odds-row--live` | `fs-odds-cell--live` | `fs-badge-live` |
| Post-match | `fs-odds-row--post-match` | `fs-odds-cell--post-match` | placeholder spacer |
