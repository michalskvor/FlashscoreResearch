# FSBreadcrumb Component

## Overview
FSBreadcrumb is a navigation molecule component that displays hierarchical page location or categorization. It provides visual context for where users are within the application structure.

## Component Type
**Molecule** - Composed of multiple breadcrumb items with icons/flags and separator icons

## Variants

### Layout Variants
1. **Boxed** - White background with 16px padding and bottom divider
2. **Not Boxed** - No background, 12px vertical padding, no divider

### Item Type Variants
1. **Base** - Text only, no icon (for generic items like match names)
2. **Sport** - 14px sport icon + text (for sport categories)
3. **Tournament** - 14px tournament icon + text (for competitions)
4. **Country** - 14px flag + text (for countries/regions)

### Level Variants
- **2 Levels** - Sport > Country
- **3 Levels** - Sport > Country > Tournament
- **4 Levels** - Sport > Country > Tournament > Match

## Visual Specifications

### Typography
- **Font Family**: Livesport Finder LCGJK Bold
- **Font Size**: 12px
- **Font Weight**: 700 (Bold)
- **Line Height**: 14px
- **Text Transform**: Uppercase
- **Text Color**: #555E61 (secondary text)

### Icons & Assets
- **Separator Icon**: Right arrow chevron, 10px × 10px, #999999
- **Item Icons**: 14px × 14px
  - Sport icon: #555E61 color
  - Tournament icon: #E31E24 color (red)
  - Country flag: Full color, 14px container
- **Icon Sources**:
  - Separator: Assets/Icons/Action/Navigation/Arrow/Right.svg
  - Sport: Assets/Icons/Sport/Soccer.svg (example)
  - Country Flag: Assets/Flags/England.imageset/England.svg (example)

### Spacing
- **Gap Between Icon and Text**: 8px
- **Gap Between Items**: 8px
- **Boxed Padding**: 16px (all sides)
- **Not Boxed Padding**: 12px top/bottom, 0 left/right
- **Item Height**: 14px
- **Icon/Flag Size**: 14px × 14px

### Colors
- **Background (Boxed)**: #FFFFFF (white)
- **Background (Not Boxed)**: Transparent
- **Text**: #555E61 (secondary text)
- **Separator Icon**: #999999 (gray)
- **Sport Icon**: #555E61 (secondary)
- **Tournament Icon**: #E31E24 (red)
- **Divider**: #EEEEEE (separator primary)

## Structure

```html
<div class="fs-breadcrumb fs-breadcrumb--boxed">
    <div class="fs-breadcrumb__items">
        <!-- Sport item -->
        <div class="fs-breadcrumb__item fs-breadcrumb__item--sport">
            <div class="fs-breadcrumb__item-icon">
                <svg>...</svg>
            </div>
            <span class="fs-breadcrumb__text">Football</span>
        </div>
        <!-- Separator -->
        <div class="fs-breadcrumb__separator">
            <svg>...</svg>
        </div>
        <!-- Country item -->
        <div class="fs-breadcrumb__item fs-breadcrumb__item--country">
            <div class="fs-breadcrumb__item-flag">
                <svg>...</svg>
            </div>
            <span class="fs-breadcrumb__text">England</span>
        </div>
    </div>
    <div class="fs-breadcrumb__divider"></div>
</div>
```

## CSS Classes

### Block
- `.fs-breadcrumb` - Main container

### Modifiers
- `.fs-breadcrumb--boxed` - Boxed variant with white background

### Elements
- `.fs-breadcrumb__items` - Container for breadcrumb items and separators
- `.fs-breadcrumb__item` - Individual breadcrumb item wrapper
- `.fs-breadcrumb__item--base` - Base type item (text only)
- `.fs-breadcrumb__item--sport` - Sport type item (with icon)
- `.fs-breadcrumb__item--tournament` - Tournament type item (with icon)
- `.fs-breadcrumb__item--country` - Country type item (with flag)
- `.fs-breadcrumb__item-icon` - Icon container for sport/tournament
- `.fs-breadcrumb__item-flag` - Flag container for country
- `.fs-breadcrumb__text` - Text label for breadcrumb item
- `.fs-breadcrumb__separator` - Separator icon (chevron) container
- `.fs-breadcrumb__divider` - Bottom divider line (boxed variant only)

