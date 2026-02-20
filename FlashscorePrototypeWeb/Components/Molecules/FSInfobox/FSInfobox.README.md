# FSInfobox

## Component Type
Molecule

## Description
An information box component for displaying contextual information, tips, or notifications. Features optional leading icon, optional heading, required text, optional textlink, and optional close button in the top-right corner.

## Dependencies

### Atoms
- `FSButtonClose` — close button (small variant) (`../../Atoms/FSButtonClose/FSButtonClose.css`)

## Structure

```
.fs-infobox [.fs-infobox--with-close]
  ├── .fs-infobox__content
  │     ├── .fs-infobox__icon (optional)
  │     └── .fs-infobox__text-container
  │           ├── .fs-infobox__heading (optional)
  │           ├── .fs-infobox__text (required)
  │           └── .fs-infobox__textlink-container (optional)
  │                 └── .fs-infobox__textlink
  └── .fs-infobox__close (optional)
        └── button.fs-button-close.fs-button-close--small (FSButtonClose atom)
              └── img.fs-button-close__icon
```

## Usage Examples

### Minimal — Text only
```html
<div class="fs-infobox">
    <div class="fs-infobox__content">
        <div class="fs-infobox__text-container">
            <p class="fs-infobox__text">Official lineups expected today around 18:30</p>
        </div>
    </div>
</div>
```

### Icon + Text
```html
<div class="fs-infobox">
    <div class="fs-infobox__content">
        <img src="../Assets/Icons/Settings/Info.svg" alt="" class="fs-infobox__icon">
        <div class="fs-infobox__text-container">
            <p class="fs-infobox__text">Official lineups expected today around 18:30</p>
        </div>
    </div>
</div>
```

### Heading + Text
```html
<div class="fs-infobox">
    <div class="fs-infobox__content">
        <div class="fs-infobox__text-container">
            <p class="fs-infobox__heading">Average Player Rating</p>
            <p class="fs-infobox__text">The average rating of each player is based on their performance in their last 5 games.</p>
        </div>
    </div>
</div>
```

### Full variant — Icon + Heading + Text + Textlink + Close button
```html
<div class="fs-infobox fs-infobox--with-close">
    <div class="fs-infobox__content">
        <img src="../Assets/Icons/Settings/Info.svg" alt="" class="fs-infobox__icon">
        <div class="fs-infobox__text-container">
            <p class="fs-infobox__heading">Look at our data-driven lineup prediction</p>
            <p class="fs-infobox__text">Confirmed lineups will be available closer to kick-off.</p>
            <div class="fs-infobox__textlink-container">
                <p class="fs-infobox__textlink"><a href="#">More about predicted lineups</a></p>
            </div>
        </div>
    </div>
    <div class="fs-infobox__close">
        <button class="fs-button-close fs-button-close--small" aria-label="Close">
            <img src="../Assets/Icons/Action/Navigation/Close.svg" alt="" class="fs-button-close__icon">
        </button>
    </div>
</div>
```

## Technical Details

### Container
- `display: flex`, `flex-direction: column`, `gap: 8px`
- `background: #FFFFFF`, `border: 1px solid #EEEEEE`, `border-radius: 8px`
- `padding: 8px 12px` (default)
- `width: 100%` — responsive, fills parent container
- `box-sizing: border-box`

### With close button modifier
- `.fs-infobox--with-close` adds `padding-right: 36px` to make room for the close button

### Content row
- `display: flex`, `align-items: flex-start`, `gap: 8px`
- `width: 100%`

### Leading icon (optional)
- `width: 16px`, `height: 16px`, `flex-shrink: 0`
- Typically uses `Info.svg` or `Info rounded.svg`

### Text container
- `flex: 1`, `min-width: 0`
- `display: flex`, `flex-direction: column`, `gap: 4px`

### Heading (optional)
- `font-size: 13px`, `font-weight: 700`, `line-height: 16px`
- `color: #001E28`
- Font: Livesport Finder LCGJK Bold

### Text (required)
- `font-size: 12px`, `font-weight: 400`, `line-height: 14px`
- `color: #001E28`
- Font: Livesport Finder LCGJK Regular
- `white-space: pre-wrap` — preserves line breaks

### Textlink container (optional)
- `display: flex`, `align-items: center`, `padding-top: 4px`

### Textlink (optional)
- `font-size: 12px`, `font-weight: 400`, `line-height: 14px`
- `color: #555E61`, `text-decoration: underline`
- Hover: `color: #001E28`

### Close button (optional)
- Container: `position: absolute`, `top: 0`, `right: 0`
- Uses `FSButtonClose` atom with `--small` variant
- Icon: `width: 12px`, `height: 12px`, color #999999 (base), #BBBBBB (hover)
- Total clickable area: 28px × 28px

## Variants

| Variant | Description |
|---|---|
| Text only | Minimal: just the required text, no heading, no icon, no close |
| Icon + Text | Leading icon + text |
| Heading + Text | Bold heading + text, no icon |
| Icon + Heading + Text | Full informational layout without close button |
| Icon + Heading + Text + Close | Full layout with dismissible close button |
| Icon + Heading + Text + Textlink + Close | Maximum variant with all optional elements |

## Rules

- **Text is required** — all other elements (icon, heading, textlink, close button) are optional
- **Close button requires modifier** — when using `.fs-infobox__close`, always add `.fs-infobox--with-close` to the container
- **Icon size** — leading icon is always 16px × 16px, close icon is always 12px × 12px
- **Spacing** — follows 4/8px grid (gap: 8px between icon and text, gap: 4px within text container)
- **Width** — always `width: 100%`, responsive to parent container
- **Accessibility** — close button must have `aria-label="Close"` attribute

## Asset Paths

From molecule directory:
- Leading icon: `../../../Assets/Icons/Settings/Info.svg`
- Close icon: `../../../Assets/Icons/Action/Navigation/Close.svg`

## Design Tokens

| Token | Value |
|---|---|
| Background | #FFFFFF |
| Border | 1px solid #EEEEEE |
| Border radius | 8px |
| Padding vertical | 8px |
| Padding horizontal | 12px (36px right with close) |
| Text primary color | #001E28 |
| Text secondary color | #555E61 |
| Heading font | 13px Bold, line-height 16px |
| Text font | 12px Regular, line-height 14px |
| Icon size (leading) | 16px × 16px |
| Icon size (close) | 12px × 12px |
