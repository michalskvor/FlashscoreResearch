# FSBadgeNotification Component

A notification badge component for displaying unread counts, alerts, and notification indicators.

## Overview

The FSBadgeNotification component is a compact badge used to display notification counts, live indicators, and status alerts on icons, buttons, or other UI elements. It supports multiple variants with interactive states.

## Features

- **Multiple Variants**: Primary, Secondary, and Live badges
- **Interactive States**: Hover and selected states with smooth transitions
- **Numbered Badges**: Display notification counts and labels
- **Positioned Variant**: Absolute positioning for overlaying on icons
- **Responsive Design**: Adapts to different screen sizes
- **Accessible**: Semantic HTML structure

## Variants

### Primary Badge (Default)
Default badge with light background and dark text. Transforms to red background with white text on hover/selected.

```html
<div class="badge badge-primary">5</div>

<!-- Selected state -->
<div class="badge badge-primary badge-selected">5</div>
```

### Secondary Badge
Badge with gray background. Transforms to dark background with white text on hover/selected.

```html
<div class="badge badge-secondary">3</div>

<!-- Selected state -->
<div class="badge badge-secondary badge-selected">3</div>
```

### Live Badge
Special badge for live events with red tint. Transforms to solid red background on selected.

```html
<div class="badge badge-live">LIVE</div>

<!-- Selected state -->
<div class="badge badge-live badge-selected">LIVE</div>
```

### Positioned Variant
For absolute positioning over icons or buttons:

```html
<div class="icon-wrapper" style="position: relative;">
    <svg><!-- Icon --></svg>
    <div class="badge badge-primary badge-positioned">3</div>
</div>
```

## Design Tokens

### Primary Badge Colors
- **Background (Base)**: `#001E281A` (slate-black/10)
- **Text (Base)**: `#001E28` (slate-black/500)
- **Background (Active/Hover)**: `#FF0046` (brand-red/500)
- **Text (Active/Hover)**: `#FFFFFF` (white)

### Secondary Badge Colors
- **Background (Base)**: `#E8E9E9` (slate-black/100)
- **Text (Base)**: `#001E28` (slate-black/500)
- **Background (Active)**: `#001E28` (slate-black/500)
- **Text (Active)**: `#FFFFFF` (white)

### Live Badge Colors
- **Background (Base)**: `#FFE6F3` (brand-red/50)
- **Text (Base)**: `#FF0046` (brand-red/500)
- **Background (Active)**: `#FF0046` (brand-red/500)
- **Text (Active)**: `#FFFFFF` (white)

### Typography
- **Font Family**: Livesport Finder LCGJK
- **Font Size**: 10px
- **Font Weight**: 700 (Bold)

### Sizing & Layout
- **Min Width**: 16px
- **Height**: 16px
- **Padding**: 0 4px
- **Border Radius**: 4px (rounded corners)

### Transitions
- **Duration**: 0.2s
- **Properties**: background-color, color
- **Easing**: Default (ease)

## Usage Guidelines

### When to Use
- To display unread message or notification counts
- To indicate live events or active states
- To show new or updated content
- As a status indicator on navigation items
- For interactive filters or category selections

### Variant Selection
- **Primary**: Default choice for most notification badges
- **Secondary**: Use for less prominent or secondary information
- **Live**: Reserved for live events, breaking news, or urgent alerts

### Best Practices
- Keep text brief (use numbers or short labels like "LIVE", "NEW")
- Use selected state to indicate active filters or current section
- Position consistently across similar UI elements
- Ensure sufficient contrast for accessibility
- Don't overuse - reserve for important notifications
- Leverage hover states for interactive badges

### Accessibility
- Use semantic HTML structure
- Provide appropriate ARIA labels when needed (e.g., `aria-label="3 unread notifications"`)
- Ensure color contrast meets WCAG standards
- All variants maintain minimum 4.5:1 contrast ratio
- Consider adding screen reader text for notification counts

## Examples

### Usage in Tabs Secondary
The most common use case - badge next to text inside FSTabs Secondary variant:

```html
<div class="fs-tabs-row fs-tabs-row--secondary">
    <button class="fs-tabs fs-tabs--secondary">
        <span class="fs-tabs__text">All</span>
        <div class="badge badge-secondary">24</div>
    </button>

    <div class="fs-tabs fs-tabs--secondary fs-tabs--active">
        <span class="fs-tabs__text">Live</span>
        <div class="badge badge-live badge-selected">5</div>
    </div>

    <button class="fs-tabs fs-tabs--secondary">
        <span class="fs-tabs__text">Finished</span>
        <div class="badge badge-secondary">12</div>
    </button>

    <button class="fs-tabs fs-tabs--secondary">
        <span class="fs-tabs__text">Scheduled</span>
        <div class="badge badge-secondary">7</div>
    </button>
</div>
```

**Note:** Requires the FSTabs component CSS to be loaded. Include both stylesheets:
```html
<link rel="stylesheet" href="../FSTabs/FSTabs.css">
<link rel="stylesheet" href="FSBadgeNotification.css">
```

### Navigation Item with Badge
```html
<a href="#" class="nav-item" style="position: relative;">
    <span class="nav-icon">🔔</span>
    <div class="badge badge-primary badge-positioned">12</div>
</a>
```

### Live Event Indicator
```html
<div class="match-item">
    <div class="badge badge-live">LIVE</div>
    <span class="match-info">Team A vs Team B</span>
</div>

<!-- Selected live match -->
<div class="match-item">
    <div class="badge badge-live badge-selected">LIVE</div>
    <span class="match-info">Team C vs Team D</span>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- **FSBadgeMeta**: For general informational labels and metadata
- **FSBadgeForm**: For match result status badges
- **FSAssetBoxed**: For boxed icon assets

## File Structure

```
FSBadgeNotification/
├── FSBadgeNotification.html      # Component demo and examples
├── FSBadgeNotification.css       # Component styles
└── FSBadgeNotification.README.md # This file
```

## Notes

- The notification badge uses a circular shape with `border-radius: 50%`
- Minimum width ensures single-digit numbers are circular
- Padding adjusts automatically for longer counts
- The positioned variant uses `position: absolute` for overlay placement
- Parent element needs `position: relative` when using positioned variant
