/**
 * Match data for lineup prototype: rating + incidents (goals, yellow card, substitution in/out).
 * Keyed by data-player-id; for players without id use "home-{number}" or "away-{number}".
 * Dle screenshotu zápasu Man City vs Fulham 3–0.
 */
var lineupMatchData = {
    /* === HOME (Manchester City) === */
    "home-31": { rating: 7.4, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "home-2": { rating: 6.8, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897684426570334208": { rating: 7.4, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "home-25": { rating: 7.0, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "home-24": { rating: 6.5, goals: 0, yellowCard: true, substitutionIn: false, substitutionOut: false },
    "1897732563787841539": { rating: 8.0, goals: 1, yellowCard: true, substitutionIn: true, substitutionOut: false },
    "1897689487811805184": { rating: 7.8, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897700133601280000": { rating: 7.0, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: true },
    "1897739615272697856": { rating: 7.2, goals: 0, yellowCard: true, substitutionIn: true, substitutionOut: false },
    "1897695264471515136": { rating: 6.7, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897739566216118272": { rating: 6.9, goals: 2, yellowCard: false, substitutionIn: true, substitutionOut: false },

    /* === AWAY (Fulham) === */
    "1897743760918577152": { rating: 7.6, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897692255825952768": { rating: 6.8, goals: 0, yellowCard: false, substitutionIn: true, substitutionOut: false },
    "1897700077255000064": { rating: 7.0, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897731511424385027": { rating: 6.7, goals: 0, yellowCard: false, substitutionIn: true, substitutionOut: false },
    "1897691124680884225": { rating: 6.7, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: true },
    "1897734875788869633": { rating: 7.6, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897679629330939904": { rating: 6.9, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897733303138779137": { rating: 6.9, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897731018522361856": { rating: 7.3, goals: 0, yellowCard: true, substitutionIn: false, substitutionOut: false },
    "1897695203754770432": { rating: 6.5, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false },
    "1897728044861489153": { rating: 7.5, goals: 0, yellowCard: false, substitutionIn: false, substitutionOut: false }
};
