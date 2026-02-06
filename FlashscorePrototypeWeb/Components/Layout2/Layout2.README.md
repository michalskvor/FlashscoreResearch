# Layout2 Spec

## **Desktop Layout - 1440px Viewport**

### **Overview**
Layout2 is an alternative desktop layout template featuring a larger navigation area (277px height) and centered content wrapper. Unlike Layout (with fixed 64px navigation), Layout2 provides more vertical space for navigation and footer sections.

### **Grid & Canvas Dimensions**
- **Viewport Width**: 1440px minimum
- **Max Content Width**: 1188px (centered horizontally)
- **Navigation Height**: 277px (full-width)
- **Footer Height**: 277px (full-width)
- **Background Color**: #EEEEEE

### **Structural Components**

| Component | Width/Height | Behavior | Constraints |
|-----------|--------------|----------|-------------|
| Navigation Container | Full-width (1440px) | Fixed height 277px | Dark background (#00141E) |
| Navigation Inner | Max 1188px | Centered, 277px height | Content container for nav |
| Wrapper | Max 1188px | Centered, flexible height | Contains three-column layout |
| Left Container | 172px | Fixed width | Background matches body (#EEEEEE) |
| Main Container | Flexible | Fills remaining space | White background, 8px radius |
| Right Container | 328px | Fixed width | Background matches body (#EEEEEE) |
| Footer | Full-width (1440px) | Fixed height 277px | White background |

### **Layout Behavior**

**Vertical Structure:**
1. Navigation Container (277px)
2. Content Wrapper (flexible)
   - Inner Wrapper with 24px top, 48px bottom padding
   - Three columns (Left, Main, Right)
3. Footer (277px)

**Horizontal Structure:**
- Content is centered with max-width 1188px
- Three columns are flush (no gaps)
- Left: 172px (fixed)
- Main: Flexible (fills space) = ~688px at 1188px width
- Right: 328px (fixed)

### **Key Differences from Layout**

| Feature | Layout | Layout2 |
|---------|--------|---------|
| Navigation Height | 64px (fixed to top) | 277px (in flow) |
| Footer Height | Variable | 277px (fixed) |
| Navigation Position | Fixed | Static (in flow) |
| Background Color | #F5F5F5 | #EEEEEE |
| Main Container | With borders | With border-radius 8px |

### **CSS Implementation**

**Layout Engine**: Flexbox
- Body uses `display: flex; flex-direction: column;` for full-height layout
- Inner wrapper uses flexbox for three-column layout
- Left: `flex: 0 0 172px;` (fixed)
- Main: `flex: 1 1 auto;` (flexible)
- Right: `flex: 0 0 328px;` (fixed)

**Spacing Rules:**
- All spacing values are even numbers (8px grid)
- Inner wrapper: 24px top, 48px bottom padding
- Container gaps: 0 (flush alignment)
- Main container border-radius: 8px

**Colors (HEX Only):**
- Background: #EEEEEE
- Navigation: #00141E
- Main container: #FFFFFF
- Footer: #FFFFFF
- Text primary: #001E28
- Text secondary: #555E61

### **Responsive Behavior**

At viewport < 1188px:
- Wrapper shrinks proportionally
- Left and right containers maintain fixed widths
- Main container flexes to fill remaining space
- Minimum viable width: 172px + 328px + minimal main = ~600px

### **Use Cases**

This layout is ideal for:
- Pages requiring prominent navigation/header area
- Landing pages with hero sections
- Content-heavy pages with substantial navigation
- Pages where navigation needs more vertical space for branding/menus

### **Implementation Notes**

1. Navigation and footer are full-width but content is centered at 1188px max
2. Main container has white background with 8px border radius
3. Left and right containers blend with body background (#EEEEEE)
4. No fixed positioning - entire layout flows naturally
5. Footer always sits at bottom due to flex layout on body
