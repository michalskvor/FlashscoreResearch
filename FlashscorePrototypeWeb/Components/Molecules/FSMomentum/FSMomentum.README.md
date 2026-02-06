# FSMomentum Component

##Functional Definition

The **Momentum** component is a visual representation of match pressure over time. it uses a dual-sided vertical bar chart to compare the offensive intensity of Team A (Home) vs. Team B (Away) across the match timeline.

##Data Density & Scaling
To ensure data accuracy, the chart must contain exactly:

1) **full-time match:** 90 bars (one for each minute of regulation time).
2) **Extra-time match:** will be specified later

First Half: 45 bars representing minutes 1' to 45'.

Second Half: 45 bars representing minutes 46' to 90'.

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

##Styling & Assets

###Typography:
Use Livesport Finder LCGJK for "0'", "15", "30", "45'", "60", "75" and "90'" time markers.Use typography class with font-size:13px. Text color is #555E61.
###Colors (HEX Only):
Team A Bars: #001E28 (Example: Black)Team B Bars: #FF0046 (Example: Brand Red) Axis/Grid Lines: #C8CDCD (Example: Light Grey)Background: #EEEEEE (Example: White)

##Implementation Rules for Claude

1) Context: Refer to the images in MomentumPreview to see if the Momentum is placed in a card or a full-width section.

2) File Placement: Save the output in /Components/Molecules/FSMomentum/Momentum.html and /Components/Molecules/FSMomentum/Momentum.css.
