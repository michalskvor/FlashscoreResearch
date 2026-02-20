# FSWidgetSummaryPreview

## Component Type
Widget

## Description
A collapsible article/match preview widget displaying a headline and text content. The default collapsed state shows truncated text (max 80px height) with a gradient overlay and "Show full preview" expand link. The expanded state shows the full text without truncation or overlay.

## Dependencies

### Atoms
- `FSButtonLink` — "Show full preview" link with down arrow (`../../Atoms/FSButtonLink/FSButtonLink.css`)

### Molecules
- `FSHeadersSection` — "PREVIEW" section header (`../../Molecules/FSHeadersSection/FSHeadersSection.css`)

## Structure

```
.fs-widget-summary-preview
  ├── .fs-headers-section              (FSHeadersSection molecule, "PREVIEW" label)
  ├── .fs-widget-summary-preview__content
  │     ├── .fs-widget-summary-preview__headline
  │     └── .fs-widget-summary-preview__text
  └── .fs-widget-summary-preview__button-container  (collapsed state only)
        ├── .fs-widget-summary-preview__overlay     (gradient)
        └── .fs-widget-summary-preview__link
              └── .fs-button-link--primary          (FSButtonLink atom)
```

## States

| State | Content class modifier | Max height | Button container | Gradient overlay |
|---|---|---|---|---|
| Collapsed (default) | `fs-widget-summary-preview__content--collapsed` | 80px | Yes | Yes |
| Expanded | (none) | (none) | No | No |

## Usage Examples

### Collapsed state (default)
```html
<div class="fs-widget-summary-preview">

    <!-- Header section -->
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">PREVIEW</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <!-- Text content — collapsed -->
    <div class="fs-widget-summary-preview__content fs-widget-summary-preview__content--collapsed">
        <h3 class="fs-widget-summary-preview__headline">This is headline of article</h3>
        <p class="fs-widget-summary-preview__text">While two recent defeats...</p>
    </div>

    <!-- Button container with gradient overlay -->
    <div class="fs-widget-summary-preview__button-container">
        <div class="fs-widget-summary-preview__overlay"></div>
        <div class="fs-widget-summary-preview__link">
            <a href="#" class="fs-button-link fs-button-link--primary">
                <span class="fs-button-link__label">Show full preview</span>
                <img src="../../../Assets/Icons/Action/Navigation/Arrow/Down.svg" alt="" class="fs-button-link__icon">
            </a>
        </div>
    </div>

</div>
```

### Expanded state
```html
<div class="fs-widget-summary-preview">

    <!-- Header section -->
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">PREVIEW</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <!-- Text content — expanded (no modifier, no max-height) -->
    <div class="fs-widget-summary-preview__content">
        <h3 class="fs-widget-summary-preview__headline">This is headline of article</h3>
        <p class="fs-widget-summary-preview__text">While two recent defeats...</p>
    </div>

    <!-- No button container in expanded state -->

</div>
```

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`, `width: 100%`
- `background-color: #FFFFFF`
- `gap: 12px` — spacing between header, content, and button
- `padding-bottom: 20px`

### Text content area
- `padding: 0 12px` — horizontal padding
- `gap: 8px` — spacing between headline and text

### Headline
- `font-size: 16px`, `font-weight: 700`, `line-height: 24px`
- `color: #000000`
- Font: Livesport Finder LCGJK Bold

### Paragraph text
- `font-size: 16px`, `font-weight: 400`, `line-height: 24px`
- `color: #001E28`
- Font: Livesport Finder LCGJK Regular
- `white-space: pre-wrap` — preserves line breaks and spaces

### Collapsed state
- `max-height: 80px`, `overflow: hidden` on content container

### Gradient overlay (collapsed state only)
- `position: absolute`, `bottom: 30px`, `height: 68px`
- `background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)`
- `pointer-events: none` — allows clicks through to the button below

### Button container
- `height: 18px` — fixed height for consistent positioning
- Link centered horizontally and vertically using `position: absolute` + `transform: translate(-50%, -50%)`

### Asset paths from widget directory
- Arrow down icon: `../../../Assets/Icons/Action/Navigation/Arrow/Down.svg`
- Atom CSS: `../../Atoms/FSButtonLink/FSButtonLink.css`
- Molecule CSS: `../../Molecules/FSHeadersSection/FSHeadersSection.css`

## Behavior Notes

- Default state is **collapsed** — use the `--collapsed` modifier on the content container
- To expand, remove the `--collapsed` modifier and remove the entire button container element
- The gradient overlay creates a smooth visual fade-out effect in collapsed state
- The "Show full preview" button is centered both horizontally and vertically over the gradient
- In expanded state, no button or gradient is shown
