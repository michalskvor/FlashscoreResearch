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
│── /Features
│   ├── /MatchDetail    <-- Match detail of football match - live, pre-match and final state
│   ├── /News           <-- News content - article listing, detail of article
│── /ScreenPreviews     <-- Images of content for understanding hierarchy and rhythm of a page


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

**Analyze:** Review the screen previews and read Prototypes.md file to understand component placement.
**Verify:** Check the Assets, Colors, and Typography files for existing matches.
**Implement:** Code the layout using the breakpoint logic above.
**Validate:** Ensure no new color variables were created and FS Numbers is only applied to large-scale digits.

##Spacing, Sizing & Grid

The system is built on a strict geometric progression to ensure visual harmony.

**8px Grid:** All high-level layout structures must align with an 8px grid.
**The Even-Number Rule:** All spacing (padding, margin, gap) and sizing (width, height) must use even numbers ($2, 4, 6, 8, 10, \dots$).
**Exception:** Odd numbers are permitted **only** if they are explicitly specified in a pre-existing component within the documentation or screen previews.

##Rules for Prototyping

###Repository & File Location

New prototype files must be placed in the following directory based on their target device. Do not create files in the root directory.
/FlashscorePrototypeWeb/Prototypes/[PrototypeName].html
/FlashscorePrototypeWeb/Prototypes/[PrototypeName].css

###Rapid Prototyping & Template Rule

To ensure layout consistency across all prototypes, Claude must use the **LayoutTemplate** as the foundation for every new file.

- **Immutable Structure:** The LayoutTemplate must be used without changes to its core structural logic (Nav, Footer, and Container wrappers).

- **Atomic Editing (The "Container Only" Rule):** When adding or editing content (e.g., adding a widget to the left-container or a chart to the main-container), Claude is strictly prohibited from modifying any other part of the template.

-**Scope:** Changes must be scoped exclusively to the target container's inner HTML/CSS.

###Prototyping Workflow

**1) Initialize:** Copy LayoutTemplate into the correct /prototypes folder.

**2)Target:** Identify the specific container requiring changes (left, main, or right).

**3)Inject:** Add the component code (e.g., the 90-bar Momentum chart) **only inside the target container.**

**4)Validate:** Ensure no global styles or other containers were altered.

###Prototyping Data

**Unless specified (prompt) otherwise by the designer, always use Premier League names, teams and images.*
