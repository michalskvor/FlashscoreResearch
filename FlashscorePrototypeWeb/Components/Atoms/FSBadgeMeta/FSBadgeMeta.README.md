# FSBadgeMeta Component

Small, compact badges used to display metadata and status information across the Flashscore application.

## Variants

### Alert (`.fs-badge-meta--alert`)

**Visual Style:**
- Background: Light pink (`#FFE6F3`)
- Text: Bright red (`#FF0046`)

**When to Use:**
- **Live events**: Matches happening in real-time
- **Breaking news**: Urgent sports news or announcements
- **Critical updates**: Important information requiring immediate attention
- **Time-sensitive alerts**: Last-minute changes, cancelled matches

**Examples:**
```html
<div class="fs-badge-meta fs-badge-meta--alert">
    <span class="fs-badge-meta__text">Live</span>
</div>

<div class="fs-badge-meta fs-badge-meta--alert">
    <span class="fs-badge-meta__text">Breaking News</span>
</div>
```

---

### Base (`.fs-badge-meta--base`)

**Visual Style:**
- Background: Light grey with transparency (`rgba(0, 30, 40, 0.1)`)
- Text: Dark slate (`#001E28`)

**When to Use:**
- **General metadata**: Category labels, tags, filters
- **Informational labels**: Match status (Finished, Scheduled, Postponed)
- **Content classification**: League names, tournament rounds
- **Feature indicators**: Featured matches, top stories
- **Non-urgent notifications**: General information that doesn't require immediate action

**Examples:**
```html
<div class="fs-badge-meta fs-badge-meta--base">
    <span class="fs-badge-meta__text">Featured</span>
</div>

<div class="fs-badge-meta fs-badge-meta--base">
    <span class="fs-badge-meta__text">Premier League</span>
</div>

<div class="fs-badge-meta fs-badge-meta--base">
    <span class="fs-badge-meta__text">Finished</span>
</div>
```

---

## Usage Guidelines

### Choosing the Right Variant

| Scenario | Variant | Reasoning |
|----------|---------|-----------|
| Match is currently playing | **Alert** | Requires immediate attention, time-sensitive |
| Match has finished | **Base** | Informational, not time-sensitive |
| Breaking transfer news | **Alert** | Urgent, newsworthy information |
| League or competition name | **Base** | General classification |
| Featured content tag | **Base** | Informational label |
| Last-minute lineup change | **Alert** | Time-sensitive update |

### Best Practices

**DO:**
- Use Alert variant sparingly - only for truly urgent information
- Keep badge text concise (1-3 words maximum)
- Use consistent terminology across the application
- Ensure badges have sufficient contrast with their background

**DON'T:**
- Use Alert variant for general information
- Combine multiple variants in the same context
- Use long text that causes badges to wrap
- Stack badges vertically (prefer horizontal layout with spacing)

---

## Technical Implementation

### HTML Structure

```html
<div class="fs-badge-meta fs-badge-meta--{variant}">
    <span class="fs-badge-meta__text">{Label Text}</span>
</div>
```

### Design Tokens Used

**Colors (from primitives.json):**
- `--badge-alert-background`: `#FFE6F3` (brand-red/50)
- `--badge-alert-ink`: `#FF0046` (brand-red/500)
- `--badge-base-background`: `#001E281A` (slate-black-shades/10)
- `--badge-base-ink`: `#001E28` (brand-slate-black/500)

**Typography:**
- Font family: Livesport Finder LCGJK
- Font size: 12px
- Font weight: 400 (Regular)
- Line height: 14px

**Spacing:**
- Height: 24px
- Padding: 4px (vertical) × 8px (horizontal)
- Border radius: 4px

---

## Accessibility

- Badges use semantic HTML with clear text content
- Color is not the only indicator (text provides context)
- Sufficient color contrast ratios for readability
- Font family loaded with `font-display: swap` for performance

---

## Browser Support

- All modern browsers (Chrome, Firefox, Safari, Edge)
- Uses WOFF2 font format (supported by all modern browsers)
- Fallback to sans-serif if custom font fails to load
