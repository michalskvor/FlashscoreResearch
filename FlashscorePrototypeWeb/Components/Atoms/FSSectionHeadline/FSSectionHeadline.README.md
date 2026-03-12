# FSSectionHeadline

## Component Type
Atom

## Description
Section headline component used to label and separate different sections of content. Features an optional "Advertisement" label and bottom divider.

## Variants

### Base
- Simple headline text (18px, bold, primary color)
- No additional elements

### With Advertisement Label
- Includes "Advertisement" text (10px, regular, secondary color) aligned to the right
- Used for sponsored or ad-supported sections

### With Divider
- Adds a 1px horizontal divider at the bottom
- Creates visual separation between sections
- Modifier class: `fs-section-headline--with-divider`

## Structure

```html
<div class="fs-section-headline [fs-section-headline--with-divider]">
    <div class="fs-section-headline__content">
        <span class="fs-section-headline__text">Headline</span>
        <span class="fs-section-headline__label">Advertisement</span> <!-- Optional -->
    </div>
</div>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.fs-section-headline` | Base container |
| `.fs-section-headline__content` | Flexbox container for headline and label |
| `.fs-section-headline__text` | Headline text element |
| `.fs-section-headline__label` | Optional advertisement label |
| `.fs-section-headline--with-divider` | Modifier to add bottom border |

## Dimensions

| Element | Value |
|---------|-------|
| Padding bottom (base) | 16px |
| Padding bottom (with divider) | 28px |
| Min height (content) | 28px |
| Gap between elements | 12px |
| Divider height | 1px |

## Typography

| Element | Font Size | Line Height | Weight | Color |
|---------|-----------|-------------|--------|-------|
| Headline text | 18px | 22px | 700 (Bold) | #001E28 (Primary) |
| Advertisement label | 10px | 12px | 400 (Regular) | #555E61 (Secondary) |

## Colors

| Element | Color | Token |
|---------|-------|-------|
| Headline text | #001E28 | text/primary |
| Advertisement label | #555E61 | text/secondary |
| Divider | #EEEEEE | separator/primary |

## Usage Examples

### Basic headline
```html
<div class="fs-section-headline">
    <div class="fs-section-headline__content">
        <span class="fs-section-headline__text">Top scorers</span>
    </div>
</div>
```

### With advertisement label
```html
<div class="fs-section-headline">
    <div class="fs-section-headline__content">
        <span class="fs-section-headline__text">Odds</span>
        <span class="fs-section-headline__label">Advertisement</span>
    </div>
</div>
```

### With bottom divider
```html
<div class="fs-section-headline fs-section-headline--with-divider">
    <div class="fs-section-headline__content">
        <span class="fs-section-headline__text">Missing players</span>
    </div>
</div>
```

### Complete example (all options)
```html
<div class="fs-section-headline fs-section-headline--with-divider">
    <div class="fs-section-headline__content">
        <span class="fs-section-headline__text">Headline</span>
        <span class="fs-section-headline__label">Advertisement</span>
    </div>
</div>
```

## Use Cases
- Section headers in match details pages
- Separating content blocks in widgets
- Labeling advertisement sections
- Creating visual hierarchy in content-heavy pages

## Accessibility
- Use semantic HTML heading elements when appropriate (wrap in `<h2>`, `<h3>`, etc.)
- Ensure sufficient color contrast for text elements
- Advertisement label clearly identifies sponsored content

## Notes
- The advertisement label is optional and only displayed when needed
- The divider modifier increases bottom padding to accommodate the border
- Component width is 100% of parent container
- Text content can be customized to any section title
