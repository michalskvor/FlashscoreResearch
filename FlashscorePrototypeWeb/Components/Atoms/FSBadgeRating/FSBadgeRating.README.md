# FSBadgeRating

## Component Type
Atom

## Description
A color-coded player rating badge displaying performance scores on a scale from F (worst) to Best (highest, with star icon). Used in player statistics, match ratings, and performance tables.

## Dependencies
None (standalone atom)

## Rating Scale

| Type | Range | Background Color | Use Case |
|------|-------|------------------|----------|
| Best | 9.5+ | #0033FF (Blue) | Exceptional performance with star icon |
| A | 8.0-9.4 | #0B7929 (Dark Green) | Excellent performance |
| B | 7.0-7.9 | #76B100 (Green) | Good performance |
| C | 6.5-6.9 | #F3A000 (Orange) | Average performance |
| D | 6.0-6.4 | #EC6B07 (Dark Orange) | Below average performance |
| F | Below 6.0 | #DC0000 (Red) | Poor performance |

## Structure

```
.fs-badge-rating.fs-badge-rating--{type}
  ├── span.fs-badge-rating__text (rating value)
  └── img.fs-badge-rating__icon (star icon - Best type only)
```

## Usage Examples

### Best Rating (with star)
```html
<div class="fs-badge-rating fs-badge-rating--best">
    <span class="fs-badge-rating__text">9.5</span>
    <img src="../../../Assets/Icons/Other/Rating Star.svg" alt="" class="fs-badge-rating__icon">
</div>
```

### A Rating
```html
<div class="fs-badge-rating fs-badge-rating--a">
    <span class="fs-badge-rating__text">9.2</span>
</div>
```

### B Rating
```html
<div class="fs-badge-rating fs-badge-rating--b">
    <span class="fs-badge-rating__text">7.5</span>
</div>
```

### C Rating
```html
<div class="fs-badge-rating fs-badge-rating--c">
    <span class="fs-badge-rating__text">6.5</span>
</div>
```

### D Rating
```html
<div class="fs-badge-rating fs-badge-rating--d">
    <span class="fs-badge-rating__text">5.5</span>
</div>
```

### F Rating
```html
<div class="fs-badge-rating fs-badge-rating--f">
    <span class="fs-badge-rating__text">4.5</span>
</div>
```

## Technical Details

### Badge Container
- `display: flex`, `align-items: center`, `justify-content: center`
- `gap: 1px` — internal spacing
- `min-width: 25px`, `height: 20px`
- `padding: 2px 4px`
- `border-radius: 4px`
- `position: relative` (for star icon positioning)

### Text
- `font-size: 12px`, `font-weight: 700`, `line-height: 14px`
- `color: #FFFFFF`
- `text-align: center`, `white-space: nowrap`
- Font: Livesport Finder LCGJK Bold

### Star Icon (Best type only)
- `width: 12px`, `height: 12px`
- `position: absolute`
- `top: -8px`, `right: -8px`
- Icon: Rating Star SVG

## Design Tokens

| Token | Value |
|---|---|
| Min-width | 25px |
| Height | 20px |
| Padding | 2px 4px |
| Border radius | 4px |
| Gap | 1px |
| Text font | 12px Bold, line-height 14px |
| Text color | #FFFFFF |
| Icon size | 12px × 12px |
| Icon offset | -8px (top, right) |

## Color Tokens

| Type | Background |
|------|------------|
| Best | #0033FF |
| A | #0B7929 |
| B | #76B100 |
| C | #F3A000 |
| D | #EC6B07 |
| F | #DC0000 |

## Usage Context
- **Player Statistics Tables**: Individual player performance ratings
- **Match Ratings**: Post-match player ratings
- **Performance Data**: Historical performance tracking
- **Man of the Match**: Highlighting best performer with Best type
- **Team Lineups**: Showing player ratings in lineup displays

## Rating Logic

The rating type should be determined based on the numeric value:
- **9.5 or higher** → Best (with star)
- **9.0 to 9.4** → A
- **7.0 to 8.9** → B
- **6.0 to 6.9** → C
- **5.0 to 5.9** → D
- **Below 5.0** → F

## Accessibility
- Color-blind friendly: Uses distinct hues and intensity levels
- Star icon provides additional visual indicator for Best rating
- High contrast white text on all backgrounds
- Numeric value always visible regardless of color perception

## Notes
- Best type is reserved for exceptional performances (9.5+)
- Only the Best type displays the star icon
- The scale follows a standard grading system (F-A with Best as exceptional)
- Colors transition from red (poor) through orange/yellow to green (good) to blue (exceptional)
