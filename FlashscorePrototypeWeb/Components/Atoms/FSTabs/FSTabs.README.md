# FSTabs Component

## Component Type
Atom

## Description
A tab navigation item component that displays a clickable text label with an active state indicator. The component comes in three visual styles: **Primary** (underline), **Secondary** (pill/button), and **Tertiary** (minimal). Designed for horizontal tab navigation bars across the FlashScore application.

## Variants

### Type Variants

#### Primary (default)
The default tab style with an underline indicator for the active state.

#### Secondary (`.fs-tabs--secondary`)
A pill-style button variant with filled background for the active state.

#### Tertiary (`.fs-tabs--tertiary`)
A minimal text-only variant with no visual distinction between active and inactive states. Only hover state provides feedback.

### State Variants

#### Active (`.fs-tabs--active`)
**Visual Style:**
- Text color: Brand red (`#FF0046`)
- Underline: 2px height, brand red (`#FF0046`)
- Font weight: Bold (700)

**When to Use:**
- Current/selected tab
- Active page section indicator
- Default selected filter

#### Inactive (base)
**Visual Style:**
- Text color: Grey (`#555E61`)
- No underline
- Font weight: Bold (700)

**When to Use:**
- Unselected tabs
- Available navigation options
- Clickable tab options

#### Hover (inactive tabs only)
**Visual Style:**
- Text color: Dark slate (`#001E28`)
- Smooth color transition
- Cursor: pointer

**When to Use:**
- User hovers over inactive tab
- Provides visual feedback for interactivity

## Usage Examples

### Primary Variant (Underline Style)

#### Active Tab (Current Page)
```html
<div class="fs-tabs fs-tabs--active">
    <span class="fs-tabs__text">Summary</span>
    <div class="fs-tabs__underline"></div>
</div>
```

#### Inactive Tab (Clickable)
```html
<button class="fs-tabs">
    <span class="fs-tabs__text">Statistics</span>
</button>
```

#### Tab Navigation Row
```html
<div style="display: flex; gap: 32px; align-items: flex-start;">
    <div class="fs-tabs fs-tabs--active">
        <span class="fs-tabs__text">Summary</span>
        <div class="fs-tabs__underline"></div>
    </div>

    <button class="fs-tabs">
        <span class="fs-tabs__text">Statistics</span>
    </button>

    <button class="fs-tabs">
        <span class="fs-tabs__text">Lineups</span>
    </button>

    <button class="fs-tabs">
        <span class="fs-tabs__text">H2H</span>
    </button>
</div>
```

#### Disabled Tab
```html
<button class="fs-tabs" disabled>
    <span class="fs-tabs__text">Standings</span>
</button>
```

### Secondary Variant (Pill Style)

#### Active Tab
```html
<div class="fs-tabs fs-tabs--secondary fs-tabs--active">
    <span class="fs-tabs__text">All</span>
</div>
```

#### Inactive Tab
```html
<button class="fs-tabs fs-tabs--secondary">
    <span class="fs-tabs__text">Live</span>
</button>
```

#### Tab Navigation Row
```html
<div style="display: flex; gap: 8px; align-items: center;">
    <div class="fs-tabs fs-tabs--secondary fs-tabs--active">
        <span class="fs-tabs__text">All</span>
    </div>

    <button class="fs-tabs fs-tabs--secondary">
        <span class="fs-tabs__text">Live</span>
    </button>

    <button class="fs-tabs fs-tabs--secondary">
        <span class="fs-tabs__text">Finished</span>
    </button>

    <button class="fs-tabs fs-tabs--secondary">
        <span class="fs-tabs__text">Scheduled</span>
    </button>
</div>
```

#### Disabled Tab
```html
<button class="fs-tabs fs-tabs--secondary" disabled>
    <span class="fs-tabs__text">Archive</span>
</button>
```

### Tertiary Variant (Grey Background Style)

