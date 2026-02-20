# FSWidgetLineupsNewMissingPlayers

## Component Type
Widget

## Description
A widget displaying missing/unavailable players for both teams in a match, shown in a side-by-side layout. Each row pairs one player per team (left = home, right = away). Ends with an FSInsight with AI analysis about the impact of missing key players.

## Dependencies

### Atoms
- `FSAssetBoxed` — player photo container (`../../Atoms/FSAssetBoxed/FSAssetBoxed.css`)
- `FSIncidentBadgeField` — incident icon badge on player asset (`../../Atoms/FSIncidentBadgeField/FSIncidentBadgeField.css`)
- `FSBadgeAlert` — "MISSING" label (not used in this widget — see Rules) (`../../Atoms/FSBadgeAlert/FSBadgeAlert.css`)

### Molecules
- `FSHeadersSection` — "Missing players" section header (`../../Molecules/FSHeadersSection/FSHeadersSection.css`)
- `FSIncidentBadgeFieldRow` — positions the incident badge on the asset (`../../Molecules/FSIncidentBadgeFieldRow/FSIncidentBadgeFieldRow.css`)
- `FSLineupsNewParticipant` — individual player row with bar chart (`../../Molecules/FSLineupsNewParticipant/FSLineupsNewParticipant.css`)
- `FSInsight` — AI-powered insight text at the bottom (`../../Molecules/FSInsight/FSInsight.css`)

## Structure

```
.fs-widget-lineups-new-missing-players
  ├── .fs-headers-section                          (FSHeadersSection — "Missing players")
  ├── .fs-widget-lineups-new-missing-players__rows
  │     └── .fs-lineups-participant-row × N        (side-by-side pairs)
  │           ├── .fs-lineups-new-participant--left --fluid   (home team player)
  │           └── .fs-lineups-new-participant--right --fluid  (away team player)
  └── .fs-widget-lineups-new-missing-players__insight
        └── .fs-insight                            (FSInsight with AI icon)
```

## Rules

> **Single-side rows:** A row may contain a player on only one side when the teams have an unequal number of missing players. This is only valid in this widget. A lone player will automatically be constrained to the same width as in a two-player row via `max-width: calc(50% - 10px)` set on the widget level.

> **IMPORTANT:** In this widget, `FSLineupsNewParticipant` must **only** use the **percentage variant** (`fs-lineups-new-participant__percent`). The `FSLineupsNewIncident` (goals/assists badge) variant is **forbidden** inside this widget. The bar + percentage value represents the player's likelihood of playing/returning.

> **Incident icon rule:** The valid icons for `FSIncidentBadgeField` in this widget are **Injury** (`Injury.svg`) and **Red Card** (`Red card.svg`). Use Injury for players out due to physical reasons, Red Card for players suspended after a red card. Warning (`Warning.svg`) may be used for players suspended after accumulated bookings. No other icons are allowed.

## Usage Example

```html
<div class="fs-widget-lineups-new-missing-players">

    <!-- Section header -->
    <div class="fs-headers-section">
        <div class="fs-headers-section__left">
            <span class="fs-headers-section__text">Missing players</span>
        </div>
        <div class="fs-headers-section__center"></div>
        <div class="fs-headers-section__right"></div>
    </div>

    <!-- Participant rows -->
    <div class="fs-widget-lineups-new-missing-players__rows">

        <div class="fs-lineups-participant-row">

            <!-- Left: home team player with incident badge and subtext -->
            <div class="fs-lineups-new-participant fs-lineups-new-participant--left fs-lineups-new-participant--fluid">
                <div class="fs-lineups-new-participant__asset">
                    <div class="fs-asset-boxed fs-asset-boxed--38px fs-asset-boxed--player">
                        <img class="fs-asset-boxed__image fs-asset-boxed__image--player" src="..." alt="Player Name">
                    </div>
                    <div class="fs-lineups-new-participant__asset-incident">
                        <div class="fs-incident-badge-field-row fs-incident-badge-field-row--vertical fs-incident-badge-field-row--small fs-incident-badge-field-row--top">
                            <div class="fs-incident-badge-field fs-incident-badge-field--small">
                                <img class="fs-incident-badge-field__icon" src="../Assets/Icons/Incidents/Injury.svg" alt="Injury">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fs-lineups-new-participant__info">
                    <div class="fs-lineups-new-participant__text">
                        <span class="fs-lineups-new-participant__name">Player Name</span>
                        <span class="fs-lineups-new-participant__subtext">Hamstring Injury</span>
                    </div>
                    <div class="fs-lineups-new-participant__chart-row">
                        <div class="fs-lineups-new-participant__chart-bar">
                            <div class="fs-lineups-new-participant__chart-fill" style="width: 30%"></div>
                        </div>
                        <!-- ONLY percentage variant allowed — never use fs-lineups-new-incident here -->
                        <div class="fs-lineups-new-participant__badge-container">
                            <span class="fs-lineups-new-participant__percent">30%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: away team player -->
            <div class="fs-lineups-new-participant fs-lineups-new-participant--right fs-lineups-new-participant--fluid">
                <!-- same structure as left, mirrored -->
            </div>

        </div>

        <!-- more rows... -->

    </div>

    <!-- FSInsight with AI -->
    <div class="fs-widget-lineups-new-missing-players__insight">
        <div class="fs-insight">
            <div class="fs-insight__row">
                <div class="fs-insight__icon-container">
                    <img src="..." alt="Team Logo" class="fs-insight__icon">
                </div>
                <p class="fs-insight__text"><strong>Without Player X</strong>, team's output drops...</p>
                <img src="../Assets/Icons/Other/AI.svg" alt="AI insight" class="fs-insight__ai-icon">
            </div>
        </div>
    </div>

</div>
```

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
- Overrides `fs-lineups-new-participant--fluid` to `max-width: calc(50% - 10px)` — ensures a lone player on one side never stretches wider than a player in a full two-player row (formula: `(100% - 20px gap) / 2`)

### Insight section
- `padding: 0 12px`
- Uses `FSInsight` with team logo as icon + AI icon

### Participant percentage bar
- Bar fill width = player's return probability (e.g. `style="width: 30%"`)
- Text label must match the bar value (e.g. `30%`)

## Variants

| Variant | Icon | Use case |
|---|---|---|
| Injury | `Injury.svg` | Player out due to physical injury (hamstring, knee, ankle, etc.) |
| Red Card | `Red card.svg` | Player suspended after receiving a red card |
| Warning / Booking | `Warning.svg` | Player suspended after accumulated yellow card bookings |
| No incident badge | — | Player asset has no incident overlay |
| With subtext | — | `fs-lineups-new-participant__subtext` describes the reason (e.g. "Hamstring Injury", "Suspended") |
