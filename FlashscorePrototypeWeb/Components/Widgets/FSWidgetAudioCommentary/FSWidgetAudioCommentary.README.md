# FSWidgetAudioCommentary

## Component Type
Widget

## Description
A widget displaying audio commentary information. Shows the author/commentator name with an icon on the left, an audio button on the right, and additional centered text below.

## Dependencies
- FSHeadersSection (Molecule)
- FSAudioButton (Atom)

## Structure

```
.fs-widget-audio-commentary
  ├── .fs-headers-section
  │     └── "Audio commentary" text left
  └── .fs-widget-audio-commentary__body
        ├── .fs-widget-audio-commentary__row
        │     ├── .fs-widget-audio-commentary__left
        │     │     ├── img.fs-widget-audio-commentary__icon
        │     │     └── span.fs-widget-audio-commentary__author
        │     └── a.fs-audio-button
        └── p.fs-widget-audio-commentary__note
```

## Usage Example

```html
<div class="fs-widget-audio-commentary">
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">Audio commentary</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <div class="fs-widget-audio-commentary__body">
        <div class="fs-widget-audio-commentary__row">
            <div class="fs-widget-audio-commentary__left">
                <img src="../../../Assets/Icons/Action/State/User.svg" alt="" class="fs-widget-audio-commentary__icon">
                <span class="fs-widget-audio-commentary__author">John Smith</span>
            </div>
            <a href="#" class="fs-audio-button">
                <img src="../../../Assets/Icons/Incidents/Audio.svg" alt="" class="fs-audio-button__icon">
                <span class="fs-audio-button__label">Listen</span>
            </a>
        </div>
        <p class="fs-widget-audio-commentary__note">Live audio commentary available during the match</p>
    </div>
</div>
```

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`
- `padding-bottom: 20px`
- `width: 100%`

### Body
- `display: flex`, `flex-direction: column`
- `padding: 12px 12px 16px`
- `gap: 12px` — spacing between row and note

### Row
- `display: flex`, `align-items: center`, `justify-content: space-between`
- `gap: 8px`
- Contains left side (icon + author) and right side (audio button)

### Left side
- `display: flex`, `align-items: center`
- `gap: 8px` — spacing between icon and author name
- `flex: 1` — takes available space

### Icon
- `width: 16px`, `height: 16px`
- `flex-shrink: 0`
- Color: `#555E61` (applied via CSS filter)
- Icon: User SVG (from Assets/Icons/Action/State/User.svg)

### Author name
- `font-size: 13px`, `font-weight: 700`, `line-height: 16px`
- `color: #001E28`
- `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`
- Font: Livesport Finder LCGJK Bold

### Note text
- `font-size: 11px`, `font-weight: 400`, `line-height: 14px`
- `color: #555E61`
- `text-align: center`
- Font: Livesport Finder LCGJK Regular

## Design Tokens

| Token | Value |
|---|---|
| Widget bottom padding | 20px |
| Body padding | 12px 12px 16px |
| Body gap | 12px |
| Row gap | 8px |
| Icon size | 16px × 16px |
| Icon color | #555E61 |
| Author font | 13px Bold, line-height 16px |
| Author color | #001E28 |
| Note font | 11px Regular, line-height 14px |
| Note color | #555E61 |

## Usage Context
- Used in match detail pages to display audio commentary information
- Shows who is providing the commentary
- Provides a link to listen to the audio commentary
- Additional note can provide context (e.g., availability, language, etc.)

## Variations
- Author name can be any commentator or broadcaster name
- Note text can be customized for different contexts
- Audio button label can be changed (Listen, Listen Live, Audio, etc.)
