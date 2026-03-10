# FSButtonStream

## Component Type
Atom

## Description
Streaming badge button used to indicate live stream sources. Available in two variants: Textlink Boxed (with border and icon) and Textlink (plain text only).

## Dependencies
None (standalone atom)

## Structure

```
a.fs-button-stream[--textlink]
  ├── span.fs-button-stream__label
  └── img.fs-button-stream__icon (hidden in --textlink variant)
```

## Variants

### Textlink Boxed (default)
Default variant with border, padding, and external link icon.

### Textlink (--textlink)
Plain text variant with no border, no padding (container hugs text), and no icon.

## Usage Examples

### Textlink Boxed (default)
```html
<a href="#" class="fs-button-stream">
    <span class="fs-button-stream__label">DAZN</span>
    <img src="../../../Assets/Icons/Action/External link.svg" alt="" class="fs-button-stream__icon">
</a>
```

### Textlink
```html
<a href="#" class="fs-button-stream fs-button-stream--textlink">
    <span class="fs-button-stream__label">DAZN</span>
    <img src="../../../Assets/Icons/Action/External link.svg" alt="" class="fs-button-stream__icon">
</a>
```

Note: Icon is included in markup but hidden via CSS in the Textlink variant.

## Technical Details

### Textlink Boxed (default)

**Button container**
- `display: inline-flex`, `align-items: center`
- `gap: 4px` — spacing between label and icon
- `padding: 8px 12px`
- `border: 1px solid #EEEEEE`, `border-radius: 4px`
- `background-color: transparent`
- `cursor: pointer`

**Label**
- `font-size: 13px`, `font-weight: 400`, `line-height: 16px`
- `color: #001E28`
- `white-space: nowrap`
- Font: Livesport Finder LCGJK Regular

**Icon**
- `width: 8px`, `height: 8px`
- `flex-shrink: 0`
- Color: `#999999` (applied via CSS filter)
- Icon: External link SVG

**Hover state**
- Label gets `text-decoration: underline`

### Textlink (--textlink)

**Button container**
- `padding: 0` (container hugs text)
- `border: none`
- `border-radius: 0`
- `gap: 0`

**Label**
- Same typography as default variant

**Icon**
- `display: none` (hidden)

**Hover state**
- Same as default (label underline)

## Design Tokens

### Textlink Boxed

| Token | Value |
|---|---|
| Border | 1px solid #EEEEEE |
| Border radius | 4px |
| Padding | 8px 12px |
| Gap | 4px |
| Label color | #001E28 |
| Label font | 13px Regular, line-height 16px |
| Icon size | 8px × 8px |
| Icon color | #999999 |

### Textlink

| Token | Value |
|---|---|
| Border | none |
| Padding | 0 |
| Gap | 0 |
| Label color | #001E28 |
| Label font | 13px Regular, line-height 16px |
| Icon | hidden |

## Usage Context
- Used in streaming-related features to link to stream providers
- Textlink Boxed: Used when the button needs visual emphasis
- Textlink: Used when inline with text or in compact layouts
