# FSOddsCell

## Component Type
Atom

## Description
An odds cell used in Match Detail odds rows. Displays a bookmaker odds value with optional up/down movement indicator and external link icon. Supports five type variants and two states (default, highlighted).

## Dependencies
- `Assets/Icons/Incidents/Arrow up.svg` — up indicator (odds increasing)
- `Assets/Icons/Incidents/Arrow down.svg` — down indicator (odds decreasing)
- `Assets/Icons/Action/External link.svg` — external link icon
- Font: `DesignTokens/Typography/font-family/LivesportFinderLCGJK-Bold_Static.woff2`

## Variants

### Type
- *(base)* `fs-odds-cell` — Pre-match: white background, `#C8CDCD` border, 67×30px, 8px radius
- `fs-odds-cell--live` — Live: same as pre-match but value text in `#FF0046`
- `fs-odds-cell--post-match` — Post-match: same as pre-match, no indicator in default state
- `fs-odds-cell--number` — Number: 67×32px, transparent, no border
- `fs-odds-cell--text` — Text: min-width 67px × 32px, transparent, no border

### State
- *(base)* — Default
- `fs-odds-cell--highlighted` — Pre-match: blue bg `#EEF7FF` | Live: white bg | Post-match: gold bg `#F5BA57`, no border

### Indicator direction
- *(base)* `fs-odds-cell__indicator` — Arrow up, fill `#1AB546` (odds increasing)
- `fs-odds-cell__indicator--down` — Arrow down, fill `#DC0000` (odds decreasing)

## Usage Examples

### Pre-match default (arrow up)
```html
<div class="fs-odds-cell">
    <div class="fs-odds-cell__content">
        <span class="fs-odds-cell__value">1.85</span>
    </div>
    <div class="fs-odds-cell__indicator">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.132 0L1 9.133L1.957 10.092L9.454 2.594V20H10.809V2.593L18.307 10.092L19.264 9.133L10.132 0Z" fill="#1AB546"/>
        </svg>
    </div>
    <div class="fs-odds-cell__external-link">
        <svg width="6" height="6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.27441 0V1.36621H3.03711L1.36719 3.03613V16.959L3.03711 18.6328H16.9629L18.6328 16.9619V11.7246H20V17.5293L17.5283 19.998H2.4707L0 17.5244V2.46973L2.4707 0H8.27441ZM20 0V8.27441H18.6328V2.33398L10.8281 10.1377L9.86133 9.16992L17.666 1.36621H11.7246V0H20Z" fill="#555E61"/>
        </svg>
    </div>
</div>
```

### Live highlighted (arrow down)
```html
<div class="fs-odds-cell fs-odds-cell--live fs-odds-cell--highlighted">
    <div class="fs-odds-cell__content">
        <span class="fs-odds-cell__value">2.10</span>
    </div>
    <div class="fs-odds-cell__indicator fs-odds-cell__indicator--down">
        <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1319 20.0001L19.2639 10.8671L18.3069 9.90809L10.8099 17.4061L10.8099 9.15527e-05H9.45495L9.45495 17.4071L1.95695 9.90809L0.999947 10.8671L10.1319 20.0001Z" fill="#DC0000"/>
        </svg>
    </div>
    <div class="fs-odds-cell__external-link">
        <svg width="6" height="6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.27441 0V1.36621H3.03711L1.36719 3.03613V16.959L3.03711 18.6328H16.9629L18.6328 16.9619V11.7246H20V17.5293L17.5283 19.998H2.4707L0 17.5244V2.46973L2.4707 0H8.27441ZM20 0V8.27441H18.6328V2.33398L10.8281 10.1377L9.86133 9.16992L17.666 1.36621H11.7246V0H20Z" fill="#555E61"/>
        </svg>
    </div>
</div>
```

## Technical Details

### Sizes
| Type | Width | Height |
|---|---|---|
| Pre-match / Live / Post-match | 67px | 30px |
| Number | 67px | 32px |
| Text | min-width 67px | 32px |

### Colors
| Variant + State | Background | Border | Value color |
|---|---|---|---|
| Pre-match default | `#FFFFFF` | `#C8CDCD` | `#001E28` |
| Pre-match highlighted | `#EEF7FF` | `#C8CDCD` | `#001E28` |
| Live default | `#FFFFFF` | `#C8CDCD` | `#FF0046` |
| Live highlighted | `#FFFFFF` | `#C8CDCD` | `#FF0046` |
| Post-match default | `#FFFFFF` | `#C8CDCD` | `#001E28` |
| Post-match highlighted | `#F5BA57` | none | `#001E28` |

### Indicator colors
- Arrow up (increasing): `#1AB546`
- Arrow down (decreasing): `#DC0000`

### Layout
- Indicator: `position: absolute`, left 6px, vertically centered, 12×12px
- External link: `position: absolute`, right 4px, top 4px, 6×6px
- Content: flex, padded left 12px to avoid overlap with indicator
