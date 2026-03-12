/**
 * Prototype: Lineups → Player Card click-through + Sub-nav More button + match data (rating, incidents)
 */
(function () {
    var INCIDENT_ICONS = {
        goal: '../Assets/Icons/Incidents/Goal/Soccer.svg',
        yellow: '../Assets/Icons/Incidents/Yellow card.svg',
        subIn: '../Assets/Icons/Incidents/Substitution.svg',
        subOut: '../Assets/Icons/Incidents/Substitution.svg'
    };

    function getRatingClass(r) {
        if (r == null) return 'fs-badge-rating--c';
        if (r >= 8) return 'fs-badge-rating--a';
        if (r >= 7) return 'fs-badge-rating--b';
        if (r >= 6.5) return 'fs-badge-rating--c';
        if (r >= 6) return 'fs-badge-rating--d';
        return 'fs-badge-rating--f';
    }

    function buildIncidentsHtml(data) {
        if (!data) return '';
        var parts = [];
        var i;
        for (i = 0; i < (data.goals || 0); i++) {
            parts.push('<div class="fs-incident-badge-field fs-incident-badge-field--small"><img class="fs-incident-badge-field__icon" src="' + INCIDENT_ICONS.goal + '" alt="Goal"></div>');
        }
        if (data.yellowCard) {
            parts.push('<div class="fs-incident-badge-field fs-incident-badge-field--small"><img class="fs-incident-badge-field__icon" src="' + INCIDENT_ICONS.yellow + '" alt="Yellow card"></div>');
        }
        if (data.substitutionIn) {
            parts.push('<div class="fs-incident-badge-field fs-incident-badge-field--small fs-incident-badge-field--sub-in"><img class="fs-incident-badge-field__icon" src="' + INCIDENT_ICONS.subIn + '" alt="Substitution in"></div>');
        }
        if (data.substitutionOut) {
            parts.push('<div class="fs-incident-badge-field fs-incident-badge-field--small fs-incident-badge-field--sub-out"><img class="fs-incident-badge-field__icon" src="' + INCIDENT_ICONS.subOut + '" alt="Substitution out"></div>');
        }
        if (parts.length === 0) return '';
        return '<div class="fs-incident-badge-field-row fs-incident-badge-field-row--vertical fs-incident-badge-field-row--small fs-incident-badge-field-row--bottom">' + parts.join('') + '</div>';
    }

    function applyLineupMatchData() {
        if (typeof lineupMatchData === 'undefined') return;
        var participants = document.querySelectorAll('.fs-lineups-participant-pitch');
        participants.forEach(function (el) {
            var playerId = (el.getAttribute('data-player-id') || '').trim();
            var team = el.closest('.fs-widget-lineups-field__team--home') ? 'home' : (el.closest('.fs-widget-lineups-field__team--away') ? 'away' : null);
            var shirtNumber = (el.getAttribute('data-shirt-number') || '').trim();
            if (!shirtNumber && el.querySelector('.fs-lineups-participant-pitch__number')) {
                shirtNumber = el.querySelector('.fs-lineups-participant-pitch__number').textContent.trim();
            }
            var key = playerId || (team && shirtNumber ? team + '-' + shirtNumber : null);
            var data = key ? lineupMatchData[key] : null;
            if (!data) return;

            var ratingEl = el.querySelector('.fs-lineups-participant-pitch__rating .fs-badge-rating');
            if (ratingEl) {
                var textEl = ratingEl.querySelector('.fs-badge-rating__text');
                if (textEl) textEl.textContent = data.rating != null ? Number(data.rating).toFixed(1) : '–';
                ratingEl.className = 'fs-badge-rating fs-badge-rating--small ' + getRatingClass(data.rating);
            }

            var incidentsContainer = el.querySelector('.fs-lineups-participant-pitch__incidents');
            if (incidentsContainer) {
                incidentsContainer.innerHTML = buildIncidentsHtml(data);
            }
        });
    }

    function init() {
        applyLineupMatchData();

        // Lineup participants → player card (overlay nad lineups s backdropem)
        var overlay = document.getElementById('player-card-overlay');
        var iframe = document.getElementById('player-card-iframe');
        var backdrop = document.getElementById('player-card-backdrop');

        function openPlayerCard(playerId) {
            if (!overlay || !iframe) return;
            var baseUrl = (typeof PLAYER_CARD_URL !== 'undefined') ? PLAYER_CARD_URL : 'Dialog_PlayerCard_Prototype.html';
            iframe.src = baseUrl + '?playerId=' + encodeURIComponent(playerId);
            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('player-card-overlay-open');
        }
        function closePlayerCard() {
            if (!overlay || !iframe) return;
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('player-card-overlay-open');
            iframe.src = '';
        }
        if (backdrop) backdrop.addEventListener('click', closePlayerCard);
        window.addEventListener('message', function (e) {
            if (e.data === 'closePlayerCard') closePlayerCard();
        });

        var participants = document.querySelectorAll('.fs-lineups-participant-pitch[data-player-id]');
        participants.forEach(function (el) {
            var playerId = (el.getAttribute('data-player-id') || '').trim();
            if (!playerId) return;
            el.style.cursor = 'pointer';
            el.setAttribute('role', 'button');
            el.setAttribute('tabindex', '0');
            el.setAttribute('aria-label', 'View player stats');
            el.addEventListener('click', function () {
                openPlayerCard(playerId);
            });
            el.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openPlayerCard(playerId);
                }
            });
        });

        // Sub-nav: šipka More otevře/zavře roletku s dalšími sporty (bez scrollu v pruhu)
        var moreBtn = document.querySelector('.nav-sub-mobile__more');
        var dropdown = document.getElementById('nav-sub-mobile-dropdown');
        if (moreBtn && dropdown) {
            moreBtn.setAttribute('aria-label', 'Show more sports');
            moreBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                var isOpen = dropdown.classList.toggle('is-open');
                moreBtn.setAttribute('aria-expanded', isOpen);
            });
            dropdown.addEventListener('click', function (e) { e.stopPropagation(); });
            dropdown.querySelectorAll('.nav-sub-mobile__dropdown-item').forEach(function (item) {
                item.addEventListener('click', function () {
                    dropdown.classList.remove('is-open');
                    moreBtn.setAttribute('aria-expanded', 'false');
                });
            });
            document.addEventListener('click', function () {
                dropdown.classList.remove('is-open');
                moreBtn.setAttribute('aria-expanded', 'false');
            });
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
