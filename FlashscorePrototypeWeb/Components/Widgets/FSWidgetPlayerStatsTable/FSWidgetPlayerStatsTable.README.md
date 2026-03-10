# FSWidgetPlayerStatsTable

## Component Type
Widget

## Description
A comprehensive player statistics table with three distinct vertical layers: navigation tabs, column headers, and data rows. Features sticky first column, synchronized horizontal scrolling, and multiple stat categories (Top Stats, Shots, Attack, Passes, Defense, Goalkeeping, General).

## Dependencies
- FSTabs (Atom) - Tertiary variant for navigation
- FSSelect (Atom) - Filter dropdown in header
- FSPlayerStatsPlayerCell (Molecule) - Player information
- FSBadgeRating (Atom) - Rating display
- FSTableSharedValue (Atom) - Stat values
- FSDivider (Atom) - Row separators

## Layer Structure

The component consists of three vertical layers that must stay perfectly aligned:

### Layer 1: Navigation Tabs (Top Header)
- **Function**: Show different data categories across the table
- **Component**: FSTabs Tertiary version on light grey background (#EEEEEE)
- **Height**: 44px
- **Tabs**: Top Stats, Shots, Attack, Passes, Defense, Goalkeeping, General

### Layer 2: Column Definitions (Sub-Header)
- **First Column**: Sticky/Fixed position containing FSSelect filter (default: "All")
- **Data Columns**: Scrollable horizontally containing metric labels
- **Component**: Second-level FSTabs tertiary styling on light grey background
- **Height**: 60px
- **Separator**: 1px white gap between Layer 1 and Layer 2

### Layer 3: Data Grid (Table Body)
- **First Column**: Sticky/Fixed, must match Sub-Header first column width
- **Data Cells**: Scrollable horizontally, must align perfectly with Sub-Header metrics
- **Row Height**: 45px
- **Background**: White (#FFFFFF)

## Dimensions Configuration

| Element | Dimension | CSS Variable | Value |
|---------|-----------|--------------|-------|
| Row | Height | --row-height | 45px |
| Header | Height (Tabs) | --header-tab-height | 44px |
| Header | Height (Labels) | --header-label-height | 60px |
| Sticky | Column Width | --sticky-col-width | 178px |
| Data Cell | Width | --data-cell-width | 72px |

## Visual & Interaction Logic

### 1. Sticky Behavior
- First Column (in both Sub-Header and Body) has higher z-index than data cells
- Subtle box-shadow appears on sticky column only when user starts scrolling
- Provides visual separation and indicates scrollable content

### 2. Scrolling Sync
- Horizontal scrolling synchronized between Sub-Header and Table Body
- When user scrolls data grid, labels above move at exact same rate
- JavaScript handles scroll event synchronization

### 3. Styling Rules
- **Header Background**: #EEEEEE (Light Gray)
- **Table Body**: #FFFFFF (White)
- **Sorted Column Header**: rgba(238, 238, 238, 0.4) background + 6px down arrow icon below text
- **Sorted Column Data Cells**: rgba(238, 238, 238, 0.4) background
- **Divider Between Rows**: FSDivider component
- **Empty Value**: En dash "–"

### 4. Alignment & Sizing
- **Header Cell - Sticky**: Left alignment, padding 0 8px
- **Header Cell - Data**: Center alignment, padding 0 2px, flex-direction column, gap 4px
- **Header Cell - Sorted**: Includes 6px arrow icon positioned 4px below text
- **Data Cell - Sticky**: Left alignment, padding 6px 2px 6px 12px
- **Data Cell - Data**: Center alignment, padding 0 2px
- **FSSelect**: Fills the container width

## Tab Data Structure

### Top Stats (Default)
**Header Labels**: FSSelect | Flashscore Rating | Shots Total | Expected Goals | Dribbles Success | Touches | Passes Success

**Data Cells**: FSPlayerStatsPlayerCell | FSBadgeRating | FSTableSharedValue × 5

### Shots
**Header Labels**: FSSelect | Total Shots | Goals | Expected Goals (xG) | xG on target (xGOT) | Shots on target | Shots off target | Blocked shots | Shots inside the box | Shots outside the box | Headed shots

**Data Cells**: FSPlayerStatsPlayerCell | FSTableSharedValue × 10

### Attack
**Header Labels**: FSSelect | Touches in opposition box | Successful dribbles | Big chances missed | Touches | Fouls suffered | Offsides

**Data Cells**: FSPlayerStatsPlayerCell | FSTableSharedValue × 6

### Passes
**Header Labels**: FSSelect | Accurate passes | Big chances created | Assists | Expected assists (xA) | Accurate passes in final third | Accurate long passes | Accurate crosses

**Data Cells**: FSPlayerStatsPlayerCell | FSTableSharedValue × 7

### Defense
**Header Labels**: FSSelect | Duels | Aerial duels won | Ground duels won | Tackles won | Fouls committed | Interceptions | Clearances | Errors leading to goal | Errors leading to shot

**Data Cells**: FSPlayerStatsPlayerCell | FSTableSharedValue × 9

### Goalkeeping
**Header Labels**: FSSelect | Goalkeeper saves | Goals conceded | Goals prevented | xGOT faced | Punches | Throws | Act as sweeper

**Data Cells**: FSPlayerStatsPlayerCell | FSTableSharedValue × 7

### General
**Header Labels**: FSSelect | Player rating | Minutes played | Goals | Own goals | Assists | Yellow cards | Red cards

**Data Cells**: FSPlayerStatsPlayerCell | FSBadgeRating | FSTableSharedValue × 6

## Usage Example

```html
<div class="fs-widget-player-stats-table" id="playerStatsTable">

    <!-- Layer 1: Navigation Tabs -->
    <div class="fs-widget-player-stats-table__tabs">
        <button class="fs-tabs fs-tabs--tertiary fs-tabs--active" data-tab="top-stats">
            <span class="fs-tabs__text">Top Stats</span>
        </button>
        <button class="fs-tabs fs-tabs--tertiary" data-tab="shots">
            <span class="fs-tabs__text">Shots</span>
        </button>
        <!-- More tabs... -->
    </div>

    <!-- Tab Content -->
    <div class="fs-widget-player-stats-table__tab-content fs-widget-player-stats-table__tab-content--active" data-tab-content="top-stats">

        <!-- Layer 2: Column Headers -->
        <div class="fs-widget-player-stats-table__header">
            <div class="fs-widget-player-stats-table__header-sticky">
                <div class="fs-select fs-select--placeholder" style="width: 100%;">
                    <span class="fs-select__text fs-select__text--placeholder">All</span>
                    <img src="../../../Assets/Icons/Action/Navigation/Arrow/Down.svg" alt="" class="fs-select__chevron">
                </div>
            </div>
            <div class="fs-widget-player-stats-table__header-scroll-container">
                <div class="fs-widget-player-stats-table__header-row">
                    <div class="fs-widget-player-stats-table__header-cell fs-widget-player-stats-table__header-cell--sorted">
                        <span class="fs-widget-player-stats-table__header-cell-text">Flashscore Rating</span>
                        <img src="../../../Assets/Icons/Action/Navigation/Arrow/Down.svg" alt="" class="fs-widget-player-stats-table__header-cell-icon">
                    </div>
                    <!-- More header cells... -->
                </div>
            </div>
        </div>

        <!-- Layer 3: Data Rows -->
        <div class="fs-widget-player-stats-table__body">
            <div class="fs-widget-player-stats-table__row">
                <div class="fs-widget-player-stats-table__row-sticky">
                    <!-- FSPlayerStatsPlayerCell here -->
                </div>
                <div class="fs-widget-player-stats-table__row-scroll-container">
                    <div class="fs-widget-player-stats-table__row-data">
                        <div class="fs-widget-player-stats-table__data-cell fs-widget-player-stats-table__data-cell--sorted">
                            <!-- FSBadgeRating or FSTableSharedValue here -->
                        </div>
                        <!-- More data cells... -->
                    </div>
                </div>
            </div>
            <div class="fs-divider"></div>
            <!-- More rows... -->
        </div>
    </div>
</div>
```

## JavaScript Functionality

### Tab Switching
```javascript
const tabs = document.querySelectorAll('.fs-tabs[data-tab]');
const tabContents = document.querySelectorAll('.fs-widget-player-stats-table__tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('fs-tabs--active'));
        tab.classList.add('fs-tabs--active');

        tabContents.forEach(content => {
            content.classList.remove('fs-widget-player-stats-table__tab-content--active');
        });

        const selectedContent = document.querySelector(`[data-tab-content="${tabName}"]`);
        if (selectedContent) {
            selectedContent.classList.add('fs-widget-player-stats-table__tab-content--active');
        }
    });
});
```

### Synchronized Scrolling
```javascript
const headerScrolls = document.querySelectorAll('.fs-widget-player-stats-table__header-scroll-container');
const bodyScrolls = document.querySelectorAll('.fs-widget-player-stats-table__row-scroll-container');
const table = document.getElementById('playerStatsTable');

// Sync scrolling and show sticky shadow
headerScrolls.forEach(headerScroll => {
    headerScroll.addEventListener('scroll', () => {
        const scrollLeft = headerScroll.scrollLeft;
        bodyScrolls.forEach(bodyScroll => {
            bodyScroll.scrollLeft = scrollLeft;
        });

        if (scrollLeft > 0) {
            table.classList.add('fs-widget-player-stats-table--scrolled');
        } else {
            table.classList.remove('fs-widget-player-stats-table--scrolled');
        }
    });
});
```

## Design Tokens

| Token | Value |
|---|---|
| Row height | 45px |
| Header tab height | 44px |
| Header label height | 60px |
| Sticky column width | 178px |
| Data cell width | 72px |
| Tab gap | 8px |
| Header cell gap (text to icon) | 4px |
| Sort icon size | 6px × 6px |
| Header background | #EEEEEE |
| Body background | #FFFFFF |
| Sorted column bg | rgba(238, 238, 238, 0.4) |
| Sticky shadow | 2px 0 4px rgba(0, 0, 0, 0.1) |
| Layer separator | 1px #FFFFFF |

## Color Tokens

| Element | Color |
|---------|-------|
| Header background | #EEEEEE |
| Body background | #FFFFFF |
| Sorted column background | rgba(238, 238, 238, 0.4) |
| Sticky column shadow | rgba(0, 0, 0, 0.1) |
| Header text | #001E28 |

## Typography Tokens

| Element | Font Size | Line Height | Weight | Transform |
|---------|-----------|-------------|--------|-----------|
| Header cell text | 12px | 14px | 700 | Uppercase |

## Usage Context
- **Player Statistics**: Main player stats table in match details
- **Team Statistics**: Team-wide player performance data
- **League Statistics**: League-wide player rankings
- **Tournament Statistics**: Tournament player performance
- **Season Reviews**: Season-long player stats comparison

## Accessibility
- Keyboard navigation supported for tabs
- Scrollable areas have hidden scrollbars for cleaner UI
- High contrast text on all backgrounds
- Clear visual hierarchy with sticky columns
- Shadow provides visual feedback when scrolling

## Notes
- JavaScript required for tab switching and synchronized scrolling
- Sticky column uses higher z-index for proper layering
- Sorted column indicators:
  - **Header cell**: Light grey background + 6px down arrow icon positioned 4px below text
  - **Data cells**: Light grey background (rgba(238, 238, 238, 0.4))
- Empty values displayed as en dash "–" for consistency
- All horizontal scrolling is synchronized across header and body
- Sticky column shadow appears only when scrolled
- Component designed for desktop/tablet viewports (min-width recommended: 768px)
- FSDivider used between all data rows for clear visual separation
- Sort arrow icon uses secondary color (#555E61) via CSS filter

## Mock data
Shots total: Empty value, 1, 2, 3, 4, 5 (best value)
Expected goals(xG): Empty value, 0.03, 0.04, 0.05, 0.06, 0.12, 0.20, 0.27, 0.48, 0.55. 0.56 (best value)
Accurate passes: 3/4 (75%), 5/8 (63%), 5/6 (83%), 6/8 (75%), 6/6 (100%), 7/9 (78%), 8/12 (67%), 9/11 (82%), 11/14 (79%), 12/15 (80%), 18/20 (90%)
Touches: 7, 9, 10, 15, 16, 17, 25, 26, 27, 32, 36, 45, 46, 56, 58, 69, 73, 80, 92. 118 (best value)
Touches in opposition box: Empty value, 1, 2, 3, 4, 5 (best value)
Successful dribbles: Empty value, 0/3 (0%), 0/2 (0%), 0/1 (0%), 1/4 (25%), 1/3 (33%), 1/2 (50%), 1/1 (100%), 2/5 (40%) (Best value)
Duels: Empty value, 1, 2, 3, 4, 6, 7, 8, 10, 11, 13, 15 (best value)
