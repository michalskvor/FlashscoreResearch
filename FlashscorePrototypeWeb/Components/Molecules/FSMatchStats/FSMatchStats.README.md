# FSMatchStats

## Component Anatomy
The Match Statistics component is a dual-sided data visualization. It displays a metric label centered between two numerical values, each supported by a directional progress bar.

###Data Alignment

- **Home Team (Left Side):** Value is right-aligned toward the center.
- **Away Team (Right Side):** Value is left-aligned toward the center.
- **Label (Center):** The name of the statistic (e.g., "Expected Goals (xG), Ball possesion, Total shots", "Shots on Target").


##Visual Logic: Progress Lines
Each statistic contains two horizontal progress bars (Home and Away) that grow from the **center outwards**.

###Directionality
- **Home Progress Line:** Originates from the right side (center of the component) and fills toward the left.
- **Away Progress Line:** Originates from the left side (center of the component) and fills toward the right.

###Color Logic (Conditional Rendering)
The color of the progress line is determined by the "Dominance" of the value.

**Brand Color (HEX FF0046):** Applied to the side with the higher/better numerical value.
**Black Color (HEX 001E28)**: Applied to the side with the lower/weaker numerical value.
**Equal Values:** If both Home and Away values are identical, both progress lines must be rendered in Black.

Note on "Better" Values: For most stats (Shots, Possession), higher is better. For stats like "Fouls" or "Yellow Cards", the logic may flip (Lower is better), but for this tool, assume Higher Value = Brand Color unless specified.

##Structure
### Match Statistics
| Home Value | Label | Away Value |
| :--- | :---: | ---: |
| **65%** | Possession | 35% |
| [=======---] | | [---=======] |
| (Brand) | | (Black) |

| 12 | Shots on Target | 4 |
| [=====-----] | | [----------] |
| (Brand) | | (Black) |

| 5 | Corner Kicks | 5 |
| [====------] | | [====------] |
| (Black) | | (Black) |


##AI Prompting Instructions (Match Statistics)
When a designer prompts a match state, AI should automatically calculate the bar lengths based on the percentage of the total.

###Calculation Logic
- Total Value = Home + Away.
- Home % = (Home / Total) * 100.
- Away % = (Away / Total) * 100.
- Bar Length: Map the % to a 10-unit string (e.g., 70% = #######---).

###Example Prompt Scenarios
1)"Prototype Live. Home team is dominating possession."
AI Action: Home: 70%, Away: 30%. Home bar = Brand Color. Away bar = Black.

2)"Prototype Post-match. Evenly matched game."
AI Action: Stats should be nearly equal (e.g., 10 vs 11 shots). Bars should be mostly Black or very similar in length.

##Design Variables
Brand Color (Hex): #FF0046 (Flashscore Red)
Neutral/Black (Hex): #001E28
Background for Progress line: #EEEEEE
Bar Height: 8px
Border-radius bar: 2px
Gap between bars: 2px
Gap between values and bars: 4px
Font: size: 13px, line-height: 16px, font-weight: 700, color: HEX 001E28
