# FSBadgeHighlight

## Component Type
Atom

## Description
A highlight badge with bright background (#FF0046) used to draw attention to live/active states. Has optional icon support.

## Dependencies
None (standalone atom)

## Structure

```
.fs-badge-highlight
  ├── [img.fs-badge-highlight__icon] (optional)
  └── span.fs-badge-highlight__text
```

## Usage Examples

### Text only (default)
```html
<div class="fs-badge-highlight">
    <span class="fs-badge-highlight__text">Live</span>
</div>
```

### With icon
```html
<div class="fs-badge-highlight">
    <img src="../../../Assets/Icons/Action/Video/Play ALT.svg" alt="" class="fs-badge-highlight__icon">
    <span class="fs-badge-highlight__text">Live</span>
</div>
```

## Technical Details

### Badge container
- `display: flex`, `align-items: center`, `justify-content: center`
- `gap: 2px` — spacing between icon and text
- `padding: 2px 4px`
- `background: #FF0046`, `border-radius: 4px`

### Icon (optional)
- `width: 8px`, `height: 8px`
- `flex-shrink: 0`
- Color: `#001E28` (applied via CSS filter)

### Text
- `font-size: 10px`, `font-weight: 700`, `line-height: 12px`
- `text-transform: uppercase`
- `color: #FFFFFF`
- Font: Livesport Finder LCGJK Bold

## Design Tokens

| Token | Value |
|---|---|
| Background | #FF0046 |
| Border radius | 4px |
| Padding | 2px 4px |
| Gap | 2px |
| Icon size | 8px × 8px |
| Icon color | #001E28 |
| Text color | #FFFFFF |
| Text font | 10px Bold, uppercase, line-height 12px |

## Usage Context
- Used in FSHeadersSection for live matches
- Used in FSWidgetOddsTable for live odds
- Only shown during live/active states
