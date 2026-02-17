#Prototype Web: Match Detail - Football#

##Overview##
This tool allows designers to build high-fidelity web prototypes for the Flashscore Match Detail page. To ensure data consistency and UI accuracy, every prototype must be initialized with a **specific Match State**.

##Workflow & Initialization##
To initialize a new prototype, the designer must use a specific command. This triggers the AI to pull from the base layout template, apply state-specific logic, and generate a unique file.

###1. The Command###
Designers must use the prompt with the keyword "**Prototype**" followed by the match state and any specific UI/UX overrides.

**Syntax:** Prototype [State] [Specific Changes/Overrides]
- Example: "Prototype Live Match detail. Add a prominent 'VAR Check' banner above the scoreboard and change the primary team color to blue."

###2. File Generation Logic###
Upon receiving the command, the AI tool performs the following:

1) **Template Retrieval:** Loads the master Layout Template.

2) **State Application:** Insert data and components relevant to the chosen state (Prematch, Live, or Post-match).

3) **Customization:** Incorporates the "Specific Changes" defined in the designer's prompt.

4) **File Creation:** Generates a **new file** within the /Prototypes directory.
    **NEVER** change default Layout Template file! All changes are visible only in Prototypes file.
    - Naming Convention: Prototypes/match_[state]_[layout]_[key-word]
    - Naming example: Prototypes/match_finished_mobile_SEObanner

##Structural Templates##

This structure is default state. If designer wants to change position of widgets or components, **it is allowed** in prototype file.

**In case of no-existing widget, don't create new one and just skip this content.**

###**Pre-match structure**###
1) Navigation widget
    ↓ NavigationMain
    ↓ NavigationSub
2) BoxOverContent widget
3) Main content
    ↓ Breadcrumb
    ↓ FSHeadersMatch (Pre-match state)
    ↓ Tabs Primary with items (Match (active state), Odds, H2H, Standings, News 
    ↓ Tabs Secondary with items (Summary (active state), Lineups)
    ↓ FSWidgetPreview
    ↓ FSWidgetOdds (pre-match state)
    ↓ FSWidgetLineupsMissingPlayers
    ↓ FSWidgetTVChannels
    ↓ FSWidgetLiveStreaming
    ↓ FSWidgetAudioCommentary
    ↓ FSWidgetMatchInformation
    ↓ FSWidgetForm
    ↓ FSWidgetTableH2H
    ↓ FSWidgetTableStandings
    ↓ FSWidgetNewsVerticalList
4) SEO container
5) Footer

###**Live structure**###
1) Navigation widget
    ↓ NavigationMain
    ↓ NavigationSub
2) BoxOverContent widget
3) Main content
    ↓ Breadcrumb
    ↓ FSHeadersMatch (Live state)
    ↓ Tabs Primary with items (Match (active state), Odds, H2H, Standings, News 
    ↓ Tabs Secondary with items (Summary (active state), Stats, Lineups, Player stats)
    ↓ FSWidgetSummaryIncident
    ↓ FSWidgetOdds (live state)
    ↓ FSWidgetStats (live state)
    ↓ FSWidgetTVChannels
    ↓ FSWidgetLiveStreaming
    ↓ FSWidgetAudioCommentary (live state)
    ↓ FSWidgetMatchInformation
    ↓ FSWidgetNewsVerticalList
4) SEO container
5) Footer

###**Post-match/Finished structure**###
1) Navigation widget
    ↓ NavigationMain
    ↓ NavigationSub
2) BoxOverContent widget
3) Main content
    ↓ Breadcrumb
    ↓ FSHeadersMatch (Finished state)
    ↓ Tabs Primary with items (Match (active state), Report, Odds, H2H, Standings, News, Video 
    ↓ Tabs Secondary with items (Summary (active state), Stats, Lineups, Player Stats, Commentary)
    ↓ FSWidgetMatchHighlights
    ↓ FSWidgetSummaryIncident
    ↓ FSWidgetOdds (finished state)
    ↓ FSWidgetSummaryStats (finished state)
    ↓ FSWidgetTVChannels
    ↓ FSWidgetMatchInformation
    ↓ FSWidgetNewsVerticalList
4) SEO container
5) Footer

##Design overrides##

The AI must treat the designer's prompt as the highest priority.

- **Example Prompt:** "Prototype Live football match. Remove the Momentum Graph and add a 'Breaking News' ticker at the top."

- **AI Action:** The tool uses the LIVE Structure, deletes the Momentum component, injects the News Ticker into the Header Module and save it to the file /Prototypes with adequate naming.
    
