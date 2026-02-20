# FSButtonClose

## Component Type
Atom

## Description
A close button component with transparent background and icon-only design. Available in two size variants (Large and Small) with hover state color change.

## Dependencies
None (standalone atom)

## Structure

```
button.fs-button-close [.fs-button-close--small]
  └── img.fs-button-close__icon
```

## Usage Examples

### Large variant (default)
```html
<button class="fs-button-close" aria-label="Close">
    <img src="../Assets/Icons/Action/Navigation/Close.svg" alt="" class="fs-button-close__icon">
</button>
```

### Small variant
```html
<button class="fs-button-close fs-button-close--small" aria-label="Close">
    <img src="../Assets/Icons/Action/Navigation/Close.svg" alt="" class="fs-button-close__icon">
</button>
```

## Technical Details

### Button
- `display: flex`, `align-items: center`, `justify-content: center`
- `padding: 8px` (all sides)
- `background: transparent`, `border: none`
- `cursor: pointer`, `flex-shrink: 0`

### Icon (Large variant - default)
- `width: 16px`, `height: 16px`
- Color: `#999999` (base state)
- Color: `#BBBBBB` (hover state)
- Applied via CSS filter for SVG color control

### Icon (Small variant)
- `width: 12px`, `height: 12px`
- Color: `#999999` (base state)
- Color: `#BBBBBB` (hover state)

### Clickable area
- **Large**: 32px × 32px (16px icon + 8px padding on all sides)
- **Small**: 28px × 28px (12px icon + 8px padding on all sides)

## Variants

| Variant | Icon size | Total clickable area |
|---|---|---|
| Large (default) | 16px × 16px | 32px × 32px |
| Small | 12px × 12px | 28px × 28px |

## States

| State | Icon color |
|---|---|
| Base | #999999 |
| Hover | #BBBBBB |

## Rules

- **Accessibility required** — always include `aria-label="Close"` attribute
- **Icon is required** — the button is icon-only, no text label
- **Hover feedback** — icon color changes from #999999 to #BBBBBB on hover
- **Use in absolute positioning** — typically positioned `position: absolute; top: 0; right: 0;` in parent containers

## Asset Paths

From atom directory:
- Icon: `../../../Assets/Icons/Action/Navigation/Close.svg`

## Design Tokens

| Token | Value |
|---|---|
| Background | transparent |
| Border | none |
| Padding | 8px |
| Icon color (base) | #999999 |
| Icon color (hover) | #BBBBBB |
| Icon size (large) | 16px × 16px |
| Icon size (small) | 12px × 12px |
| Cursor | pointer |