## Usage Examples

### Base Item (No Icon)
```html
<div class="fs-breadcrumb__item fs-breadcrumb__item--base">
    <span class="fs-breadcrumb__text">Match Name</span>
</div>
```

### Sport Item
```html
<div class="fs-breadcrumb__item fs-breadcrumb__item--sport">
    <div class="fs-breadcrumb__item-icon">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <!-- Sport icon SVG with fill="#555E61" -->
        </svg>
    </div>
    <span class="fs-breadcrumb__text">Football</span>
</div>
```

### Tournament Item
```html
<div class="fs-breadcrumb__item fs-breadcrumb__item--tournament">
    <div class="fs-breadcrumb__item-icon">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <!-- Tournament icon SVG with fill="#E31E24" -->
        </svg>
    </div>
    <span class="fs-breadcrumb__text">Championship</span>
</div>
```

### Country Item
```html
<div class="fs-breadcrumb__item fs-breadcrumb__item--country">
    <div class="fs-breadcrumb__item-flag">
        <svg width="14" height="10" viewBox="0 0 24 16" fill="none">
            <!-- Country flag SVG -->
        </svg>
    </div>
    <span class="fs-breadcrumb__text">England</span>
</div>
```

### Complete Breadcrumb - Boxed
```html
<div class="fs-breadcrumb fs-breadcrumb--boxed">
    <div class="fs-breadcrumb__items">
        <!-- Sport -->
        <div class="fs-breadcrumb__item fs-breadcrumb__item--sport">
            <div class="fs-breadcrumb__item-icon"><svg>...</svg></div>
            <span class="fs-breadcrumb__text">Football</span>
        </div>
        <div class="fs-breadcrumb__separator"><svg>...</svg></div>

        <!-- Country -->
        <div class="fs-breadcrumb__item fs-breadcrumb__item--country">
            <div class="fs-breadcrumb__item-flag"><svg>...</svg></div>
            <span class="fs-breadcrumb__text">England</span>
        </div>
        <div class="fs-breadcrumb__separator"><svg>...</svg></div>

        <!-- Tournament -->
        <div class="fs-breadcrumb__item fs-breadcrumb__item--tournament">
            <div class="fs-breadcrumb__item-icon"><svg>...</svg></div>
            <span class="fs-breadcrumb__text">Championship</span>
        </div>
        <div class="fs-breadcrumb__separator"><svg>...</svg></div>

        <!-- Match (Base) -->
        <div class="fs-breadcrumb__item fs-breadcrumb__item--base">
            <span class="fs-breadcrumb__text">Brentford - Bournemouth</span>
        </div>
    </div>
    <div class="fs-breadcrumb__divider"></div>
</div>
```

## Design System Compliance

### Spacing
- All spacing values follow 8px grid
- Gap: 8px
- Padding: 12px, 16px (multiples of 4)

### Colors
- All colors use HEX values only (no CSS variables)
- Colors are from design system palette

### Typography
- Uses official Livesport Finder LCGJK font
- Bold weight for emphasis (700)
- Uppercase transformation for consistency

## Accessibility Notes
- Use semantic navigation structure when implementing in production
- Consider adding `aria-label="Breadcrumb"` to container
- Last item should indicate current page location
- Consider adding schema.org breadcrumb markup for SEO

## References
- [GitLab Documentation](https://livesport.gitlab.io/flashscore/nodejs/npm/web-component-library/?path=/docs/atoms-breadcrumbs--docs)
- Figma Design: node-id=164:24198
