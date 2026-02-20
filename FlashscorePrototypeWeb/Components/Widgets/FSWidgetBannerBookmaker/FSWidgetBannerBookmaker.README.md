# FSWidgetBannerBookmaker

## Component Type
Widget

## Description
A bookmaker banner widget displaying one or more FSBannerBookmaker molecules in a vertical stack. Optionally includes a small gambling warning text below the banners. Used in match detail pages to surface bookmaker promotions alongside odds data.

## Dependencies

### Molecules
- `FSBannerBookmaker` — individual bookmaker promotional banner (`../../Molecules/FSBannerBookmaker/FSBannerBookmaker.css`)

## Structure

```
.fs-widget-banner-bookmaker
  ├── .fs-banner-bookmaker          (FSBannerBookmaker molecule × N)
  │     └── .fs-banner-bookmaker__content
  │           ├── .fs-banner-bookmaker__main
  │           │     ├── .fs-banner-bookmaker__text
  │           │     └── .fs-banner-bookmaker__button
  │           │           └── .fs-banner-bookmaker__button-label
  │           └── .fs-banner-bookmaker__additional       (optional)
  │                 └── .fs-banner-bookmaker__fine-print
  └── .fs-widget-banner-bookmaker__warning               (optional)
```

## Usage Examples

### 3 banners without warning
```html
<div class="fs-widget-banner-bookmaker">

    <a href="#" class="fs-banner-bookmaker" style="background-color: #017B5B;">
        <div class="fs-banner-bookmaker__content">
            <div class="fs-banner-bookmaker__main">
                <span class="fs-banner-bookmaker__text" style="color: #FFFFFF;">BET365 - Bet £10 &amp; Get £30 in Free Bets</span>
                <div class="fs-banner-bookmaker__button" style="background-color: #FFDF1B;">
                    <span class="fs-banner-bookmaker__button-label" style="color: #222222;">Claim bonus</span>
                </div>
            </div>
            <div class="fs-banner-bookmaker__additional">
                <span class="fs-banner-bookmaker__fine-print" style="color: #FFFFFF;">T&amp;Cs apply. 18+</span>
            </div>
        </div>
    </a>

    <!-- more FSBannerBookmaker items -->

</div>
```

### 3 banners with gambling warning
```html
<div class="fs-widget-banner-bookmaker">

    <!-- FSBannerBookmaker items -->

    <span class="fs-widget-banner-bookmaker__warning">Gambling can be addictive, please play responsibly. BeGambleAware.org. 18+</span>

</div>
```

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`, `width: 100%`
- `padding: 0 12px 12px` — no top padding, 12px left/right and bottom
- `gap: 4px` — spacing between banners (and between last banner and warning text)
- `box-sizing: border-box`

### Warning text
- `font-size: 12px`, `font-weight: 400`, `line-height: 16px`
- `color: #999999`
- `padding-top: 8px` — additional top spacing above the warning text
- `text-align: center`
- Font: Livesport Finder LCGJK Regular

### Asset paths from widget directory
- Molecule CSS: `../../Molecules/FSBannerBookmaker/FSBannerBookmaker.css`

## Variants

| Variant | Description |
|---|---|
| Without warning | Banner stack only, no footer text |
| With warning | Banner stack + `fs-widget-banner-bookmaker__warning` gambling disclaimer |
