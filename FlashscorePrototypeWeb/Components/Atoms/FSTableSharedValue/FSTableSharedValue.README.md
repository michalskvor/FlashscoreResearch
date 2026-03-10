# FSTableSharedValue

## Component Type
Atom

## Description
A versatile table value display component used in statistics tables, standings, and match data. Supports multiple variants (Default, Highlight, Background, Background+Icon) and types (Primary, Live, Blue, Red, Yellow) for different contexts and data importance levels.

## Dependencies
None (standalone atom)

## Variants

### 1. Default
- Regular weight text
- No background
- Types: Primary (#001E28), Live (#FF0046)

### 2. Highlight
- Bold weight text
- No background
- Optional subvalue (bold + regular text with 2px gap)
- Types: Primary (#001E28), Live (#FF0046)

### 3. Background
- Bold weight text
- Colored background with 4px border radius
- Padding: 3px 2px
- Min-width: 20px, Max-height: 22px
- Types: Primary (grey), Live (pink), Blue, Red, Yellow

### 4. Background+Icon
- Bold weight text
- Colored background with 4px border radius
- Star icon positioned at top-right corner (-8px offset)
- Optional subvalue
- Types: Blue, Red, Yellow

## Types

| Type | Text Color | Background Color | Use Case |
|------|------------|------------------|----------|
| Primary | #001E28 | #555E61 (bg variant) | Regular values |
| Live | #FF0046 | #FFE6F3 (bg variant) | Live match values |
| Blue | #001E28 | #EEF7FF | Best/positive values |
| Red | #001E28 | #FBE5E5 | Red cards, negative values |
| Yellow | #001E28 | rgba(255,205,0,0.15) | Yellow cards, warnings |

## Usage Examples

### Default - Primary
```html
<div class="fs-table-shared-value fs-table-shared-value--default fs-table-shared-value--primary">
    <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">0</span>
</div>
```

### Default - Live
```html
<div class="fs-table-shared-value fs-table-shared-value--default fs-table-shared-value--live">
    <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">0</span>
</div>
```

### Highlight with Subvalue
```html
<div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
    <div class="fs-table-shared-value__text-container">
        <span class="fs-table-shared-value__text fs-table-shared-value__text--bold">5</span>
        <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">0</span>
    </div>
</div>
```

### Background - Blue
```html
<div class="fs-table-shared-value fs-table-shared-value--background fs-table-shared-value--blue">
    <span class="fs-table-shared-value__text fs-table-shared-value__text--bold">10</span>
</div>
```

### Background+Icon - Blue with Subvalue
```html
<div class="fs-table-shared-value fs-table-shared-value--background-icon fs-table-shared-value--blue">
    <div class="fs-table-shared-value__text-container">
        <span class="fs-table-shared-value__text fs-table-shared-value__text--bold">5</span>
        <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">0</span>
    </div>
    <div class="fs-table-shared-value__icon-container">
        <img src="../../../Assets/Icons/Other/Rating Star.svg" alt="" class="fs-table-shared-value__icon">
    </div>
</div>
```

## Technical Details

### Base Component
- `display: flex`, `align-items: center`, `justify-content: center`
- `text-align: center`, `white-space: nowrap`
- `line-height: 0`

### Text Styles
- Font: Livesport Finder LCGJK
- Size: 13px, Line height: 16px
- Weight: Regular (400) or Bold (700)

### Background Variant
- `min-width: 20px`, `max-height: 22px`
- `padding: 3px 2px`
- `border-radius: 4px`
- `overflow: hidden`

### Icon Container
- `position: absolute`
- `top: -8px`, `right: -8px`
- `width: 12px`, `height: 12px`

### Text Container (for subvalues)
- `display: flex`, `gap: 2px`
- `align-items: center`, `line-height: 0`

## Design Tokens

| Token | Value |
|---|---|
| Font family | Livesport Finder LCGJK |
| Font size | 13px |
| Line height | 16px |
| Font weight regular | 400 |
| Font weight bold | 700 |
| Gap (value/subvalue) | 2px |
| Padding (bg variants) | 3px 2px |
| Border radius | 4px |
| Min width (bg variants) | 20px |
| Max height (bg variants) | 22px |
| Icon size | 12px × 12px |
| Icon offset | -8px (top, right) |

## Color Tokens

| Type | Text | Background |
|------|------|------------|
| Primary (default) | #001E28 | - |
| Primary (background) | #FFFFFF | #555E61 |
| Live (default) | #FF0046 | - |
| Live (background) | #FF0046 | #FFE6F3 |
| Blue | #001E28 | #EEF7FF |
| Red | #001E28 | #FBE5E5 |
| Yellow | #001E28 | rgba(255,205,0,0.15) |

## Usage Context
- **Statistics Tables**: Player statistics, team standings
- **Match Data**: Goals, assists, cards in match tables
- **Live Scores**: Current match values highlighted in pink
- **Best Performance**: Blue background for best/highest values
- **Incidents**: Red for red cards, Yellow for yellow cards
- **Special Values**: Icon variant for particularly notable statistics

## Accessibility
- High contrast text on all backgrounds
- Clear visual hierarchy through bold/regular weights
- Color-blind friendly: Don't rely on color alone (use icons, bold text)
