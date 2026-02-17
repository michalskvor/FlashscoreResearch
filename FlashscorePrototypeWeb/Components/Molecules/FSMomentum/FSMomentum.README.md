# FSMomentum Component

##Functional Definition

The **Momentum** component is a visual representation of match pressure over time. it uses a dual-sided vertical bar chart to compare the offensive intensity of Team A (Home) vs. Team B (Away) across the match timeline.

##Data Density & Scaling
To ensure data accuracy, the chart must contain exactly:

1) **full-time match:** 90 bars (one for each minute of regulation time).
2) **Extra-time match:** 90 bars (full-time) + 12 bars (extra-time bars)

First Half: 45 bars representing minutes 1' to 45'.

Second Half: 45 bars representing minutes 46' to 90' (in full-time match) or 57 bars representing minutes 46' to 102' (in extra-time match)

Half-Time Gap: Provide a visual separation between the 45th and 46th bar. This gap must be **5px.**

##Visual Structure

The component consists of a central horizontal axis representing time ($x$-axis), with vertical bars ($y$-axis) extending upwards and downwards.

###Layout Logic

- Team A (Top): Bars extend upwards from the center axis.
- Team B (Bottom): Bars extend downwards from the center axis.
- Center Axis: A 2px horizontal line (even number) that spans the full width of the component.

###Geometric Constraints
- Momentum width: Default width is 640px, but should be responsive.
- Bar Width: Must be exactly 2px,3px or 4px.
- Bar Gap: Must be between 0.5px nad 1px
- Grid Alignment: The total height of the component must be a multiple of 8px (e.g., 160px).
- Corner Radius: Bars should have 1px border radius.

##Component Logic

The Momentum component is a visual waveform representing which team is "on top" at any given minute.

- Positive Value (1 to 100): Team A (Home team) dominance.
- Negative Value (-1 to -100): Team B (Away team) dominance.
- Zero (0): Neutral play/No significant pressure.

##Variants & Data Requirements

1) Live variant
    - **Duration:** 1 to 90 minutes (only shows data up to the current match minute).
    - **Logic:** The AI must generate a data point for every elapsed minute. Future minutes remain empty or null.
2) Full-time variant
    - **Duration:** Exactly 90 minutes.
    - **Logic:** A complete dataset from minute 1 to 90.
3) Extra-time variant
    - **Duration:** 102 minutes (90 Regular + 12 Extra Time).
    - **Logic:** The X-axis must expand to accommodate the extra 12 minutes of play. Bars have variable width, but gap between bars should be 1px.
    - **Visual:** Extra time minutes are part of second-half block of the match.
    
## AI Prompting Instruction

When a designer requests a specific momentum flow, the AI should interpret descriptors into values:

- **"Home team dominated early"** → Minutes 1-20: Values +60 to +90.
- **"Balanced match"** → Random fluctuations between -30 and +30.
- **"Away team comeback"** → Minutes 70-90: Values -50 to -100.
- **"The final push"** → Neutral play for 75 minutes, followed by a sustained climb to +95 or -95 in the final 15 minutes as a team desperately hunts for an equalizer. (Use Case: Champions League knockout stages where the home team is trailing by one goal late.)
- **"The Chaos Factor"** → Rapid, extreme swings from +70 to -70 every 5–10 minutes. Indicates a match with zero defensive structure and constant transitions. (Use Case: A 4-4 derby or a high-stakes "must-win" cup game.)
- **"The Boring Draw"** → Values fluctuate tightly between -20 and +20. No sustained pressure. The graph looks "flat" with no major peaks or valleys. (Use Case: Two defensive teams neutralizing each other in a 0-0 result.)
- **"Tale of Two Halves"** → 1'–45': Home team dominance (+40 to +80), 46'–90': Complete flip. Away team takes control (-40 to -80) after a half-time tactical adjustment or red card. (Use Case: A team leading 2-0 at half-time that collapses in the second half.)
- **The David and Goliath"** → One team stays consistently between +60 and +90. The underdog rarely crosses into positive territory, showing only small spikes (max +15) during rare counter-attacks. (Use Case: Manchester City vs. a 4th-division side in the FA Cup.)

##Styling & Assets

###Typography:
Use Livesport Finder LCGJK for "0'", "15", "30", "45'", "60", "75" and "90'" time markers.Use typography class with font-size:13px. Text color is #555E61.
###Colors (HEX Only):
Team A Bars: #001E28 (Example: Black)Team B Bars: #FF0046 (Example: Brand Red) Axis/Grid Lines: #C8CDCD (Example: Light Grey)Background: #EEEEEE (Example: White)

##Implementation Rules for Claude

1) Context: Refer to the images in MomentumPreview to see if the Momentum is placed in a card or a full-width section.

2) File Placement: Save the output in /Components/Molecules/FSMomentum/Momentum.html and /Components/Molecules/FSMomentum/Momentum.css.
