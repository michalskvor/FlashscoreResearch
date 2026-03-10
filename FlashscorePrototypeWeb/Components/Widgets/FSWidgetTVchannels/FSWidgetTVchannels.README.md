# FSWidgetTVchannels

## Component Type
Widget

## Description
A widget displaying available TV channels for a match. Shows TV channel links as plain text in a wrapped layout with a "Show more" button at the end.

## Dependencies
- FSHeadersSection (Molecule)
- FSButtonStream (Atom) - uses Textlink variant (--textlink)

## Structure

```
.fs-widget-tv-channels
  ├── .fs-headers-section
  │     └── "TV CHANNEL" text left
  └── .fs-widget-tv-channels__body
        └── .fs-widget-tv-channels__channels
              ├── a.fs-button-stream.fs-button-stream--textlink × N (TV channels)
              └── a.fs-button-stream.fs-button-stream--show-more (Show more button)
```

## Usage Example

```html
<div class="fs-widget-tv-channels">
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">TV CHANNEL</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <div class="fs-widget-tv-channels__body">
        <div class="fs-widget-tv-channels__channels">
            <a href="#" class="fs-button-stream fs-button-stream--textlink">
                <span class="fs-button-stream__label">America TV (Per),</span>
                <img src="../../../Assets/Icons/Action/External link.svg" alt="" class="fs-button-stream__icon">
            </a>
            <a href="#" class="fs-button-stream fs-button-stream--textlink">
                <span class="fs-button-stream__label">Antel TV (Uru),</span>
                <img src="../../../Assets/Icons/Action/External link.svg" alt="" class="fs-button-stream__icon">
            </a>
            <!-- More TV channels... -->

            <!-- Show more button -->
            <a href="#" class="fs-button-stream fs-button-stream--show-more">
                <span class="fs-button-stream__label">Show more</span>
                <img src="../../../Assets/Icons/Action/Navigation/Arrow/Right.svg" alt="" class="fs-button-stream__icon">
            </a>
        </div>
    </div>
</div>
```

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`
- `padding-bottom: 20px`
- `width: 100%`

### Body
- `padding: 16px 12px 0`
- Contains the channels wrapper

### Channels wrapper
- `display: flex`, `flex-wrap: wrap`
- `gap: 8px`
- `align-items: center`
- Contains FSButtonStream components (Textlink variant) and Show more button

### Show more button
- Uses FSButtonStream with `--show-more` modifier
- Uses Right Arrow icon instead of External Link icon
- Icon color: `#001E28` (overridden via CSS filter)

## Design Tokens

| Token | Value |
|---|---|
| Widget bottom padding | 20px |
| Body padding | 16px 12px 0 |
| Channels gap | 8px |
| Button variant | Textlink (--textlink) |
| Show more icon color | #001E28 |

## Usage Context
- Used in match detail pages to display TV channel links
- Channels are displayed as plain text links with commas
- "Show more" button allows expanding to see additional channels
- Similar to FSWidgetStreaming but uses plain text buttons instead of boxed buttons

## Differences from FSWidgetStreaming
- Uses FSButtonStream Textlink variant (no border, no icon for channels)
- FSWidgetStreaming uses Textlink Boxed variant (with border and icon)
- Has "Show more" button at the end
- Different header text ("TV CHANNEL" vs "Streaming")
- Channel names include commas for text flow
