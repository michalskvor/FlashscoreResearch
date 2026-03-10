# ⚽️ FlashScore Prototype Web Kit

A **Design System Repository** for rapidly prototyping FlashScore web features using HTML/CSS and Claude Code.

## Purpose

This repository allows **Product Managers** (non-technical users) to prototype new FlashScore features by working with Claude Code agents. The design system provides pre-built brand components that agents can compose and extend without writing everything from scratch.

**Goal**: Clone → Request Feature → Build → Preview

## Repository Architecture

You must strictly adhere to the following file structure. Do not create directories or files outside this hierarchy without explicit approval.

/FlashscorePrototypeWEB
├── /Assets             <-- Icons, bookmakers, flags, lineups fields, players and other asset definitions
├── /DesignTokens       
│   ├── /Colors         <-- Brand and semantic colors
│   └── /Typography     <-- Fonts and typographic classes
├── /Components
│   └── Atoms           <-- Atomic components (Buttons, Badges, AssetContainer,...)
│       └── [ComponentName]
│           ├── [ComponentName].html
│           └── [ComponentName].css
│           └── [ComponentName].README.md
│   └── Molecules       <-- Complex components composed of atomic components (Rows, Headers, Cards, Navigation,...)
│       └── [ComponentName]
│           ├── [ComponentName].html
│           └── [ComponentName].css
│           └── [ComponentName].README.md
│   └── Widgets       <-- Widget composed of Molecules and Atoms
│       └── [ComponentName]
│           ├── [ComponentName].html
│           └── [ComponentName].css
│           └── [ComponentName].README.md
│   └── LayoutTemplate     <-- Basic web layout for Mobile and Desktop without any content in main area
│── /Features
│   ├── /MatchDetail    <-- Match detail of football match - live, pre-match and final state
│   ├── /News           <-- News content - article listing, detail of article
│── /ScreenPreviews     <-- Images of content for understanding hierarchy and rhythm of a page
│── /Prototypes         <-- Folder for creating new prototypes by designer
│── /Utilities          <-- Mocking data for Teams, Players and News information


## Source material & Inheritance
All UI elements must inherit properties exclusively from the following source files. Do not reference external libraries or undocumented local files.

- **Assets:** All icons, illustrations, and static media.

- **Colors:** Primary, secondary, and functional color definitions.

- **Typography:** All font-family, weight, and line-height definitions.

[!IMPORTANT] Strict Creation Policy: You are prohibited from creating new Assets, Colors, or Typography classes autonomously. If a design requirement appears to fall outside existing definitions, you must ask for permission before implementation.

## Styling & CSS Implementation

To keep the prototype code lean and directly map to visual specs, follow these CSS rules:
- **Colors:** Use HEX codes only (e.g., #FF5733).
- **No Variables:** Do not create or use CSS variables ($--color-primary$, etc.). Hardcode the HEX values directly into the styles as defined in the Colors file.
- **No inline svg (unless specified):** Always use path to folder with Icons to use icon from library. Never write new path into html and map there the most adequate icon. You may use inline svg path **ONLY** if designer allow you to do that.
- **Contextual Awareness:** Always analyze the provided file "Screen previews" before coding. The visual context of a component (spacing, shadow, opacity) supersedes generic assumptions.

##Typography Rules

We use a dual-font system with specific logic for numerical data:

- **Livesport Finder LCGJK** - usage general text - default for all UI labels, body and headers
- **FS Numbers** - numerical data - use only for numbers where size is bigger then 18px.

Note: For any numerical value where $size < 18px$, fallback to Livesport Finder LCGJK. When placing typography over a colour background, make sure there’s always good contrast for maximum legibility.



## Responsive Layout & Breakpoints

Prototyping must support three distinct layouts. Use the following pixel ranges for your media queries and container logic:
**Desktop Layout:** For screens where $width \ge 800px$.
**Tablet Layout:** For screens where $640px \le width \le 799px$.
**Mobile Layout:** For screens where $0px \le width \le 639px$.

Basic width of screen for these three layout types is 393px for mobile view, 744px for tablet view and 1440px for desktop view. In case of i tell you "Prototype screen with desktop layout", you prepare responsive screen in default width 1440px.

## Prototyping Workflow

**Analyze:** Review the screen previews and read template structure to understand component placement.
**Verify:** Check the Assets, Colors, and Typography files for existing matches.
**Implement:** Code the layout using the breakpoint logic above.
**Validate:** Ensure no new color variables were created and FS Numbers is only applied to large-scale digits.

##Spacing, Sizing & Grid

The system is built on a strict geometric progression to ensure visual harmony.

**8px Grid:** All high-level layout structures must align with an 8px grid.
**The Even-Number Rule:** All spacing (padding, margin, gap) and sizing (width, height) must use even numbers ($2, 4, 6, 8, 10, \dots$).
**Exception:** Odd numbers are permitted **only** if they are explicitly specified in a pre-existing component within the documentation or screen previews.

##Creating new component
Before writing any code for a Molecule or Widget, identify which Atoms or Molecules you need to import.

##Rules for Prototyping

###Overview
This tool allows designers to build high-fidelity web prototypes for the Flashscore Match Detail page. To ensure data consistency and UI accuracy, every prototype must be initialized with a **specific Match State**.

###Workflow & Initialization
To initialize a new prototype, the designer must use a specific command. This triggers the AI to pull from the base layout template, apply state-specific logic, and generate a unique file.

1. The Command
Designers must use the prompt with the keyword "**Prototype**" followed by the match state and any specific UI/UX overrides.

**Syntax:** Prototype [State] [Specific Changes/Overrides]
- Example: "Prototype Live Match detail. Add a prominent 'VAR Check' banner above the scoreboard and change the primary team color to blue."

2. File Generation Logic
Upon receiving the command, the AI tool performs the following:

1) **Template Retrieval:** Analyse, if adequate page exists in Features file. If yes, use it for prototype. Otherwise use only LayoutTemplate and insert required data.

