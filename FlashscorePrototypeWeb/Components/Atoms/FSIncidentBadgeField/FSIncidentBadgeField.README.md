# FSIncidentBadgeField Component

Small badge container for displaying incident icons on match field visualizations.

## Overview

FSIncidentBadgeField is a compact square container designed to hold icons representing match incidents (goals, cards, substitutions, etc.) on field position visualizations or timelines. The component comes in two sizes and features a clean white background with a grey border.

## Sizes

### Small
- **Container**: 14x14px
- **Icon**: 10x10px
- **Use case**: Field positions, compact timelines, dense layouts

### Medium
- **Container**: 16x16px
- **Icon**: 12x12px
- **Use case**: Event lists, detailed views, larger displays

## Specifications

### Container
- **Background**: #FFFFFF (white)
- **Border**: 1px solid #C8CDCD (grey-a/500)
- **Border radius**: 4px
- **Overflow**: Hidden

### Icon
- **Color**: #001E28 (brand-slate-black/500)
- **Small size**: 10x10px
- **Medium size**: 12x12px

## Usage

### Small Size
```html
<div class="fs-incident-badge-field fs-incident-badge-field--small">
    <svg class="fs-incident-badge-field__icon" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <!-- Icon path -->
    </svg>
</div>
```

### Medium Size
```html
<div class="fs-incident-badge-field fs-incident-badge-field--medium">
    <svg class="fs-incident-badge-field__icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <!-- Icon path -->
    </svg>
</div>
```

## Icon Types

Always use ONLY icons from file Icons in Assets file. Name of the incident should be the same as name of the icon.



## Implementation Examples

### On Match Field
```html
<!-- Position incidents on field visualization -->
<div class="match-field">
    <div class="incident-marker" style="top: 30%; left: 20%;">
        <div class="fs-incident-badge-field fs-incident-badge-field--small">
            <svg class="fs-incident-badge-field__icon" width="10" height="10">
                <!-- Goal icon -->
            </svg>
        </div>
    </div>
</div>
```

### In Timeline
```html
<!-- Show incidents in timeline -->
<div class="match-timeline">
    <div class="timeline-event">
        <span class="time">23'</span>
        <div class="fs-incident-badge-field fs-incident-badge-field--small">
            <svg class="fs-incident-badge-field__icon" width="10" height="10">
                <!-- Goal icon -->
            </svg>
        </div>
        <span class="description">Goal - Player Name</span>
    </div>
</div>
```

### Event List
```html
<!-- Event list with medium badges -->
<ul class="event-list">
    <li class="event-item">
        <div class="fs-incident-badge-field fs-incident-badge-field--medium">
            <svg class="fs-incident-badge-field__icon" width="12" height="12">
                <!-- Card icon -->
            </svg>
        </div>
        <span>Yellow card - 45' - Player Name</span>
    </li>
</ul>
```

## Accessibility

- Include appropriate `alt` or `aria-label` attributes for icons
- Ensure sufficient color contrast (current: #001E28 on #FFFFFF = excellent)
- Consider adding tooltips for additional context

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | #FFFFFF | Container background |
| Border | #C8CDCD | Container border |
| Icon color | #001E28 | Icon fill/stroke |
| Border radius | 4px | Corner rounding |

## Size Comparison

| Size | Container | Icon | Padding | Best For |
|------|-----------|------|---------|----------|
| Small | 14x14px | 10x10px | 2px | Dense layouts, field positions |
| Medium | 16x16px | 12x12px | 2px | Event lists, detailed views |

## Figma Reference

- Node ID: 2314:4599 (Medium)
- Node ID: 2314:4576 (Small)
- Component: Atoms/Incident/IncidentBadgeField


## Notes

- Component is designed to be compact and fit within tight layouts
- White background ensures visibility on various colored backgrounds
- Border provides clear definition without being too prominent
- Icon size is optimized for clarity at small dimensions
- Flexbox centering ensures perfect icon alignment
- Component is purely presentational - no interactive states
- Can be used standalone or within larger incident display components
- In Storybook, this atom is united with Atoms/Incident/IncidentBadge
