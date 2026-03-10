# FSWidgetStreaming

## Component Type
Widget

## Description
A widget displaying available streaming sources for a match. Shows streaming platform links in a wrapped layout using boxed buttons.

## Dependencies
- FSHeadersSection (Molecule)
- FSButtonStream (Atom) - uses Textlink Boxed variant (default)

## Structure

```
.fs-widget-streaming
  ├── .fs-headers-section
  │     └── "Streaming" text left
  └── .fs-widget-streaming__body
        └── .fs-widget-streaming__sources
              └── a.fs-button-stream × N (streaming sources)
```

## Usage Example

```html
<div class="fs-widget-streaming">
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">Streaming</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <div class="fs-widget-streaming__body">
        <div class="fs-widget-streaming__sources">
            <a href="#" class="fs-button-stream">
                <span class="fs-button-stream__label">DAZN</span>
                <img src="../../../Assets/Icons/Action/External link.svg" alt="" class="fs-button-stream__icon">
            </a>
            <a href="#" class="fs-button-stream">
                <span class="fs-button-stream__label">Sky Sports</span>
                <img src="../../../Assets/Icons/Action/External link.svg" alt="" class="fs-button-stream__icon">
            </a>
            <!-- More streaming sources... -->
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
- Contains the sources wrapper

### Sources wrapper
- `display: flex`, `flex-wrap: wrap`
- `gap: 8px`
- `align-items: center`
- Contains FSButtonStream components (Textlink Boxed variant)

## Design Tokens

| Token | Value |
|---|---|
| Widget bottom padding | 20px |
| Body padding | 16px 12px 0 |
| Sources gap | 8px |
| Button variant | Textlink Boxed (default) |

## Usage Context
- Used in match detail pages to display streaming platform links
- Similar to FSWidgetTVchannels but uses boxed buttons instead of plain text
- No "Show more" functionality - all sources shown at once

## Differences from FSWidgetTVchannels
- Uses FSButtonStream Textlink Boxed variant (with border and icon)
- FSWidgetTVchannels uses Textlink variant (no border, no icon)
- No "Show more" button
- Different header text ("Streaming" vs "TV CHANNEL")
