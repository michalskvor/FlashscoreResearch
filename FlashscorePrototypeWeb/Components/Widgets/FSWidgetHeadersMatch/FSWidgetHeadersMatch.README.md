# FSWidgetHeadersMatch

## Component Type
Widget

## Description
A match header widget that displays comprehensive match information including team/participant details, logos, favorite actions, scores, date/time, and match state. This widget is designed for match detail pages and provides a complete overview of a sporting event.

## Dependencies
- FSAssetBoxed (Atom) - Team/tournament logo containers
- FSActionsFavorite (Atom) - Favorite/bookmark buttons

## Structure

The widget consists of three main sections arranged horizontally:

1. **Left Participant (Home Team)**
   - Favorite icon
   - Team logo (82px boxed asset)
   - Serve indicator placeholder
   - Team name with optional icon indicator

2. **Center Score Container**
   - Date/time information
   - Large score display
   - Match state (e.g., FINISHED, LIVE)

3. **Right Participant (Away Team)**
   - Serve indicator placeholder
   - Team logo (82px boxed asset)
   - Favorite icon
   - Team name

## Usage Example

```html
<div class="fs-widget-headers-match">
    <div class="fs-widget-headers-match__content">
        <!-- Left Participant (Home Team) -->
        <div class="fs-widget-headers-match__participant fs-widget-headers-match__participant--home">
            <div class="fs-widget-headers-match__participant-icons">
                <div class="fs-widget-headers-match__participant-icons-left">
                    <div class="fs-widget-headers-match__empty-cell"></div>
                </div>
                <div class="fs-widget-headers-match__participant-icons-center">
                    <div class="fs-widget-headers-match__favorite">
                        <!-- FSActionsFavorite component -->
                    </div>
                    <!-- FSAssetBoxed component with team logo -->
                    <div class="fs-widget-headers-match__serve"></div>
                </div>
                <div class="fs-widget-headers-match__participant-icons-right">
                    <div class="fs-widget-headers-match__empty-cell"></div>
                </div>
            </div>
            <div class="fs-widget-headers-match__participant-info">
                <div class="fs-widget-headers-match__participant-name">
                    <!-- Optional: Next stage icon -->
                    <p class="fs-widget-headers-match__participant-text fs-widget-headers-match__participant-text--bold">Team Name</p>
                </div>
            </div>
        </div>

        <!-- Score Container -->
        <div class="fs-widget-headers-match__score-container">
            <div class="fs-widget-headers-match__date-container">
                <p class="fs-widget-headers-match__date">15.04.2023 01:10</p>
            </div>
            <div class="fs-widget-headers-match__score">
                <div class="fs-widget-headers-match__score-content">
                    <div class="fs-widget-headers-match__score-home">102</div>
                    <div class="fs-widget-headers-match__score-separator">-</div>
                    <div class="fs-widget-headers-match__score-away">91</div>
                </div>
                <div class="fs-widget-headers-match__state">
                    <p class="fs-widget-headers-match__state-text">FINISHED</p>
                </div>
            </div>
        </div>

        <!-- Right Participant (Away Team) -->
        <div class="fs-widget-headers-match__participant fs-widget-headers-match__participant--away">
            <!-- Similar structure to home team -->
        </div>
    </div>
</div>
```

## Technical Details

### Layout Specifications
- **Container padding**: 24px (top/bottom), 8px (left/right)
- **Background**: #FFFFFF (white)
- **Max participant width**: 250px
- **Min participant width**: 110px
- **Score container width**: 180px
- **Icon spacing**: 16px gap between favorite, logo, and serve indicator
- **Participant section gap**: 4px between icons and info

### Typography
- **Team name (bold)**: 16px / 20px line-height, font-weight 700
- **Team name (regular)**: 16px / 20px line-height, font-weight 400
- **Date/time**: 13px / 16px line-height, #555E61
- **Score numbers**: 38px / 46px line-height
- **Match state**: 13px / 16px line-height, uppercase, font-weight 700

### Colors
- **Primary text**: #001E28
- **Secondary text**: #555E61
- **Background**: #FFFFFF

### Component Integration

#### FSAssetBoxed
- Size: `--82px`
- Type: `--asset` (center-aligned for team logos)
- Image size: 58px × 58px within 82px container
- Border radius: 12px

#### FSActionsFavorite
- Size: `--large`
- States: `--base` (unfavorited) or `--active` (favorited)
- Icon size: 18px within 32px container

### Responsive Behavior
- Participant sections use flex: 1 0 0 for proportional sizing
- Empty cells on left/right provide flexible spacing
- Min/max width constraints prevent overflow on small screens
- Score container maintains fixed 180px width

## States and Variations

### Team Name Variants
- **With icon**: Bold text with 14px icon (e.g., "next stage" indicator)
- **Without icon**: Bold or regular text only

### Match State Examples
- `FINISHED` - Completed match
- `LIVE 67'` - Live match with current minute
- `POSTPONED` - Delayed/postponed match
- `SCHEDULED` - Upcoming match

### Favorite States
- Base (gray star outline) - Not favorited
- Active (yellow filled star) - Favorited

## Design System Compliance
- HEX color values only (#FFFFFF, #001E28, #555E61, #FFCD00, #999999)
- Even number spacing (4px, 8px, 16px, 24px)
- 8px grid alignment for major elements
- Typography from Livesport Finder LCGJK and FS Numbers font families

## Usage Context
This widget is typically used on:
- Match detail pages (header section)
- Live match pages
- Post-match summary pages
- Match preview pages

## Accessibility Notes
- Team names should include proper alt text for logos
- Match state should be announced to screen readers
- Favorite buttons should be keyboard accessible with proper focus states
- Score information should be marked up semantically for assistive technologies

## Interactive Elements
- **Favorite buttons**: Toggle favorite state on click
- **Team logos**: May link to team detail pages
- **Team names**: May link to team detail pages
- **Score**: May link to match statistics or detailed scoring breakdown
