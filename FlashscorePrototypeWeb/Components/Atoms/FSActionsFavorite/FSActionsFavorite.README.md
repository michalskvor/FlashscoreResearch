# FSActionsFavorite

## Component Type
Atom

## Description
A favorite/star icon button component that displays a star icon with two states (base/inactive and active/favorited). The component supports three size variants to accommodate different UI contexts.

## Dependencies
- Star icon SVGs from Assets/Icons/Action/State/
  - Favorite.svg (outlined star - base state)
  - Favorite active.svg (filled star - active state)

## Variants

### Size
- `--small`: 24px container with 12px icon
- `--medium`: 32px container with 16px icon
- `--large`: 32px container with 18px icon

### State
- `--base`: Outlined gray star (#999999) - unfavorited state
- `--active`: Filled yellow star (#FFCD00) - favorited state

## Usage Examples

### Large Active (Favorited)
```html
<div class="fs-actions-favorite fs-actions-favorite--large fs-actions-favorite--active">
    <svg class="fs-actions-favorite__icon" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.346 0L7.245 6.847L0.404 6.832L0 8.141L5.544 12.354L3.415 19.191L4.473 20L9.999 15.758L15.526 20L16.584 19.191L14.455 12.354L19.999 8.141L19.596 6.832L12.753 6.847L10.654 0H9.346Z" fill="#FFCD00"/>
    </svg>
</div>
```

### Medium Base (Not Favorited)
```html
<div class="fs-actions-favorite fs-actions-favorite--medium fs-actions-favorite--base">
    <svg class="fs-actions-favorite__icon" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.346 0L7.245 6.847L0.404 6.832L0 8.141L5.544 12.354L3.415 19.191L4.473 20L9.999 15.758L15.526 20L16.584 19.191L14.455 12.354L19.999 8.141L19.596 6.832L12.753 6.847L10.654 0H9.346ZM8.399 7.793L9.999 2.575L11.6 7.793L12.256 8.293L17.468 8.282L13.245 11.493L12.994 12.302L14.616 17.511L10.404 14.281H9.594L5.384 17.511L7.005 12.302L6.754 11.493L2.53 8.282L7.744 8.293L8.399 7.793Z" fill="#999999"/>
    </svg>
</div>
```

### Small Active (Favorited)
```html
<div class="fs-actions-favorite fs-actions-favorite--small fs-actions-favorite--active">
    <svg class="fs-actions-favorite__icon" width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.346 0L7.245 6.847L0.404 6.832L0 8.141L5.544 12.354L3.415 19.191L4.473 20L9.999 15.758L15.526 20L16.584 19.191L14.455 12.354L19.999 8.141L19.596 6.832L12.753 6.847L10.654 0H9.346Z" fill="#FFCD00"/>
    </svg>
</div>
```

## Technical Details

### Container Sizes
- Small: 24px × 24px
- Medium: 32px × 32px
- Large: 32px × 32px

### Icon Sizes
- Small: 12px × 12px (viewBox="0 0 20 20")
- Medium: 16px × 16px (viewBox="0 0 20 20")
- Large: 18px × 18px (viewBox="0 0 20 20")

### Colors
- Base state: #999999 (gray)
- Active state: #FFCD00 (yellow)

### Layout
- Uses flexbox with center alignment
- Icon is positioned using `align-items: center` and `justify-content: center`
- Icon uses `flex-shrink: 0` to prevent scaling issues

## Design System Compliance
- HEX color values only (#999999, #FFCD00)
- Even number sizing (12px, 16px, 18px, 24px, 32px)
- 8px grid alignment for container sizes (24px = 3×8px, 32px = 4×8px)

## Interactive Behavior
This component is typically used as a clickable favorite/bookmark button. State changes should be handled via JavaScript:
- Toggle between `--base` and `--active` modifier classes
- Update the SVG fill color accordingly
- Consider adding transition effects for smooth state changes

## Accessibility Notes
- Should be wrapped in a `<button>` element for interactive use
- Include `aria-label` or `aria-pressed` attributes
- Ensure adequate touch target size (minimum 44×44px for mobile)
