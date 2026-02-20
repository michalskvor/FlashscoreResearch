# FSWidgetLineupsNewTopScorers

## Component Type
Widget

## Description
A widget displaying top scorers for both teams in a match, shown in a side-by-side layout. Each row pairs one player per team (left = home, right = away). Players are ranked by goal contribution. Ends with an FSInsight highlighting the standout performer.

## Dependencies

### Atoms
- `FSAssetBoxed` — player photo container (`../../Atoms/FSAssetBoxed/FSAssetBoxed.css`)
- `FSIncidentBadgeField` — incident icon badge on player asset (`../../Atoms/FSIncidentBadgeField/FSIncidentBadgeField.css`)
- `FSLineupsNewIncident` — goals/assists badge (`../../Atoms/FSLineupsNewIncident/FSLineupsNewIncident.css`)
- `FSBadgeAlert` — "MISSING" availability label (`../../Atoms/FSBadgeAlert/FSBadgeAlert.css`)

### Molecules
- `FSHeadersSection` — "Top scorers" section header (`../../Molecules/FSHeadersSection/FSHeadersSection.css`)
- `FSIncidentBadgeFieldRow` — positions the incident badge on the asset (`../../Molecules/FSIncidentBadgeFieldRow/FSIncidentBadgeFieldRow.css`)
- `FSLineupsNewParticipant` — individual player row with bar chart (`../../Molecules/FSLineupsNewParticipant/FSLineupsNewParticipant.css`)
- `FSInsight` — insight text about the best performer at the bottom (`../../Molecules/FSInsight/FSInsight.css`)

## Structure

```
.fs-widget-lineups-new-top-scorers
  ├── .fs-headers-section                       (FSHeadersSection — "Top scorers")
  ├── .fs-widget-lineups-new-top-scorers__rows
  │     └── .fs-lineups-participant-row × N     (side-by-side pairs)
  │           ├── .fs-lineups-new-participant--left --fluid   (home team player)
  │           └── .fs-lineups-new-participant--right --fluid  (away team player)
  └── .fs-widget-lineups-new-top-scorers__insight
        └── .fs-insight                         (FSInsight — no AI icon)
```

## Rules

> **IMPORTANT:** In this widget, `FSLineupsNewParticipant` uses the **`FSLineupsNewIncident` (goals/assists badge) variant**, not the percentage variant. The bar width reflects the player's relative scoring rank. Use `--goals-only` or `--assists-only` modifiers on `fs-lineups-new-incident` when a player has only one type of contribution.

> **Insight:** The FSInsight in this widget uses a **non-AI icon** (e.g. `Lineup.svg`) — no `fs-insight__ai-icon` element.

> **Cross-widget consistency:** If a player in this widget has the `fs-badge-alert` "MISSING" label, that **same player must also appear** in `FSWidgetLineupsNewMissingPlayers` on the same feature page. Always keep both widgets in sync — adding a MISSING badge here requires a matching entry there.

> **MISSING badge — incident icon:** When a player has the `fs-badge-alert` "MISSING" label, the `FSIncidentBadgeField` icon on their asset **must always be the Injury icon** (`Injury.svg`). No other icon (Warning, Red card, Flame, etc.) is allowed when MISSING is shown.

## Usage Example

