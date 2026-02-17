# Mobile LayoutTemplate - 393px

Foundational layout template for mobile prototypes in the FlashScore Design System. Provides a consistent structure with navigation, content area, and footer optimized for mobile viewports.

## Overview

**Default Width:** 393px
**Responsive Range:** 0px - 639px (Mobile breakpoint)
**Layout Type:** Single-column, full-width
**Navigation:** Sticky header with tabs
**Bottom Nav:** Fixed bottom navigation bar

## Structure

```
┌─────────────────────────────────┐
│   Navigation Header (56px)      │ ← Sticky
│   • Logo, Notification, Menu    │
├─────────────────────────────────┤
│   Navigation Tabs (48px)        │ ← Sticky
│   • Scores, News, Standings...  │
├─────────────────────────────────┤
│                                 │
│   Main Content Area             │
│   (100% width, fills screen)    │
│   • Your widgets go here        │
│                                 │
├─────────────────────────────────┤
│   Footer                        │
│   • Links, Copyright            │
├─────────────────────────────────┤
│   Bottom Navigation (56px)      │ ← Fixed
│   • Scores, Fav, News, Profile  │
└─────────────────────────────────┘
```

## Template Sections

### 1. Navigation Container

**Height:** 104px total (56px header + 48px tabs)
**Position:** Sticky (stays at top when scrolling)
**Background:** #00141E (dark)

**Components:**
- **Header:** Logo + action buttons (notification, search, menu)
- **Tabs:** Horizontal scrollable tabs (Scores, News, Standings, Favourites)

### 2. Main Content Wrapper

**Width:** 100% (fills screen)
**Background:** #FFFFFF (white)
**Padding Bottom:** 56px (accounts for fixed bottom nav)

**Sub-sections:**
- **Breadcrumb Area** (optional): 12px padding, useful for sub-navigation
- **Content Area**: Main injection zone for widgets and components

### 3. Footer

**Width:** 100%
**Background:** #F5F5F5
**Padding:** 24px 16px

**Content:**
- Links (About, Terms, Privacy, Help)
- Copyright text

### 4. Bottom Navigation Bar

**Height:** 56px
**Position:** Fixed at bottom
**Background:** #FFFFFF with top border and shadow

**Items:** 4 navigation buttons (Scores, Favourites, News, Profile)

---

## Usage Guidelines

### The "Container Only" Rule (CRITICAL)

When prototyping with this template:

✅ **DO:**
- Copy this entire template as your starting point
- Inject your content ONLY inside `.layouttemplate-main__content`
- Keep navigation, footer, and bottom nav unchanged
- Modify only the content injection zone

❌ **DON'T:**
- Modify navigation structure
- Change footer layout
- Alter bottom nav items without approval
- Add global styles that affect template structure

### Content Injection Zone

```html
<!-- Main Content Area -->
<div class="layouttemplate-main__content">
    <!-- ✅ ADD YOUR WIDGETS HERE -->
    <div class="your-widget">
        <!-- Your content -->
    </div>
</div>
```

---

## Responsive Behavior

### Mobile Range (0px - 639px)

| Screen Width | Behavior |
|--------------|----------|
| 393px | Default, optimal rendering |
| 360px - 392px | Slightly adjusted padding and spacing |
| < 360px | Compact mode (reduced padding) |
| 394px - 639px | Scales up naturally |

### Above Mobile (≥ 640px)

Template shows warning message. Use Tablet or Desktop template instead.

---

## Design Tokens Used

### Colors

| Element | Color | Token |
|---------|-------|-------|
| Body background | #EEEEEE | Background grey |
| Content background | #FFFFFF | White |
| Navigation | #00141E | Dark slate |
| Footer background | #F5F5F5 | Light grey |
| Active accent | #FF0046 | Brand red |
| Text primary | #001E28 | Slate black |
| Text secondary | #555E61 | Grey |
| Text tertiary | #999999 | Light grey |

### Typography

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Tab text | Livesport Finder LCGJK | 11px | 400/700 | 14px |
| Bottom nav text | Livesport Finder LCGJK | 10px | 400/700 | 12px |
| Footer links | Livesport Finder LCGJK | 12px | 400 | 16px |
| Footer copyright | Livesport Finder LCGJK | 11px | 400 | 14px |

### Spacing (8px Grid)

