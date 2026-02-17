# FSBadgeHighlight Component

High-visibility badge component used to draw immediate attention to critical status information like live events, new content, or featured items.

## Visual Design

**Background:** Bright red (`#FF0046` - brand-red/500)
**Text:** White (`#FFFFFF`)
**Typography:** Livesport Finder LCGJK, 10px, Bold, Uppercase
**Padding:** 2px (vertical) × 4px (horizontal)
**Border radius:** 4px
**Icon size:** 8px × 8px (when present)
**Gap:** 2px (between icon and text)

## Variants

### Base (without icon)

**When to Use:**
- Live match indicators
- "New" content labels
- Urgent status notifications
- Breaking news alerts
- Time-sensitive information that requires immediate user attention

**Examples:**
```html
<div class="fs-badge-highlight">
    <span class="fs-badge-highlight__text">LIVE</span>
</div>

<div class="fs-badge-highlight">
    <span class="fs-badge-highlight__text">NEW</span>
</div>

<div class="fs-badge-highlight">
    <span class="fs-badge-highlight__text">HOT</span>
</div>
```

### With Icon

**When to Use:**
- When additional visual emphasis is needed
- Featured content with special prominence
- VIP or premium indicators
- Special event highlights

**Examples:**
```html
<div class="fs-badge-highlight fs-badge-highlight--with-icon">
    <svg class="fs-badge-highlight__icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0L5.09 2.71L8 3.18L6 5.09L6.54 8L4 6.71L1.46 8L2 5.09L0 3.18L2.91 2.71L4 0Z" fill="white"/>
    </svg>
    <span class="fs-badge-highlight__text">FEATURED</span>
</div>
```

---

## Usage Guidelines

### When to Use FSBadgeHighlight

| Use Case | Reasoning |
|----------|-----------|
| Live sporting events | Requires immediate attention, real-time status |
| New/breaking content | Time-sensitive, needs to stand out |
| Featured matches/articles | Premium content deserving highlight |
| Limited-time offers | Creates urgency |

### When NOT to Use

| Scenario | Use Instead |
|----------|-------------|
| General metadata | FSBadgeMeta (base variant) |
| Non-urgent status | FSBadgeMeta or FSBadgeForm |
| Low-priority labels | FSBadgeMeta |
| Informational tags | FSBadgeMeta |

### Comparison with Other Badge Components

| Component | Visual Weight | Use Case |
|-----------|---------------|----------|
| **FSBadgeHighlight** | High (red, bold) | Urgent, time-sensitive, attention-grabbing |
| **FSBadgeMeta (alert)** | Medium (pink background, red text) | Important but not urgent |
| **FSBadgeMeta (base)** | Low (grey, subtle) | General information |
| **FSBadgeForm** | Low-Medium | Form status indicators |

---

## Best Practices

**DO:**
- Use sparingly - overuse reduces effectiveness
- Keep text very short (1-2 words, max 8 characters)
- Use ALL CAPS text (component enforces this)
- Reserve for truly urgent/important information
- Ensure sufficient spacing from surrounding elements

**DON'T:**
- Use for general informational labels
- Place multiple FSBadgeHighlight components close together
- Use on dark backgrounds without testing contrast
- Use long text strings that break the compact design
- Combine with other high-attention UI elements in the same area

---

## Technical Implementation

### HTML Structure (Base)

```html
<div class="fs-badge-highlight">
    <span class="fs-badge-highlight__text">{Text}</span>
</div>
```

### HTML Structure (With Icon)

```html
<div class="fs-badge-highlight fs-badge-highlight--with-icon">
    <svg class="fs-badge-highlight__icon" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <!-- Icon path here -->
    </svg>
    <span class="fs-badge-highlight__text">{Text}</span>
</div>
```

### Design Tokens Used

**Colors (from primitives.json):**
- `--badge-highlight-background`: `#FF0046` (brand-red/500)
- `--badge-highlight-text`: `#FFFFFF` (white)
- `--badge-highlight-icon-color`: `#001E28` (brand-slate-black/500)

**Typography (overline style):**
- Font family: Livesport Finder LCGJK
- Font size: 10px
- Font weight: 700 (Bold)
- Line height: 12px
- Text transform: Uppercase (enforced by CSS)

**Spacing (following 8px grid and even-number rule):**
- Padding: 2px (vertical) × 4px (horizontal)
- Border radius: 4px
- Icon size: 8px × 8px
- Gap: 2px (between icon and text)

---

## Accessibility

- High color contrast (red background with white text)
- Text content provides clear semantic meaning
- Uppercase text improves scannability at small sizes
- SVG icons use inline implementation for flexibility
- Font loaded with `font-display: swap` for performance

---

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Uses WOFF2 font format (supported by all modern browsers)
- Flexbox layout (universally supported)
- SVG icons (universally supported)
- Fallback to sans-serif if custom font fails to load

---

## Related Components

- **FSBadgeMeta**: Lower-priority badges for general metadata
- **FSBadgeForm**: Form state indicators
- **FSBadgeNotification**: Numeric notification badges

---

## Examples in Context

### Live Match Header
```html
<div style="display: flex; align-items: center; gap: 8px;">
    <div class="fs-badge-highlight">
        <span class="fs-badge-highlight__text">LIVE</span>
    </div>
    <h2>Arsenal vs Manchester United</h2>
</div>
```

### Featured Content Card
```html
<div class="card-header">
    <div class="fs-badge-highlight fs-badge-highlight--with-icon">
        <svg class="fs-badge-highlight__icon" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M4 0L5.09 2.71L8 3.18L6 5.09L6.54 8L4 6.71L1.46 8L2 5.09L0 3.18L2.91 2.71L4 0Z" fill="white"/>
        </svg>
        <span class="fs-badge-highlight__text">TOP</span>
    </div>
</div>
```

### New Article Indicator
```html
<div style="position: relative;">
    <div style="position: absolute; top: 8px; right: 8px;">
        <div class="fs-badge-highlight">
            <span class="fs-badge-highlight__text">NEW</span>
        </div>
    </div>
    <!-- Article content -->
</div>
```