**IMPORTANT**: Must be placed inside a grey container (#EEEEEE)

#### Active Tab (on grey background)
```html
<div style="background-color: #EEEEEE; padding: 24px; border-radius: 8px;">
    <div class="fs-tabs fs-tabs--tertiary fs-tabs--active">
        <span class="fs-tabs__text">Summary</span>
    </div>
</div>
```

#### Inactive Tab (on grey background)
```html
<div style="background-color: #EEEEEE; padding: 24px; border-radius: 8px;">
    <button class="fs-tabs fs-tabs--tertiary">
        <span class="fs-tabs__text">Statistics</span>
    </button>
</div>
```

#### Tab Navigation Row (on grey background)
```html
<div style="background-color: #EEEEEE; padding: 24px; border-radius: 8px;">
    <div style="display: flex; gap: 8px; align-items: center;">
        <div class="fs-tabs fs-tabs--tertiary fs-tabs--active">
            <span class="fs-tabs__text">Matches</span>
        </div>

        <button class="fs-tabs fs-tabs--tertiary">
            <span class="fs-tabs__text">Table</span>
        </button>

        <button class="fs-tabs fs-tabs--tertiary">
            <span class="fs-tabs__text">Archive</span>
        </button>
    </div>
</div>
```

#### Disabled Tab
```html
<button class="fs-tabs fs-tabs--tertiary" disabled>
    <span class="fs-tabs__text">Players</span>
</button>
```

## Specifications

### Primary Variant

#### Typography
- **Font Family**: Livesport Finder LCGJK
- **Font Size**: 14px
- **Font Weight**: 700 (Bold)
- **Line Height**: 18px
- **Text Transform**: Uppercase

#### Colors
- **Active text**: #FF0046 (brand-red/500)
- **Inactive text**: #555E61 (grey-c/500)
- **Hover text**: #001E28 (brand-slate-black/500)
- **Underline**: #FF0046 (brand-red/500)

#### Sizing
- **Underline height**: 2px
- **Gap between text and underline**: 8px
- **Border radius (underline)**: 1px

#### Spacing
- **Tab-to-tab gap**: 32px (recommended)
- **Vertical gap (text to underline)**: 8px

### Secondary Variant

#### Typography
- **Font Family**: Livesport Finder LCGJK
- **Font Size**: 13px
- **Font Weight**: 700 (Bold)
- **Line Height**: 16px
- **Text Transform**: Uppercase

#### Colors
- **Active background**: #FF0046 (brand-red/500)
- **Active text**: #FFFFFF (white)
- **Inactive background**: Transparent
- **Inactive text**: #555E61 (grey-c/500)
- **Hover background**: #EEEEEE (chalk-white/500)
- **Hover text**: #001E28 (brand-slate-black/500)
- **Disabled background**: #DFDFDF (grey-b/100)
- **Disabled text**: #999999 (grey-b/500)

#### Sizing
- **Padding**: 8px (vertical) × 16px (horizontal)
- **Border radius**: 20px (pill shape)
- **Min height**: 32px

#### Spacing
- **Tab-to-tab gap**: 8px (recommended)

### Tertiary Variant

**IMPORTANT**: This variant is designed for grey backgrounds (#EEEEEE). The active tab has a white background that stands out from the grey container.

#### Typography
- **Font Family**: Livesport Finder LCGJK
- **Font Size**: 12px
- **Font Weight**: 700 (Bold)
- **Line Height**: 14px
- **Text Transform**: Uppercase

#### Colors
- **Container background**: #EEEEEE (grey) - required
- **Active background**: #FFFFFF (white)
- **Active text**: #001E28 (brand-slate-black/500)
- **Inactive background**: Transparent (blends with grey container)
- **Inactive text**: #555E61 (grey-c/500)
- **Hover background**: rgba(255, 255, 255, 0.5) (semi-transparent white)
- **Hover text**: #001E28 (brand-slate-black/500)
- **Disabled background**: Transparent
- **Disabled text**: #999999 (grey-b/500)

#### Sizing
- **Padding**: 8px (vertical) × 12px (horizontal)
- **Border radius**: 8px
- **Min height**: 30px

#### Spacing
- **Tab-to-tab gap**: 8px (same as secondary variant)

## Common Use Cases

### Primary Variant (Use for main navigation)
1. **Match Detail Navigation** - Summary, Statistics, Lineups, H2H, Standings
2. **League Navigation** - Matches, Table, Top Scorers, Archive
3. **News Sections** - Latest, Football, Tennis, Basketball
4. **User Profile Tabs** - Overview, Favorites, Settings
5. **Page-level navigation** - Where tabs represent major sections

### Secondary Variant (Use for filters and sub-navigation)
1. **Match List Filters** - All, Live, Finished, Scheduled
2. **Time Period Filters** - Today, Tomorrow, Yesterday
3. **Tournament Stages** - Group Stage, Knockout, Finals
4. **Player Stats Filters** - Season, Career, Tournament
5. **Compact filter groups** - Where space is limited

### Tertiary Variant (Use on grey backgrounds)
1. **Navigation on Grey Cards** - When tabs are placed on grey background sections
2. **Sidebar Navigation** - Grey sidebar with white active tab standing out
3. **Filter Sections** - On grey filter panels or toolbars
4. **Settings Panels** - Grey settings areas with white active section
5. **Secondary Content Areas** - Where grey background provides visual separation

## Design System Compliance

### Spacing
- All spacing follows 8px grid (8px gap, 32px recommended spacing)
- Even numbers only (2px underline height)

### Colors
- HEX values only (no CSS variables)
- Colors from official primitives.json palette

### Typography
- Livesport Finder LCGJK Bold font
- Uppercase transformation for consistency
- Font loaded with `font-display: swap` for performance

## Accessibility

- Inactive tabs use semantic `<button>` elements for keyboard navigation
- Active tab uses `<div>` since it represents current state (not clickable)
- Focus-visible outline (2px solid #FF0046) for keyboard users
- Sufficient color contrast ratios:
  - **Primary active**: #FF0046 on white (passes WCAG AA)
  - **Primary inactive**: #555E61 on white (passes WCAG AA)
  - **Secondary active**: #FFFFFF on #FF0046 (passes WCAG AAA)
  - **Secondary inactive**: #555E61 on white (passes WCAG AA)
- Hover states provide visual feedback
- Disabled state indicated via opacity, cursor, and distinct colors

## Interactive Behavior

### Tab Switching for Primary Variant (via JavaScript)
```javascript
// Example: Toggle active state for primary tabs
const tabs = document.querySelectorAll('.fs-tabs:not(.fs-tabs--secondary)');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active state from all tabs
        tabs.forEach(t => {
            t.classList.remove('fs-tabs--active');
            const underline = t.querySelector('.fs-tabs__underline');
            if (underline) underline.remove();
        });

        // Add active state to clicked tab
        tab.classList.add('fs-tabs--active');
        const underline = document.createElement('div');
        underline.className = 'fs-tabs__underline';
        tab.appendChild(underline);
    });
});
```

### Tab Switching for Secondary Variant (via JavaScript)
```javascript
// Example: Toggle active state for secondary tabs
const secondaryTabs = document.querySelectorAll('.fs-tabs--secondary');

secondaryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active state from all secondary tabs
        secondaryTabs.forEach(t => t.classList.remove('fs-tabs--active'));

        // Add active state to clicked tab
        tab.classList.add('fs-tabs--active');
    });
});
```

### Tab Switching for Tertiary Variant (via JavaScript)
```javascript
// Example: Toggle active state for tertiary tabs
const tertiaryTabs = document.querySelectorAll('.fs-tabs--tertiary');

tertiaryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active state from all tertiary tabs
        tertiaryTabs.forEach(t => t.classList.remove('fs-tabs--active'));

        // Add active state to clicked tab
        tab.classList.add('fs-tabs--active');
    });
});
```

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Uses WOFF2 font format (supported by all modern browsers)
- CSS transitions for smooth hover effects
- Fallback to sans-serif if custom font fails to load

## Integration Notes

### Primary Variant
- Tabs are inline-flex by default, allowing natural horizontal arrangement
- Use flexbox container with gap of 32px for spacing between tabs
- Active tab should not be a `<button>` (use `<div>` instead)
- Underline element only needed for active state
- Best for main/page-level navigation

### Secondary Variant
- More compact spacing - use 8px gap between tabs
- No underline element needed (background color indicates active state)
- All states (active/inactive) can use `<button>` or `<div>` as needed
- Pill shape creates clear visual grouping
- Best for filters and sub-navigation

### Tertiary Variant
- **Must be on grey background (#EEEEEE)** - use 8px gap between tabs
- Active tab has white background (#FFFFFF) that stands out from grey
- Inactive tabs are transparent and blend with grey container
- Hover shows semi-transparent white background
- Best for navigation on grey cards, sidebars, or panels
- Same compact spacing as secondary variant (8px)

### General
- Component is purely presentational at the atom level
- Parent container (molecule/widget) handles layout and JavaScript behavior
- Can be composed into larger navigation molecules or widgets

## Choosing Between Variants

| Scenario | Use Variant | Reasoning |
|----------|-------------|-----------|
| Main page navigation | Primary | More prominent, underline is traditional |
| Match filters (All/Live/Finished) | Secondary | Compact, button-like, clear grouping |
| Multiple filter groups on one page | Secondary | Doesn't compete visually with primary nav |
| Wide content area with space | Primary | 28px spacing feels comfortable |
| Narrow sidebar or mobile | Secondary | 8px spacing is more compact |
| 5+ tabs in a row | Primary | Underline is less visually heavy |
| 2-4 quick filters | Secondary | Pills make clear button affordance |
| Navigation on grey card/panel | Tertiary | White active tab stands out from grey |
| Grey sidebar navigation | Tertiary | Active tab elevated with white background |
| Filter toolbar with grey background | Tertiary | Clean separation between grey and white |
| Settings panel on grey | Tertiary | Clear active state on grey surface |

## Figma Reference

- **Primary Variant**: node-id=336:36151
- **Secondary Variant**: node-id=337:36451
- **Tertiary Variant**: node-id=35287:18836
- Component Library: FS Components

## Notes

- Component designed for horizontal tab navigation
- **Primary**: Underline provides clear active state indicator, better for main navigation. Font: 12px, spacing: 28px
- **Secondary**: Pill/button style with pink active background, better for filters. Font: 12px, spacing: 8px, border-radius: 8px
- **Tertiary**: White active background on grey container, for navigation on grey surfaces. Font: 12px, spacing: 8px, border-radius: 8px
- Bold uppercase text ensures readability and consistency across all variants
- Hover states improve user experience (all variants show feedback)
- Text content should be concise (1-3 words recommended)
- All variants use same font size (12px) for visual consistency
- **Tertiary must be placed on grey background (#EEEEEE)** - white active tab only works against grey
