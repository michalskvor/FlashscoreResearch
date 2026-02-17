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

#### Default/Finished State:
- **Primary text**: #001E28
- **Secondary text**: #555E61
- **Score numbers**: #001E28
- **Background**: #FFFFFF

#### Live State:
- **Score numbers**: #FF0046 (brand-red)
- **Live period text**: #FF0046 (brand-red)
- **Live minutes**: #FF0046 (brand-red)
- **Live icon fill**: #FF0046 (brand-red)
- **Live stream button text**: #FF0046 (brand-red)
- **Live stream button border**: #EEEEEE
- **Live stream button background**: #FFFFFF
- **Live stream button hover background**: #FAFAFA
- **Live stream button hover border**: #DFDFDF

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

### Match State Variants

#### Pre-Match State (Scheduled)
The state for upcoming/scheduled matches that haven't started yet.

**Visual Characteristics:**
- Dash (-) instead of score numbers (using same class as separator)
- Only date/time displayed (no match state text)
- Team names in regular font weight (no winner)
- Both favorite icons available

**Typography:**
- Dash: 38px / 46px line-height, FS Numbers font, #001E28 (reuses `.fs-widget-headers-match__score-separator`)

**Usage Example:**
```html
<div class="fs-widget-headers-match">
    <!-- ... participants ... -->
    <div class="fs-widget-headers-match__score-container">
        <div class="fs-widget-headers-match__date-container">
            <p class="fs-widget-headers-match__date">15.02.2025 20:00</p>
        </div>
        <div class="fs-widget-headers-match__score">
            <div class="fs-widget-headers-match__score-content">
                <div class="fs-widget-headers-match__score-separator">-</div>
            </div>
        </div>
    </div>
</div>
```

**When to Use:**
- Matches that haven't started yet
- Scheduled/upcoming fixtures
- When only date/time information is available

#### Finished State (Default)
The standard state for completed matches.

**Visual Characteristics:**
- Score numbers in default black (#001E28)
- Match state shows "FINISHED" in uppercase
- No additional indicators

**Usage Example:**
```html
<div class="fs-widget-headers-match">
    <!-- ... participants ... -->
    <div class="fs-widget-headers-match__score-container">
        <div class="fs-widget-headers-match__date-container">
            <p class="fs-widget-headers-match__date">22.01.2025 15:00</p>
        </div>
        <div class="fs-widget-headers-match__score">
            <div class="fs-widget-headers-match__score-content">
                <div class="fs-widget-headers-match__score-home">2</div>
                <div class="fs-widget-headers-match__score-separator">-</div>
                <div class="fs-widget-headers-match__score-away">1</div>
            </div>
            <div class="fs-widget-headers-match__state">
                <p class="fs-widget-headers-match__state-text">FINISHED</p>
            </div>
        </div>
    </div>
</div>
```

#### Live State (`.fs-widget-headers-match--live`)
The active state for ongoing matches with real-time information.

**Visual Characteristics:**
- Score numbers in brand red (#FF0046)
- Live period text (e.g., "2ND HALF") in red
- Live minutes with red dot indicator (e.g., "65'")
- Optional "LIVE STREAM" button below score

**Typography:**
- Live period: 11px / 14px line-height, font-weight 700, uppercase, #FF0046
- Live minutes: 11px / 14px line-height, font-weight 700, #FF0046
- Live stream button text: 11px / 14px line-height, font-weight 700, uppercase, #FF0046

**Layout:**
- Live info container: 4px gap between period and time
- Live time: 4px gap between minutes and icon
- Live stream button: 8px top margin, 8px internal gap, 8px × 12px padding

**Usage Example:**
```html
<div class="fs-widget-headers-match fs-widget-headers-match--live">
    <!-- ... participants ... -->
    <div class="fs-widget-headers-match__score-container">
        <div class="fs-widget-headers-match__date-container">
            <p class="fs-widget-headers-match__date">28.12.2023 12:30</p>
        </div>
        <div class="fs-widget-headers-match__score">
            <div class="fs-widget-headers-match__score-content">
                <div class="fs-widget-headers-match__score-home">2</div>
                <div class="fs-widget-headers-match__score-separator">-</div>
                <div class="fs-widget-headers-match__score-away">1</div>
            </div>
            <div class="fs-widget-headers-match__state">
                <div class="fs-widget-headers-match__live-info">
                    <p class="fs-widget-headers-match__live-period">2ND HALF</p>
                    <div class="fs-widget-headers-match__live-time">
                        <span class="fs-widget-headers-match__live-minutes">65'</span>
                        <svg class="fs-widget-headers-match__live-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#FF0046"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <!-- Optional: Live Stream Button -->
        <button class="fs-widget-headers-match__live-stream-button">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V12L10 6L0 0Z" fill="#FF0046"/>
            </svg>
            <span class="fs-widget-headers-match__live-stream-text">LIVE STREAM</span>
        </button>
    </div>
</div>
```

**When to Use:**
- During live/in-progress matches
- When real-time score updates are active
- When displaying current match minute/period
- When live streaming is available

**Live Period Examples (Football):**
- `1ST HALF` - First half in progress
- `2ND HALF` - Second half in progress
- `HALF TIME` - Halftime break
- `EXTRA TIME` - Extra time period
- `PENALTIES` - Penalty shootout

### Team Name Variants
- **With icon**: Bold text with 14px icon (e.g., "next stage" indicator)
- **Without icon**: Bold or regular text only
- Team name has bold text only for finished state of match and indicates winner of the match

### Favorite States
- Base (gray star outline) - Not favorited
- Active (yellow filled star) - Favorited

## Design System Compliance
- HEX color values only (#FFFFFF, #001E28, #555E61, #FF0046, #FFCD00, #999999, #EEEEEE, #DFDFDF, #FAFAFA)
- Even number spacing (4px, 8px, 12px, 16px, 24px)
- 8px grid alignment for major elements
- Typography from Livesport Finder LCGJK and FS Numbers font families
- Live state uses brand red (#FF0046) for all active/dynamic elements

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
- **Live stream button** (Live state only): Opens live video stream or streaming options
  - Hover state: Light grey background (#FAFAFA) with darker border (#DFDFDF)
  - Focus state: 2px red outline (#FF0046) with 2px offset
  - Includes play icon (10px × 12px triangle) in brand red
