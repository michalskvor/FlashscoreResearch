# FSSelect

## Component Type
Atom

## Description
A select dropdown component with two display types: Placeholder (for empty state) and Value (for selected state with optional team icon). Used for team selection, filtering, and dropdown menus throughout the application.

## Dependencies
None (standalone atom)

## Types

### 1. Placeholder
- Uppercase 12px Bold text
- Secondary color (#555E61)
- No icon on the left
- Chevron icon on the right

### 2. Value
- 13px Bold text
- Primary color (#001E28)
- Optional team icon on the left (16px)
- Chevron icon on the right

## Structure

```
.fs-select.fs-select--{type}
  ├── div.fs-select__icon (Value type only)
  │   └── img.fs-select__icon-image (team logo)
  ├── span.fs-select__text.fs-select__text--{type} (select text)
  └── img.fs-select__chevron (dropdown icon)
```

## Usage Examples

### Placeholder Type
```html
<div class="fs-select fs-select--placeholder">
    <span class="fs-select__text fs-select__text--placeholder">Placeholder</span>
    <img src="../../../Assets/Icons/Other/Chevron down.svg" alt="" class="fs-select__chevron">
</div>
```

### Value Type with Team Icon
```html
<div class="fs-select fs-select--value">
    <div class="fs-select__icon">
        <img src="../../../Assets/TeamLogos/Premier league/Liverpool.png" alt="Liverpool" class="fs-select__icon-image">
    </div>
    <span class="fs-select__text fs-select__text--value">Liverpool</span>
    <img src="../../../Assets/Icons/Other/Chevron down.svg" alt="" class="fs-select__chevron">
</div>
```

### Value Type without Icon (Text Only)
```html
<div class="fs-select fs-select--value">
    <span class="fs-select__text fs-select__text--value">All Teams</span>
    <img src="../../../Assets/Icons/Other/Chevron down.svg" alt="" class="fs-select__chevron">
</div>
```

## Technical Details

### Container
- `display: flex`, `align-items: center`
- `width: 200px` (default)
- `height: 32px`
- `padding: 0 12px`
- `gap: 8px` — internal spacing
- `background-color: #FFFFFF`
- `border-radius: 8px`
- `cursor: pointer`

### Team Icon (Value type only)
- `width: 16px`, `height: 16px`
- `border-radius: 50%`
- `object-fit: cover`

### Text
- `flex: 1` — takes available space
- `overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap`
- Font: Livesport Finder LCGJK Bold

#### Placeholder Text
- `font-size: 12px`, `line-height: 14px`
- `color: #555E61`
- `text-transform: uppercase`

#### Value Text
- `font-size: 13px`, `line-height: 16px`
- `color: #001E28`

### Chevron Icon
- `width: 12px`, `height: 12px`
- `color: #555E61` (via CSS filter)

## Design Tokens

| Token | Value |
|---|---|
| Width | 200px (default) |
| Height | 32px |
| Padding | 0 12px |
| Border radius | 8px |
| Gap | 8px |
| Background | #FFFFFF |
| Team icon size | 16px × 16px |
| Chevron size | 12px × 12px |

## Typography Tokens

| Type | Font Size | Line Height | Weight | Color | Transform |
|------|-----------|-------------|--------|-------|-----------|
| Placeholder | 12px | 14px | 700 | #555E61 | Uppercase |
| Value | 13px | 16px | 700 | #001E28 | None |

## Color Tokens

| Element | Color |
|---------|-------|
| Background | #FFFFFF |
| Placeholder text | #555E61 |
| Value text | #001E28 |
| Chevron icon | #555E61 |

## Usage Context
- **Team Selection**: Filter matches by team
- **Player Selection**: Choose player from dropdown
- **Statistics Filters**: Select categories or time periods
- **Match Filters**: Filter by tournament, season, or status
- **Form Controls**: General dropdown selections in forms

## Behavior Notes
- The placeholder type displays when no value is selected
- The value type displays when a selection has been made
- Team icon is optional even in value type (can show text-only selections)
- Text truncates with ellipsis if it exceeds available width
- Chevron indicates the component can be interacted with to reveal options

## Accessibility
- Cursor pointer indicates interactivity
- High contrast text on white background
- Icon provides visual context for team selections
- Text overflow handled gracefully with ellipsis

## Notes
- Default width is 200px but can be adjusted as needed
- The icon container uses `display: none` for placeholder type
- Team icons are displayed at 16px with circular crop
- This is a visual component only; actual dropdown functionality would require JavaScript
