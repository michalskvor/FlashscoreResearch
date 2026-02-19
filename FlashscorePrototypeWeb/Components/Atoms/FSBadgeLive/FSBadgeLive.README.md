# FSBadgeLive

## Component Type
Atom

## Description
A small badge displaying the "LIVE" label used in odds rows to indicate whether a bookmaker is offering live or scheduled odds. Two variants: Live (red fill) and Scheduled (outlined gray).

## Dependencies
- Font: `DesignTokens/Typography/font-family/LivesportFinderLCGJK-Bold_Static.woff2`

## Variants

### Appearance
- *(base)* `fs-badge-live` — Live: red background `#FF0046`, white text
- `fs-badge-live--scheduled` — Scheduled: white background, `#EEEEEE` border, gray text `#999999`

## Usage Examples

### Live
```html
<div class="fs-badge-live">
    <span class="fs-badge-live__text">LIVE</span>
</div>
```

### Scheduled
```html
<div class="fs-badge-live fs-badge-live--scheduled">
    <span class="fs-badge-live__text">LIVE</span>
</div>
```

## Technical Details

### Sizing
- Width: 26px
- Height: 22px
- Border radius: 4px

### Colors
| Variant | Background | Border | Text |
|---|---|---|---|
| Live | `#FF0046` | none | `#FFFFFF` |
| Scheduled | `#FFFFFF` | `#EEEEEE` (1px solid) | `#999999` |

### Typography
- Font: `Livesport Finder LCGJK` 700
- Size: 9px
- Line-height: 12px
- Transform: uppercase

### Layout
- `display: flex`, `align-items: center`, `justify-content: center`
- `overflow: hidden`, `flex-shrink: 0`

## Used In
- `FSOddsRow` molecule — badge container inside the cells area