| Element | Value | Compliance |
|---------|-------|------------|
| Navigation header height | 56px | 8 × 7 ✓ |
| Navigation tabs height | 48px | 8 × 6 ✓ |
| Bottom nav height | 56px | 8 × 7 ✓ |
| Content padding (horizontal) | 16px | 8 × 2 ✓ |
| Content padding (vertical) | 24px | 8 × 3 ✓ |
| Footer padding | 24px 16px | Even ✓ |
| Button gaps | 8px, 4px | Even ✓ |

---

## Component Inventory

### Navigation Components

**Mobile Header:**
- Logo container
- Notification button (with pulse animation)
- Search button
- Menu button (burger)

**Mobile Tabs:**
- Tab items (scrollable horizontal)
- Active state indicator (underline)
- Icons + labels

**Bottom Navigation:**
- 4 fixed items (customizable)
- Active state styling
- Icon + label layout

---

## Best Practices

### Content Design

**DO:**
- Design full-width components (100% width)
- Use 16px horizontal padding for inner content
- Keep touch targets ≥ 40px for buttons
- Test on various mobile sizes (320px - 639px)
- Consider thumb-reach zones

**DON'T:**
- Use fixed pixel widths for content
- Place critical actions near screen edges
- Forget about safe areas on notched devices
- Overcrowd the interface

### Performance

- Template uses `font-display: swap` for optimal font loading
- Sticky navigation uses CSS position (no JS)
- Bottom nav is fixed (GPU-accelerated)
- Minimal CSS for fast rendering

### Accessibility

- Semantic HTML structure (`<nav>`, `<main>`, `<footer>`)
- Touch targets meet minimum size (40px)
- Color contrast meets WCAG AA standards
- Scalable text (uses rem/px appropriately)

---

## Examples

### Basic Prototype Setup

```html
<!-- Copy entire LayoutTemplate.html -->
<!-- Find the content injection zone -->
<div class="layouttemplate-main__content">
    <!-- Add your widget -->
    <div class="fs-widget-match-list">
        <!-- Match items here -->
    </div>
</div>
```

### With Breadcrumb

```html
<div class="layouttemplate-main__breadcrumb">
    <!-- Insert FSBreadcrumb component -->
    <div class="fs-breadcrumb">
        <a href="#">Football</a> / <a href="#">Premier League</a> / Match
    </div>
</div>

<div class="layouttemplate-main__content">
    <!-- Your content -->
</div>
```

### Full-Width Widget

```html
<div class="layouttemplate-main__content">
    <!-- Remove padding for full-width -->
    <div style="margin: -16px -16px 0 -16px;">
        <!-- Full-width component (e.g., image banner) -->
    </div>
</div>
```

---

## File Structure

```
/Components/LayoutTemplate/Mobile/
├── LayoutTemplate.html      # Template HTML
├── LayoutTemplate.css       # Template styles
└── LayoutTemplate.README.md # This documentation
```

---

## Related Templates

- **Desktop LayoutTemplate** (1440px default, ≥800px)
- **Tablet LayoutTemplate** (744px default, 640px-799px) *(to be created)*

---

## Common Prototyping Workflows

### 1. Create New Mobile Prototype

```bash
# 1. Copy template to Prototypes folder
cp LayoutTemplate.html /Prototypes/MyFeature-mobile.html
cp LayoutTemplate.css /Prototypes/MyFeature-mobile.css

# 2. Update references in HTML
# 3. Inject your content in .layouttemplate-main__content
# 4. Preview in browser at 393px viewport
```

### 2. Test Responsive Behavior

**Chrome DevTools:**
1. Open DevTools (F12)
2. Toggle device toolbar (Cmd/Ctrl + Shift + M)
3. Select "Responsive" mode
4. Test at: 320px, 360px, 393px, 480px, 639px

### 3. Component Integration

```html
<!-- Example: Add match widget -->
<link rel="stylesheet" href="../../Widgets/FSWidgetMatchList/FSWidgetMatchList.css">

<div class="layouttemplate-main__content">
    <div class="fs-widget-match-list">
        <!-- Widget content -->
    </div>
</div>
```

---

## Browser Support

- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+
- Firefox Mobile 90+

---

## Notes

- Template enforces mobile-first design principles
- All inner components automatically fill screen width
- Fixed bottom nav ensures easy thumb access
- Sticky top nav keeps navigation always accessible
- Default 393px matches iPhone 14/15 standard width
- Responsive from smallest phones (320px) to phablets (639px)

---

## Version History

- **v1.0** (2024-02-16) - Initial mobile template
  - 393px default width
  - Responsive 0-639px
  - Sticky navigation
  - Fixed bottom nav
  - Single-column layout
