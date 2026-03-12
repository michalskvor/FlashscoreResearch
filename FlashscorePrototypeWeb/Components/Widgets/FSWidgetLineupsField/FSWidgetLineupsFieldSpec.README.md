# FSWidgetLineupsFieldSpec

##Container & Global Styles
Outer Wrapper: A container with a light grey background (e.g., #EEEEEE).

Max-Width: The entire widget, including the soccer field and player rows, is capped at 372px.

Centering: The field should be horizontally centered within the outer wrapper if the wrapper exceeds 372px.

##Field Dimensions & Scaling
Base Dimensions: 361px (W) x 574px (H).

Scaling Logic: While the base image is 361px wide, it scales up to a maximum of 372px.

Aspect Ratio: The 0.629 ratio must remain locked. If the width is 372px, the height must adjust proportionally (~591px).

Background: The soccer field image serves as the coordinate map for player placement.

##Team Layout (Vertical Stack)
The widget is divided into two tactical halves:

- Top Half (Home Team): * Goal: Top edge.
    - Attack: Center line.
    - Row Direction: Players are ordered Row 1 (GK) at the top through Row 5 (FWD) near the middle.

- Bottom Half (Away Team): * Goal: Bottom edge.
    - Attack: Center line.
    - Row Direction: Players are ordered Row 1 (GK) at the bottom through Row 5 (FWD) near the middle.
    
##Row & Player Constraints
- Total Players: 11 per team.
- Row Count: Exactly 5 rows available per team.
- Row Capacity: 1 to 5 players per row.
- Row Width: Matches the field width (Max 372px).
- Player Distribution: * Players within a row must be distributed using equal horizontal spacing.
- Rows should have enough vertical "breathing room" so player labels do not overlap.
