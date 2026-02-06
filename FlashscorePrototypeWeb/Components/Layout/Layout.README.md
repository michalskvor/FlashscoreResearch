# Layout Spec

## **Desktop**

###**Grid & Canvas Dimensions**
The desktop layout is optimized for a 1440px viewport. All containers must be centered on the $x$-axis or span the full width as specified.
- Total Viewport Width: 1440px
- Total Content Width: 1188px (calculated as $172px + 688px + 328px$)
- Outer Margins: 126px on both left and right ($(1440 - 1188) / 2 = 126$)

###**Structural Components**
Region  Width   Behavior    Constraints
Navigation Bar1440px    Full-width  Fixed to top. Height must be an even number (e.g., 64px).
Left Container  172px   Fixed   Secondary navigation, filters, or category lists.
Main Container  688px   Filled   Primary content area (Match details, Momentum, etc.).
Right Container 328px   Fixed   Contextual widgets, standings, or live data.
Footer  1440px  Full-width  Sits at the bottom of the document flow.

###**Visual Hierarchy & Spacing**

- **Vertical Stacking:** Navigation → Content Area → Footer.

- **Horizontal Alignment:** Left, Main, and Right containers must sit side-by-side within the 1188px centered wrapper.

- **Even Numbers Only:** Any internal padding, margins, or gaps must be even numbers (e.g., 2px, 16px, 24px) and align with the 8px grid.

- **Flush Alignment:** Unless the screen preview shows specific gaps, these three containers should be flush against one another.

###**CSS Implementation Rules**

**Box Model:** Use box-sizing: border-box; to ensure widths remain exactly 172px, 688px, and 328px regardless of padding.

**Layout Engine:** Use CSS Grid or Flexbox to maintain the centered 1188px wrapper.

**Colors (HEX Only):** Reference the Colors.md file for backgrounds and borders. No CSS variables.
