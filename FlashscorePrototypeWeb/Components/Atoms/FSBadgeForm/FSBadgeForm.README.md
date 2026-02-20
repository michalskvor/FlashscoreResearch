# FSBadgeForm Component

A compact badge component for displaying match results and team form indicators.

## Overview

FSBadgeForm displays match outcomes (Win, Draw, Lose) and other statuses in a small, colored badge format. Commonly used to show team form over recent matches.

## Variants

### Basic Status Badges

- **Win** - Green badge with "W" label
- **Draw** - Orange badge with "D" label
- **Lose** - Red badge with "L" label
- **Unknown** - Grey badge with "?" label

### Icon Variants

- **Plus** - Green badge with plus icon
- **Minus** - Red badge with minus icon
- **Informative** - White badge with any instance of icon

### Combined Status Badges

Shows current status with a small corner triangle indicating previous status:

- **Win + Draw** - Green badge with orange corner
- **Win + Lose** - Green badge with red corner
- **Draw + Win** - Orange badge with green corner
- **Draw + Lose** - Orange badge with red corner
- **Lose + Win** - Red badge with green corner
- **Lose + Draw** - Red badge with orange corner

## Specifications

- **Size**: 20x20px
- **Border radius**: 4px
- **Typography**: Livesport Finder LCGJK, 13px, line-height 16px
- **Text color**: White (#FFFFFF)

## Color Palette

- **Win (Green)**: #00A83F
- **Draw (Orange)**: #F3A000
- **Lose (Red)**: #DC0000
- **Unknown (Grey)**: #C8CDCD
- **Informative (White)**: #FFFFFF

## Badge Row Variant

**NEW:** Container class for displaying a row of 5 badges with consistent 4px gap.

### Usage

```html
<!-- Badge row with 5 badges (4px gap) -->
<div class="fs-badge-form-row">
    <div class="fs-badge-form fs-badge-form--win">
        <span class="fs-badge-form__text">W</span>
    </div>
    <div class="fs-badge-form fs-badge-form--win">
        <span class="fs-badge-form__text">W</span>
    </div>
    <div class="fs-badge-form fs-badge-form--draw">
        <span class="fs-badge-form__text">D</span>
    </div>
    <div class="fs-badge-form fs-badge-form--lose">
        <span class="fs-badge-form__text">L</span>
    </div>
    <div class="fs-badge-form fs-badge-form--win">
        <span class="fs-badge-form__text">W</span>
    </div>
</div>
```

### Specifications

- **Container**: `.fs-badge-form-row`
- **Display**: `flex`, `flex-direction: row`
- **Gap**: 4px
- **Alignment**: `align-items: center`
- **Typical usage**: Shows last 5 match results in a horizontal row

## Individual Badge Usage

```html
<!-- Basic win badge -->
<div class="fs-badge-form fs-badge-form--win">
    <span class="fs-badge-form__text">W</span>
</div>

<!-- Combined status: Win with Draw corner -->
<div class="fs-badge-form fs-badge-form--win-draw">
    <span class="fs-badge-form__text">W</span>
    <span class="fs-badge-form__corner fs-badge-form__corner--draw"></span>
</div>

<!-- Plus icon variant -->
<div class="fs-badge-form fs-badge-form--plus">
    <svg class="fs-badge-form__icon" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M5 0V10M0 5H10" stroke="white" stroke-width="2"/>
    </svg>
</div>
```

## Common Use Cases

1. **Team Form Display** - Show last 5 match results in a horizontal row
2. **Match History** - Display sequence of results for a team or player
3. **Performance Indicators** - Quick visual representation of recent performance

## Figma Reference

- [Storybook Documentation](https://storybook-wcl.okubefs1.kube.lsoffice.cz/?path=/docs/components-badges-badgeform--docs)
- Figma Node ID: 540:60921

## Notes

- Badges are designed to be displayed in horizontal sequences
- The corner indicator in combined badges shows secondary/previous status
- Icon variants use inline SVG for maximum flexibility
- All colors use HEX values as per design system requirements
