# FSWidgetPlayerStatsTable specification

##Component Structure
The component is composed of three distinct vertical layers that must stay perfectly aligned.

**Layer 1: Navigation Tabs (Top Header)**
Function: Show different data across table (Top stats, Shooting, Attack, Passes, Defense, Goalkeeping, General)

Component use: Use FSTabs Tertiary version (light grey background)

**Layer 2: Column Definitions (Sub-Header)**
First Column: Sticky/Fixed position. Contains the primary identifier (FSSelect - filter for selecting players for selected teams, default is All).

Data Columns: Scrollable horizontally. Contains the metric labels.

Component use: Second-level of FSTabs tertiary - on light grey background. Between first-level and second-level is 1px white gap)

**Layer 3: Data Grid (Table Body)**
First Column: Sticky/Fixed. Must match the width of the Sub-Header's first column.

Data Cells: Scrollable horizontally. Must align perfectly with the Sub-Header metrics.

##Dimensions Configuration
Use the following variables to define the exact footprint of the table.

Element | Dimension | Class | Value (px)
Row | Height | row-height | 45px
Header | Height (Tabs) | header-tab-height | 44px
Header | Height (Labels) | header-label-height | 60px
Sticky | Column Width | sticky-col-width | 178px
Data Cell | Width | data-cell-width | 72px

##Visual & Interaction Logic
**1. Sticky Behavior**
    - The First Column (in both Sub-Header and Body) must have a z-index higher than the data cells.

    - A subtle box-shadow or border-right should appear on the sticky column only when the user starts scrolling to provide visual separation.

**2. Scrolling Sync**
    - Horizontal scrolling must be synchronized between the Sub-Header and the Table Body. If the user scrolls the data grid, the labels above must move at the exact same rate.

**3. Styling Rules**
Header Background: #EEEEEE (Light Gray)
Table body: #FFFFFF
First column in data cells: #EEEEEE 40% (means on this column is applied sorting, this background may have other columns too)
Divider between rows: Use FSDivider
Empty value in Data Cell: Use en dash "–"

**Alignment&Sizing**
Header Cell - Sticky cell with FSSelect - alignment: left, padding: 0 8px
Header Cell - others cells - alignment:center, padding: 0 2px
Data Cell - Sticky cell with FSPlayerStatsPlayerCell - alignment:left,padding: 6px 2px 6px 12px
Data Cell - others cells - alignment:center, padding: 0 2px
FSSelect - fill the container

##Markdown Data Template for AI
When the AI generates this component, it should use the following structural shorthand:

[ Top Stats ] [ Shots ] [ Attack ] [ Passes ] [ Defense ] [ Goalkeeping ] [ General ]<-- Layer 1

Tab: Top Stats (Default)
Header Labels: [Sticky: FSSelect] | Flashscore Rating | Shots Total | Expected Goals | Dribbles Sucess | Touches | Passes Success
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSBadgeRating | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue

Tab: Shots
Header Labels: [Sticky: FSSelect] | Total Shots | Goals | Expected Goals (xG) | xG on target (xGOT) | Shots on target | Shots off target | Blocked shots | Shots inside the box | Shots outside the box | Headed shots
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue

Tab: Attack
Header Labels: [Sticky: FSSelect] | Touches in opposition box | Successful dribbles | Big chances missed | Touches | Fouls suffered | Offsides
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue

Tab: Passes
Header Labels: [Sticky: FSSelect] | Accurate passes | Big chances created | Assists | Expected assists (xA) | Accurate passes in final third | Accurate long passes | Accurate crosses
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue

Tab: Defense
Header Labels: [Sticky: FSSelect] | Duels | Aerial duels won | Ground duels won | Tackles won | Fouls committed | Interceptions | Clearances | Errors leading to goal | Errors leading to shot 
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue

Tab: Goalkeeping
Header Labels: [Sticky: FSSelect] | Goalkeeper saves | Goals conceded | Goals prevented | xGOT faced | Punches | Throws | Act as sweeper  
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue

Tab: General
Header Labels: [Sticky: FSSelect] | Player rating | Minutes played | Goals | Own goals | Assists | Yellow cards | Red cards
Data Cell: [Sticky: FSPlayerStatsPlayerCell] | FSBadgeRating | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue | FSTableSharedValue
