# FSWidgetForm

## Component Type
Widget

## Description
A widget displaying team form (recent match results) for both home and away teams. Shows team logos, names, league positions, and recent match results as colored badges. Includes a centered "VS" indicator between teams.

## Dependencies
- FSHeadersSection (Molecule)
- FSAssetBoxed (Atom) - 42px size for team logos
- FSBadgeForm (Atom) - for match result badges

## Structure

```
.fs-widget-form
  ├── .fs-headers-section
  │     └── "Form" text left
  └── .fs-widget-form__body
        └── .fs-widget-form__teams
              ├── .fs-widget-form__team.fs-widget-form__team--left
              │     ├── .fs-widget-form__position-badge
              │     ├── .fs-widget-form__asset (FSAssetBoxed)
              │     ├── span.fs-widget-form__team-name
              │     └── .fs-widget-form__form-row
              │           └── .fs-badge-form × 6
              ├── .fs-widget-form__vs (VS icon)
              └── .fs-widget-form__team.fs-widget-form__team--right
                    └── (same structure as left team)
```

## Usage Example

```html
<div class="fs-widget-form">
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">Form</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <div class="fs-widget-form__body">
        <div class="fs-widget-form__teams">
            <!-- Left Team -->
            <div class="fs-widget-form__team fs-widget-form__team--left">
                <div class="fs-widget-form__position-badge">
                    <span class="fs-widget-form__position-badge-text">2.</span>
                </div>
                <div class="fs-widget-form__asset">
                    <div class="fs-asset-boxed fs-asset-boxed--42px fs-asset-boxed--team">
                        <img class="fs-asset-boxed__image fs-asset-boxed__image--team"
                             src="../../../Assets/TeamPhotos/Football/England/Liverpool.png" alt="Liverpool">
                    </div>
                </div>
                <span class="fs-widget-form__team-name">Liverpool</span>
                <div class="fs-widget-form__form-row">
                    <div class="fs-badge-form fs-badge-form--unknown">
                        <span class="fs-badge-form__text">?</span>
                    </div>
                    <div class="fs-badge-form fs-badge-form--win">
                        <span class="fs-badge-form__text">W</span>
                    </div>
                    <!-- More form badges... -->
                </div>
            </div>

            <!-- VS Icon -->
            <div class="fs-widget-form__vs">
                <div class="fs-widget-form__vs-bg"></div>
                <span class="fs-widget-form__vs-text">VS</span>
            </div>

            <!-- Right Team -->
            <div class="fs-widget-form__team fs-widget-form__team--right">
                <!-- Same structure as left team -->
            </div>
        </div>
    </div>
</div>
```

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`
- `padding-bottom: 20px`
- `width: 100%`

### Body
- `padding: 12px 12px 0`
- `position: relative` (for VS icon positioning)

### Teams container
- `display: flex`, `gap: 8px`
- Contains two team boxes and VS icon

### Team box
- `flex: 1`, `min-width: 0` (equal width)
- `border: 1px solid #EEEEEE`, `border-radius: 4px`
- `padding: 8px`
- `display: flex`, `flex-direction: column`, `align-items: center`
- `gap: 2px`
- `position: relative` (for position badge)

### Position badge
- `position: absolute`, `top: 8px`, `left: 8px` (right: 8px for right team)
- `width: 20px`, `height: 20px`
- `background: #EEEEEE`, `border-radius: 4px`
- Text: 12px Bold, centered, #001E28

### Asset
- Uses FSAssetBoxed with `--42px` size modifier
- Team logo display

### Team name
- `font-size: 14px`, `font-weight: 700`, `line-height: 18px`
- `color: #001E28`, `text-align: center`
- `white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`

### Form badges row
- `display: flex`, `gap: 4px`, `align-items: center`, `justify-content: center`
- Contains 6 FSBadgeForm badges
- `flex-wrap: wrap` (in case of overflow)

### VS icon
- `position: absolute`, centered in teams container
- `width: 36px`, `height: 28px`
- Background: white with #EEEEEE border, 4px radius
- Text: 13px Bold, #001E28

## Design Tokens

| Token | Value |
|---|---|
| Widget bottom padding | 20px |
| Body padding | 12px 12px 0 |
| Teams gap | 8px |
| Team border | 1px solid #EEEEEE |
| Team border radius | 4px |
| Team padding | 8px |
| Team gap | 2px |
| Position badge size | 20px × 20px |
| Position badge background | #EEEEEE |
| Position text | 12px Bold, #001E28 |
| Asset size | 42px × 42px |
| Team name | 14px Bold, #001E28 |
| Form row gap | 4px |
| Form badge size | 20px × 20px |
| VS size | 36px × 28px |
| VS text | 13px Bold, #001E28 |

## Badge Types

Form badges use FSBadgeForm with variants:
- `--unknown` - Gray badge with "?" (next/upcoming match)
- `--win` - Green badge with "W"
- `--draw` - Orange badge with "D"
- `--lose` - Red badge with "L"

## Usage Context
- Used in match detail pages (pre-match and live states)
- Shows recent form (last 5-6 matches) for both teams
- Position badge indicates league table position
- "?" badge indicates the current/upcoming match
- Helps users quickly assess team performance trends

## Mobile Optimization
- Designed specifically for mobile layout
- Two-column layout with equal width columns
- Compact 42px team logos
- Badges may wrap if needed (flex-wrap)
- Team names truncate with ellipsis if too long
