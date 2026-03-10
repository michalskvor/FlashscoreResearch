# Bottom-sheet dialog Mobile

##Viewport Constraints
To simulate a mobile environment, the entire prototype must be rendered within the following container:

- Max-Width: 639px
- Fixed Height: 852px (Standardized mobile viewport)
- Overflow: hidden (The viewport itself should not scroll; scrolling happens inside the dialog).

##Component Structure

###1. Backdrop (Background Layer)
**Function:** Dims the underlying content to focus on the dialog.
**Styling:** Covers 100% of the viewport.
**Color:** Black with opacity (e.g., rgba(1, 10, 15, 0.6)).

###Dialog Container (The Bottom-Sheet)
**Alignment:** Fixed at the bottom of the viewport.
**Width:** 100%.
**Min-Height:** 230px.
**Background:** #FFFFFF (White).
**Border-Radius:** 12px on Top-Left and Top-Right only.
**Inner Padding:** 24px (Applied to the body content).

###Close Button
**Component use:**FSButtonClose (Large variant)
**Position:** absolute in the Top-Right corner.
**Z-Index:** Higher than the body content.

###Scrollable Body
**Behavior:** If content exceeds the dialog height, it must scroll vertically.
**Constraint:** The body must not overlap with the sticky footer.

###Sticky Footer (Action Area)
**Behavior:** sticky or absolute at the bottom of the dialog.
**Z-Index:** Higher than the body content to ensure visibility during scrolling.
**Container Padding:** 16px (top), 24px (right), 24px (bottom), 24px (left).
**Button:** One Full-Width primary button (FSButton medium size)

##Visual Definition (CSS Logic)
For the AI to render this correctly, use the following style mapping:

.viewport {
  max-width: 639px;
  height: 852px;
  position: relative;
  overflow: hidden;
}

.backdrop {
  position: absolute;
  inset: 0;
  background: rgba(1, 10, 15, 0.6); /* Adjust opacity as needed */
}

.bottom-sheet {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 230px;
  background: #ffffff;
  border-radius: 12px 12px 0 0;
  display: flex;
  flex-direction: column;
}

.dialog-body {
  padding: 24px;
  overflow-y: auto;
  flex-grow: 1;
}

.sticky-footer {
  padding: 16px 24px 24px 24px;
  background: #ffffff;
  z-index: 10;
}

.primary-button {
  width: 100%;
  height: 48px;
  background: #FFD300; /* Flashscore Brand Color */
  border-radius: 8px;
}

##Markdown Structural Template
When the AI generates a dialog in a prototype file, it should follow this hierarchy:

<div class="viewport">
  <div class="backdrop"></div>
  
  <div class="bottom-sheet">
    <button class="close-btn">✕</button>
    
    <div class="dialog-body">
      ## [Title of Dialog]
      [Dynamic content goes here... e.g., Player Stats, Match Info, or Filter Options]
    </div>
    
    <div class="sticky-footer">
      <button class="primary-button">Apply Changes</button>
    </div>
  </div>
</div>
