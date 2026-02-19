# FSButton

## Component Type
Atom

## Description
A multi-purpose button component supporting two intents (Primary, Brand), three appearances (Solid, Outlined, Minimal) and three sizes (Large, Medium, Small). Optionally includes a leading icon, trailing icon, both, or neither. An icon-only square variant is also supported.

## Dependencies
- `Assets/Icons/Action/Search.svg` — default leading icon in demos
- `Assets/Icons/Action/Navigation/Arrow/Right.svg` — default trailing icon in demos
- Font: `DesignTokens/Typography/font-family/LivesportFinderLCGJK-Bold_Static.woff2`

## Variants

### Intent
- `fs-button--primary`: Dark navy `#0F2D37`
- `fs-button--brand`: Brand red `#FF0046`

### Appearance
- `fs-button--solid`: Filled background, white text and icons
- `fs-button--outlined`: White background, intent-colored border, text and icons
- `fs-button--minimal`: No background, no border, intent-colored text and icons

### Size
- `fs-button--large`: 40px height, 11px padding, 8px gap, leading icon 18px, trailing icon 14px
- `fs-button--medium`: 32px height, 8px padding, 6px gap, leading icon 16px, trailing icon 12px
- `fs-button--small`: 28px height, 7px padding, 4px gap, leading icon 14px, trailing icon 12px

### Icon configuration
Icons are optional. Omit the element from markup to remove it:
- **Full**: `icon-lead` + `label` + `icon-trail`
- **No leading**: `label` + `icon-trail`
- **No trailing**: `icon-lead` + `label`
- **Label only**: `label`
- **Icon only**: `icon-lead` + modifier `fs-button--icon-only` (square layout)

## Usage Examples

### Primary Solid Large (full icons)
```html
<button class="fs-button fs-button--primary fs-button--solid fs-button--large">
    <div class="fs-button__icon-lead">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.013 14.639C4.359 14.639 1.387 11.666 1.387 8.013C1.387 4.359 4.359 1.387 8.013 1.387C11.666 1.387 14.638 4.359 14.638 8.013C14.638 11.666 11.666 14.639 8.013 14.639ZM20 19.021L14.119 13.139C15.291 11.745 16.025 9.972 16.025 8.013C16.025 3.595 12.43 0 8.013 0C3.594 0 0 3.595 0 8.013C0 12.431 3.594 16.026 8.013 16.026C9.972 16.026 11.745 15.291 13.138 14.119L19.019 20L20 19.021Z" fill="#001E28"/>
        </svg>
    </div>
    <span class="fs-button__label">Title</span>
    <div class="fs-button__icon-trail">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 19.022L14.025 9.999L5.002 0.977L5.98 0L15.98 9.999L5.978 19.999L5 19.024V19.022Z" fill="#001E28"/>
        </svg>
    </div>
</button>
```

### Brand Outlined Medium (label only)
```html
<button class="fs-button fs-button--brand fs-button--outlined fs-button--medium">
    <span class="fs-button__label">Title</span>
</button>
```

### Primary Solid Large (icon only — square)
```html
<button class="fs-button fs-button--primary fs-button--solid fs-button--large fs-button--icon-only">
    <div class="fs-button__icon-lead">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.013 14.639C4.359 14.639 1.387 11.666 1.387 8.013C1.387 4.359 4.359 1.387 8.013 1.387C11.666 1.387 14.638 4.359 14.638 8.013C14.638 11.666 11.666 14.639 8.013 14.639ZM20 19.021L14.119 13.139C15.291 11.745 16.025 9.972 16.025 8.013C16.025 3.595 12.43 0 8.013 0C3.594 0 0 3.595 0 8.013C0 12.431 3.594 16.026 8.013 16.026C9.972 16.026 11.745 15.291 13.138 14.119L19.019 20L20 19.021Z" fill="#001E28"/>
        </svg>
    </div>
</button>
```

## Technical Details

### Colors
| Intent | Solid bg | Outlined border | Text/icon |
|---|---|---|---|
| Primary | `#0F2D37` | `#0F2D37` | `#0F2D37` / white on solid |
| Brand | `#FF0046` | `#FF0046` | `#FF0046` / white on solid |

### Typography
- Large + Medium: `font-size: 13px`, `line-height: 16px`, bold, uppercase
- Small: `font-size: 11px`, `line-height: 14px`, bold, uppercase
- Font: `Livesport Finder LCGJK` 700

### Icon fill colouring
SVG path fills are controlled entirely via CSS — the HTML `fill` attribute on the path is the asset default (`#001E28`) and is overridden per intent/appearance by selectors such as:
```css
.fs-button--primary.fs-button--solid .fs-button__icon-lead svg path { fill: #FFFFFF; }
```

### Sizing note
Padding values of `11px` (Large) and `7px` (Small) are odd numbers explicitly specified in the Figma design spec. They are permitted under the Even-Number Rule exception.

## Design System Compliance
- HEX color values only
- Icon-only `width` pinned to equal `height` to ensure square layout
- Icons sourced from `Assets/Icons/`
- Font from `DesignTokens/Typography/`
