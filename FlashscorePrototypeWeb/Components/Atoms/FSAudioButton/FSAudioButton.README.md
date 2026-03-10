# FSAudioButton

## Component Type
Atom

## Description
An audio button with icon and label. Used to link to audio content, audio commentary, or live audio streams. Features a distinctive pink/red border (#FF0046) with matching icon and text colors.

## Dependencies
None (standalone atom)

## Structure

```
a.fs-audio-button
  ├── img.fs-audio-button__icon
  └── span.fs-audio-button__label
```

## Usage Examples

### Basic usage
```html
<a href="#" class="fs-audio-button">
    <img src="../../../Assets/Icons/Incidents/Audio.svg" alt="" class="fs-audio-button__icon">
    <span class="fs-audio-button__label">Audio</span>
</a>
```

### Different labels
```html
<a href="#" class="fs-audio-button">
    <img src="../../../Assets/Icons/Incidents/Audio.svg" alt="" class="fs-audio-button__icon">
    <span class="fs-audio-button__label">Listen Live</span>
</a>

<a href="#" class="fs-audio-button">
    <img src="../../../Assets/Icons/Incidents/Audio.svg" alt="" class="fs-audio-button__icon">
    <span class="fs-audio-button__label">Commentary</span>
</a>
```

## Technical Details

### Button container
- `display: inline-flex`, `align-items: center`, `justify-content: center`
- `gap: 8px` — spacing between icon and label
- `padding: 8px 12px`
- `border: 1px solid #FF0046`, `border-radius: 4px`
- `background-color: transparent` (base state)
- `cursor: pointer`

### Icon
- `width: 16px`, `height: 16px`
- `flex-shrink: 0`
- Color: `#FF0046` (applied via CSS filter)
- Icon: Audio SVG (from Assets/Icons/Incidents/Audio.svg)

### Label
- `font-size: 13px`, `font-weight: 400`, `line-height: 16px`
- `color: #FF0046`
- `white-space: nowrap`, `text-align: center`
- Font: Livesport Finder LCGJK Regular

### States

**Hover**
- `background-color: #FFF5F8` (light pink tint)

**Active**
- `background-color: #FFEBF0` (lighter pink tint)

## Design Tokens

| Token | Value |
|---|---|
| Border | 1px solid #FF0046 |
| Border radius | 4px |
| Padding | 8px 12px |
| Gap | 8px |
| Icon size | 16px × 16px |
| Icon color | #FF0046 |
| Label color | #FF0046 |
| Label font | 13px Regular, line-height 16px |
| Hover background | #FFF5F8 |
| Active background | #FFEBF0 |

## Usage Context
- Used in match detail pages to link to audio commentary or live audio streams
- Can be used alongside video streaming buttons
- Typically appears in streaming/media sections
- The bright pink/red color draws attention to available audio content

## Accessibility
- Use `<a>` element for links or `<button>` element for actions
- Provide meaningful link text in the label
- Icon has empty alt text as it's decorative (label provides context)
