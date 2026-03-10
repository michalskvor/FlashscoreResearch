# FSTableFootnote

## Component Type
Molecule

## Description
Table footnote component for displaying additional information and descriptions at the bottom of tables. Used to provide context, explain metrics, or add clarifications about table data.

## Dependencies
None (standalone molecule)

## Structure

```
.fs-table-footnote
  └── .fs-table-footnote__item (multiple)
        ├── img.fs-table-footnote__icon (optional)
        └── span.fs-table-footnote__text
```

## Usage Examples

### Text Only
```html
<div class="fs-table-footnote">
    <div class="fs-table-footnote__item">
        <span class="fs-table-footnote__text">Pass accuracy is calculated as successful passes divided by total passes attempted.</span>
    </div>
</div>
```

### With Icon
```html
<div class="fs-table-footnote">
    <div class="fs-table-footnote__item">
        <img class="fs-table-footnote__icon" src="../../../Assets/Icons/Settings/Info.svg" alt="">
        <span class="fs-table-footnote__text">Expected goals (xG) is a metric that measures the quality of a shot based on several variables.</span>
    </div>
</div>
```

### Multiple Lines (Mixed)
```html
<div class="fs-table-footnote">
    <div class="fs-table-footnote__item">
        <img class="fs-table-footnote__icon" src="../../../Assets/Icons/Settings/Info.svg" alt="">
        <span class="fs-table-footnote__text">Statistics are updated in real-time during live matches.</span>
    </div>
    <div class="fs-table-footnote__item">
        <span class="fs-table-footnote__text">All statistics are provided by Opta Sports Data.</span>
    </div>
</div>
```

## Technical Details

### Container
- `display: flex`, `flex-direction: column`
- `gap: 4px` — vertical spacing between items
- `width: 100%`

### Item
- `display: flex`, `align-items: flex-start`
- `gap: 8px` — spacing between icon and text
- `width: 100%`

### Icon
- **IMPORTANT**: Always use icon references from the Assets/Icons library
- **Never use inline SVG code**
- `width: 14px`, `height: 14px`
- `color: #555E61` (grey)
- `flex-shrink: 0`
- Common icon: `Assets/Icons/Settings/Info.svg`

### Text
- `font-size: 12px`, `font-weight: 400`, `line-height: 14px`
- `color: #555E61` (grey)
- `flex: 1` — allows text to wrap
- Font: Livesport Finder LCGJK Regular

## Design Tokens

| Token | Value |
|---|---|
| Container gap | 4px |
| Item gap | 8px |
| Icon size | 14px × 14px |
| Text font | 12px Regular, line-height 14px |
| Color (text & icon) | #555E61 (grey) |

## Usage Context
- **Player Statistics Tables**: Explaining metrics like xG, xA, xGOT
- **Match Statistics**: Adding context to complex statistics
- **League Tables**: Clarifying tiebreaker rules or points systems
- **Any Table**: Providing additional information or disclaimers

## Icon Usage Guidelines

**CRITICAL**: Always reference icons from the Assets/Icons library. Never use inline SVG.

### Correct ✓
```html
<img class="fs-table-footnote__icon" src="../../../Assets/Icons/Settings/Info.svg" alt="">
```

### Incorrect ✗
```html
<svg class="fs-table-footnote__icon" width="14" height="14">...</svg>
```

### Common Icons
- Info: `Assets/Icons/Settings/Info.svg`
- Info Rounded: `Assets/Icons/Settings/Info rounded.svg`

## Accessibility
- Icon has empty alt attribute (decorative, information is in text)
- Text is readable at 12px size
- Sufficient contrast with #555E61 on white background
- Text wraps naturally for long content

## Notes
- Place at the bottom of tables with 12px+ margin-top
- Icons are optional - use when additional visual emphasis is needed
- Text can wrap to multiple lines
- Some items can have icons while others don't (mixed mode)
- Consistent grey color maintains visual hierarchy (secondary information)
