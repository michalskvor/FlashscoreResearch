# FSIncidentBadgeFieldRow

## Component Type
Molecule

## Description
A container component that arranges multiple FSIncidentBadgeField atoms in overlapping rows. Supports both vertical and horizontal orientations with configurable alignment and sizing options.

## Dependencies
- FSIncidentBadgeField (Atom)

## Variants

### Orientation
- `--vertical`: Arranges badges in a vertical column
- `--horizontal`: Arranges badges in a horizontal row

### Size
- `--small`: 14px badges with -3px overlap
- `--medium`: 16px badges with -1px overlap

### Alignment
- `--top`: Aligns to top/left with z-index layering (first badge on top)
- `--bottom`: Aligns to bottom/right without z-index

## Usage Examples

### Vertical Small Top
```html
<div class="fs-incident-badge-field-row fs-incident-badge-field-row--vertical fs-incident-badge-field-row--small fs-incident-badge-field-row--top">
    <div class="fs-incident-badge-field fs-incident-badge-field--small">
        <!-- Icon SVG -->
    </div>
    <div class="fs-incident-badge-field fs-incident-badge-field--small">
        <!-- Icon SVG -->
    </div>
    <div class="fs-incident-badge-field fs-incident-badge-field--small">
        <!-- Icon SVG -->
    </div>
</div>
```

### Horizontal Medium Bottom
```html
<div class="fs-incident-badge-field-row fs-incident-badge-field-row--horizontal fs-incident-badge-field-row--medium fs-incident-badge-field-row--bottom">
    <div class="fs-incident-badge-field fs-incident-badge-field--medium">
        <!-- Icon SVG -->
    </div>
    <div class="fs-incident-badge-field fs-incident-badge-field--medium">
        <!-- Icon SVG -->
    </div>
    <div class="fs-incident-badge-field fs-incident-badge-field--medium">
        <!-- Icon SVG -->
    </div>
</div>
```

## Technical Details

### Overlapping Mechanism
- Negative margins create the overlapping effect
- Small size: `-3px` margin (vertical: margin-bottom, horizontal: margin-right)
- Medium size: `-1px` margin

### Z-Index Layering
- Applied only to `--top` alignment variants
- First badge: z-index 4
- Second badge: z-index 3
- Third badge: z-index 2
- Fourth badge: z-index 1

### Layout
- Uses flexbox for arrangement
- Vertical: `flex-direction: column`
- Horizontal: `flex-direction: row`
- Alignment controlled via `justify-content` and padding

## Design System Compliance
- Even number spacing (2px padding for alignment)
- HEX color values only (inherited from FSIncidentBadgeField)
- 8px grid alignment where applicable
