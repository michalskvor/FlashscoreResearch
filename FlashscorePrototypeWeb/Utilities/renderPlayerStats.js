/**
 * Player Stats Table Renderer
 * Dynamically populates FSWidgetPlayerStatsTable with player data
 */

// Helper function to format pass accuracy
function formatPassAccuracy(accurate, total) {
    if (!accurate || !total) return '–';
    const percentage = Math.round((accurate / total) * 100);
    return `${accurate}/${total} (${percentage}%)`;
}

// Helper function to format dribbles
function formatDribbles(won, total) {
    if (won === null || total === null || total === 0) return '–';
    const percentage = Math.round((won / total) * 100);
    return `${won}/${total} (${percentage}%)`;
}

// Helper function to format value (null becomes "–")
function formatValue(value) {
    return value !== null && value !== undefined ? value : '–';
}

// Helper function to get rating badge class
function getRatingBadgeClass(rating, isMaxRating) {
    if (isMaxRating) return 'fs-badge-rating--best';
    if (rating >= 8.0) return 'fs-badge-rating--a';
    if (rating >= 7.0) return 'fs-badge-rating--b';
    if (rating >= 6.5) return 'fs-badge-rating--c';
    if (rating >= 6.0) return 'fs-badge-rating--d';
    return 'fs-badge-rating--f';
}

// Generate sticky column for a single player row
function createPlayerSticky(player) {
    return `
        <div class="fs-player-stats-player-cell">
            <div class="fs-player-stats-player-cell__player-container">
                <div class="fs-asset-boxed fs-asset-boxed--32px fs-asset-boxed--player">
                    <img class="fs-asset-boxed__image fs-asset-boxed__image--player"
                         src="${player.playerPhoto}" alt="${player.name}">
                </div>
                <div class="fs-player-stats-player-cell__team-container">
                    <div class="fs-asset-boxed fs-asset-boxed--18px fs-asset-boxed--asset">
                        <img class="fs-asset-boxed__image fs-asset-boxed__image--asset"
                             src="${player.teamLogo}" alt="${player.team}">
                    </div>
                </div>
            </div>
            <div class="fs-player-stats-player-cell__text-container">
                <span class="fs-player-stats-player-cell__name">${player.name}</span>
                <span class="fs-player-stats-player-cell__position">${player.position}</span>
            </div>
        </div>
    `;
}

// Generate data cells for a single player row
function createPlayerData(player, isMaxRating) {
    const stats = player.stats;
    const ratingClass = getRatingBadgeClass(stats.rating, isMaxRating);
    const passAccuracy = formatPassAccuracy(stats.passesAccurate, stats.passesTotal);
    const dribblesSuccess = formatDribbles(stats.dribblesWon, stats.dribblesTotal);

    return `
        <div class="fs-widget-player-stats-table__row-data">
            <div class="fs-widget-player-stats-table__data-cell fs-widget-player-stats-table__data-cell--sorted">
                <div class="fs-badge-rating ${ratingClass}">
                    <span class="fs-badge-rating__text">${stats.rating.toFixed(1)}</span>
                    ${isMaxRating ? '<img src="Assets/Icons/Other/Rating Star.svg" alt="" class="fs-badge-rating__icon">' : ''}
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${formatValue(stats.shotsTotal)}</span>
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${formatValue(stats.expectedGoals?.toFixed(2))}</span>
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <div class="fs-table-shared-value__text-container">
                        <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${passAccuracy}</span>
                    </div>
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${formatValue(stats.touchesTotal)}</span>
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <div class="fs-table-shared-value__text-container">
                        <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${formatValue(stats.touchesBoxOpposite)}</span>
                    </div>
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <div class="fs-table-shared-value__text-container">
                        <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${dribblesSuccess}</span>
                    </div>
                </div>
            </div>
            <div class="fs-widget-player-stats-table__data-cell">
                <div class="fs-table-shared-value fs-table-shared-value--highlight fs-table-shared-value--primary">
                    <div class="fs-table-shared-value__text-container">
                        <span class="fs-table-shared-value__text fs-table-shared-value__text--regular">${formatValue(stats.duelsTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fs-divider fs-divider--horizontal fs-divider--primary"></div>
    `;
}

// Main render function
function renderPlayerStatsTable() {
    // Check if data files are loaded
    if (typeof manchesterCityPlayers === 'undefined' || typeof fulhamPlayers === 'undefined') {
        console.error('Player data files not loaded. Make sure to include manchesterCityPlayerStats.js and fulhamPlayerStats.js');
        return;
    }

    // Combine and sort players by rating (descending)
    const allPlayers = [...manchesterCityPlayers, ...fulhamPlayers];
    allPlayers.sort((a, b) => b.stats.rating - a.stats.rating);

    // Find the maximum rating (for the best badge)
    const maxRating = Math.max(...allPlayers.map(p => p.stats.rating));

    // Find the table body container
    const tableBody = document.querySelector('.fs-widget-player-stats-table__tab-content--active .fs-widget-player-stats-table__body');

    if (!tableBody) {
        console.error('Table body container not found');
        return;
    }

    // Clear existing content
    tableBody.innerHTML = '';

    // Build sticky column (all player names)
    let stickyHTML = '<div class="fs-widget-player-stats-table__body-sticky">';
    allPlayers.forEach(player => {
        stickyHTML += `
            <div class="fs-widget-player-stats-table__row-sticky">
                ${createPlayerSticky(player)}
            </div>
        `;
    });
    stickyHTML += '</div>';

    // Build scroll container (all player data)
    let scrollHTML = '<div class="fs-widget-player-stats-table__body-scroll-container">';
    allPlayers.forEach(player => {
        const isMaxRating = player.stats.rating === maxRating;
        scrollHTML += createPlayerData(player, isMaxRating);
    });
    scrollHTML += '</div>';

    // Insert both columns
    tableBody.innerHTML = stickyHTML + scrollHTML;

    console.log(`✅ Rendered ${allPlayers.length} players successfully!`);

    // Setup scroll synchronization
    setupScrollSync();
}

// Setup scroll synchronization between header and body
function setupScrollSync() {
    const headerScroll = document.querySelector('.fs-widget-player-stats-table__header-scroll-container');
    const bodyScroll = document.querySelector('.fs-widget-player-stats-table__body-scroll-container');
    const table = document.querySelector('.fs-widget-player-stats-table');

    if (!headerScroll || !bodyScroll || !table) return;

    // Sync header -> body
    headerScroll.addEventListener('scroll', () => {
        bodyScroll.scrollLeft = headerScroll.scrollLeft;

        // Add shadow when scrolled
        if (headerScroll.scrollLeft > 0) {
            table.classList.add('fs-widget-player-stats-table--scrolled');
        } else {
            table.classList.remove('fs-widget-player-stats-table--scrolled');
        }
    });

    // Sync body -> header
    bodyScroll.addEventListener('scroll', () => {
        headerScroll.scrollLeft = bodyScroll.scrollLeft;

        // Add shadow when scrolled
        if (bodyScroll.scrollLeft > 0) {
            table.classList.add('fs-widget-player-stats-table--scrolled');
        } else {
            table.classList.remove('fs-widget-player-stats-table--scrolled');
        }
    });
}

// Auto-render when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderPlayerStatsTable);
} else {
    // DOM is already loaded
    renderPlayerStatsTable();
}