```html
<div class="fs-widget-lineups-new-top-scorers">

    <!-- Section header -->
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">Top scorers</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <!-- Participant rows -->
    <div class="fs-widget-lineups-new-top-scorers__rows">

        <div class="fs-lineups-participant-row">

            <!-- Left: home player with Flame badge, goals + assists -->
            <div class="fs-lineups-new-participant fs-lineups-new-participant--left fs-lineups-new-participant--fluid">
                <div class="fs-lineups-new-participant__asset">
                    <div class="fs-asset-boxed fs-asset-boxed--38px fs-asset-boxed--player">
                        <img class="fs-asset-boxed__image fs-asset-boxed__image--player" src="..." alt="Player Name">
                    </div>
                    <!-- Optional incident badge (e.g. Flame, Warning) -->
                    <div class="fs-lineups-new-participant__asset-incident">
                        <div class="fs-incident-badge-field-row fs-incident-badge-field-row--vertical fs-incident-badge-field-row--small fs-incident-badge-field-row--top">
                            <div class="fs-incident-badge-field fs-incident-badge-field--small">
                                <img class="fs-incident-badge-field__icon" src="../Assets/Icons/Incidents/Flame.svg" alt="Flame">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fs-lineups-new-participant__info">
                    <div class="fs-lineups-new-participant__text">
                        <span class="fs-lineups-new-participant__name">Player Name</span>
                    </div>
                    <div class="fs-lineups-new-participant__chart-row">
                        <div class="fs-lineups-new-participant__chart-bar">
                            <div class="fs-lineups-new-participant__chart-fill" style="width: 90%"></div>
                        </div>
                        <div class="fs-lineups-new-participant__badge-container">
                            <!-- Goals + Assists (both) -->
                            <div class="fs-lineups-new-incident">
                                <div class="fs-lineups-new-incident__goals">
                                    <img class="fs-lineups-new-incident__icon" src="../Assets/Icons/Incidents/Goal/Soccer.svg" alt="Goals">
                                    <span class="fs-lineups-new-incident__count">12</span>
                                </div>
                                <div class="fs-lineups-new-incident__assists">
                                    <img class="fs-lineups-new-incident__icon" src="../Assets/Icons/Incidents/Assist ALT.svg" alt="Assists">
                                    <span class="fs-lineups-new-incident__count">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Optional: MISSING alert if player is unavailable -->
                    <!-- <div class="fs-badge-alert"><span class="fs-badge-alert__text">MISSING</span></div> -->
                </div>
            </div>

            <!-- Right: away player (no incident badge on asset) -->
            <div class="fs-lineups-new-participant fs-lineups-new-participant--right fs-lineups-new-participant--fluid">
                <!-- same structure, no asset-incident -->
            </div>

        </div>

        <!-- more rows... -->

    </div>

    <!-- FSInsight — no AI icon -->
    <div class="fs-widget-lineups-new-top-scorers__insight">
        <div class="fs-insight">
            <div class="fs-insight__row">
                <div class="fs-insight__icon-container">
                    <img src="../Assets/Icons/Incidents/Lineup.svg" alt="" class="fs-insight__icon">
                </div>
                <p class="fs-insight__text"><strong>Player Name</strong> scored X goals in last N games.</p>
            </div>
        </div>
    </div>

</div>
```

## FSLineupsNewIncident modifiers

| Modifier | Use case |
|---|---|
| (none) | Player has both goals and assists |
| `fs-lineups-new-incident--goals-only` | Player has only goals (assists count = 0) |
| `fs-lineups-new-incident--assists-only` | Player has only assists (goals count = 0) |

> For right-side players, DOM order inside `fs-lineups-new-incident` should be: assists first, then goals (visual order is reversed by `flex-direction: row-reverse` on the chart row).

## Technical Details

### Widget container
- `display: flex`, `flex-direction: column`, `width: 100%`
- `gap: 16px` — spacing between header, rows, and insight
- `padding-bottom: 20px`
- `box-sizing: border-box`

### Rows section
- `display: flex`, `flex-direction: column`, `gap: 4px`
- `padding: 0 12px`
- Overrides `fs-lineups-participant-row` to `width: 100%` (the standalone molecule defaults to 639px)

### Insight section
- `padding: 0 12px`
- Uses `FSInsight` with a sports icon (e.g. `Lineup.svg`) — **no AI icon**

## Variants

| Variant | Description |
|---|---|
| With asset incident badge | Player has Flame / Warning icon on photo (form or discipline status) |
| Without asset incident badge | No overlay on player photo |
| With MISSING alert | `fs-badge-alert` shown below chart row when player is unavailable |
| Goals only | `fs-lineups-new-incident--goals-only` — assists element hidden |
| Assists only | `fs-lineups-new-incident--assists-only` — goals element hidden |
| Goals + Assists | Default — both elements visible |
