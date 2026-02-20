# FSBadgeStream

## Component Type
Atom

## Description
A stream availability badge with play icon and text. Has two states: Prematch (gray) and Live (red/pink).

## Dependencies
None (standalone atom)

## Structure

```
.fs-badge-stream [.fs-badge-stream--live]
  ├── svg.fs-badge-stream__icon
  └── span.fs-badge-stream__text
```

## Usage Examples

### Prematch state (default)
```html
<div class="fs-badge-stream">
    <img src="../../../Assets/Icons/Action/Video/Play ALT.svg" alt="" class="fs-badge-stream__icon">
    <span class="fs-badge-stream__text">Stream</span>
</div>
```

### Live state
```html
<div class="fs-badge-stream fs-badge-stream--live">
    <img src="../../../Assets/Icons/Action/Video/Play ALT.svg" alt="" class="fs-badge-stream__icon">
    <span class="fs-badge-stream__text">Live Stream</span>
</div>
```

## Technical Details

### Badge container
- `display: flex`, `align-items: center`, `justify-content: center`
- `gap: 4px` — spacing between icon and text
- `height: 22px`
- `padding: 0 8px`
- `background: #FFFFFF`, `border: 1px solid #EEEEEE`, `border-radius: 4px`
- `box-sizing: border-box`

### Icon
- `width: 10px`, `height: 10px`
- `flex-shrink: 0`
- Play ALT icon (instance from Assets/Icons/Action/Video/Play ALT.svg)
- Color: `#555E61` (prematch) or `#FF0046` (live) - applied via CSS filter

### Text
- `font-size: 13px`, `font-weight: 700`, `line-height: 16px`
- `text-transform: uppercase`
- `color: #555E61` (prematch) or `#FF0046` (live)
- Font: Livesport Finder LCGJK Bold
- `white-space: nowrap`

### Live state modifier
- `.fs-badge-stream--live` changes border and text color to `#FF0046`

## States

| State | Border color | Text color | Icon color | Label |
|---|---|---|---|---|
| Prematch (default) | #EEEEEE | #555E61 | #555E61 | "Stream" |
| Live | #FF0046 | #FF0046 | #FF0046 | "Live Stream" |

## Variants

| Variant | Description |
|---|---|
| Prematch | Gray border and text, "STREAM" label |
| Live | Red/pink border and text, "LIVE STREAM" label |

## Rules

- **Icon is required** — always include the Play ALT icon instance
- **Text is uppercase** — applied via CSS `text-transform: uppercase`
- **Icon color must match text color** — applied via CSS filter per state
- **Text content changes per state** — "Stream" (prematch) vs "Live Stream" (live)

## Design Tokens

| Token | Value |
|---|---|
| Background | #FFFFFF |
| Border (prematch) | 1px solid #EEEEEE |
| Border (live) | 1px solid #FF0046 |
| Border radius | 4px |
| Height | 22px |
| Padding horizontal | 8px |
| Gap | 4px |
| Icon size | 10px × 10px |
| Text color (prematch) | #555E61 |
| Text color (live) | #FF0046 |
| Text font | 13px Bold, uppercase, line-height 16px |