2) **State Application:** Insert data and components relevant to the chosen state (Prematch, Live, or Post-match).

3) **Customization:** Incorporates the "Specific Changes" defined in the designer's prompt.

4) **File Creation:** Generates a **new file** within the /Prototypes directory.
    **NEVER** change default Layout Template file! All changes are visible only in Prototypes file.
    - Naming Convention: Prototypes/match_[state]_[layout]_[key-word]
    - Naming example: Prototypes/match_finished_mobile_SEObanner

###Structural Templates##

This structure is default state. If designer wants to change position of widgets or components, **it is allowed** in prototype file.

**In case of no-existing widget, don't create new one and just skip this content.**

a)**Pre-match structure**
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

b)**Live structure**
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

c)**Post-match/Finished structure**
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

###Design overrides##

The AI must treat the designer's prompt as the highest priority.

- **Example Prompt:** "Prototype Live football match. Remove the Momentum Graph and add a 'Breaking News' ticker at the top."

- **AI Action:** The tool uses the LIVE Structure, deletes the Momentum component, injects the News Ticker into the Header Module and save it to the file /Prototypes with adequate naming.
    
**Unless specified (prompt) otherwise by the designer, always use Premier League names, teams and images.*


##Design system Implementation Rules

###Strict Atomic Hierarchy
All development must follow a strict Dependency Chain. You are prohibited from using raw HTML tags or custom CSS for elements that have already been defined as Atoms.

- **Atoms:** The smallest functional units (Buttons, Inputs, Icons, Typography).
- **Molecules:** Groups of Atoms functioning together (Search Bar, Card Header).
- **Widgets/Organisms:** Complex UI sections composed of Molecules and/or Atoms (Sidebar, Property Inspector).

###Dependency & Connectivity Rules
To ensure changes in Figma mirror correctly in the code, follow these technical constraints:

A. No "Shadow" Components
Never rewrite the logic or styling of an Atom inside a Molecule or Widget.

- **Wrong:** Creating a <button> inside a CardWidget and styling it to look like the design.
- **Right:** Importing the Button Atom into the CardWidget.

B. Prop Forwarding & Inheritance
Molecules and Widgets must act as "pass-throughs" for Atom properties.

-If an Atom (e.g., Button) has a variant prop, the parent Molecule must allow that prop to be passed down or set it explicitly using the Atom's defined logic.
- **Constraint:** If I update the borderRadius in the Button Atom file, it must reflect in every Widget using that button without further editing.

C. Single Source of Truth (SSoT)
-**Styles:** All shared values (spacing, colors, shadows) must be pulled from the Tokens file.
- **Components:** If a UI element exists in Figma as a Component, it must be a standalone file in the /atoms or /molecules folder before it is used in a Prototype Widget.

###Workflow Logic for Claude
When I ask you to build or update a component, follow this mental checklist:

1)Inventory Check: Does this Widget require a Button, Input, or Icon?

2) Import First: Locate the existing Atom file. Do not "hallucinate" or hardcode the style.

3) Nest, Don't Replicate: Place the Atom inside the Molecule. Pass the required props.

4) Refactor Warning: If you notice a Molecule is using raw <div> or <span> tags for things that should be Atoms, you must refactor the Molecule to use the proper Atoms first.

###Code Example for Reference
[!IMPORTANT]
Use this pattern to maintain connectivity.

// ✅ CORRECT: Molecule using an Atom
import { Button } from "../atoms/Button";

export const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-molecule">
      <input type="text" placeholder="Search..." />
      {/* Connectivity: Using the Atom ensures global style updates work */}
      <Button variant="primary" onClick={onSearch}>Search</Button> 
    </div>
  );
};
