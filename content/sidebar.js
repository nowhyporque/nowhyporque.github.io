// Sidebar Data: Song of the Week, Reading Now, Current Focus

const sidebarData = {
    songOfWeek: {
        dateRange: "Mar 16 - Mar 22",
        title: "LIBERATION - Outkast",
        youtubeId: "iIreOrdYvLM",
        playlistLink: "https://youtube.com/playlist?list=PLJw14LNEtZV16eHchf7bT0-V377BwJYm5&si=zArQEk5qjaQOylYG"
    },
    
    readingNow: {
        title: "IT",
        author: "Stephen King",
        coverUrl: "https://covers.openlibrary.org/b/id/15140681-M.jpg",
        currentPage: 76,
        bookLink: "https://openlibrary.org/works/OL81613W/It?edition=key%3A/books/OL7572658M"
    },
    
    currentFocus: [
        {
            label: "Currently",
            text: "Focusing on earning my Master's in Data Science and developing my projects"
        },
        {
            label: "Seeking",
            text: "Full-time position or internship opportunities in data science—open to start at any date"
        },
        {
            label: "Living By",
            text: '"The formula for success for one will lead to the self-destruction of another." — Jim Rohn'
        }
    ]
};

// Render Song of the Week
function renderSongOfWeek() {
    const container = document.getElementById('songOfWeekContainer');
    if (!container) return;

    container.innerHTML = `
        <p class="week-range">${sidebarData.songOfWeek.dateRange}</p>
        <div class="youtube-container">
            <iframe 
                width="100%" 
                height="200" 
                src="https://www.youtube.com/embed/${sidebarData.songOfWeek.youtubeId}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
        <p class="song-title">${sidebarData.songOfWeek.title}</p>
        <a href="${sidebarData.songOfWeek.playlistLink}" target="_blank" class="previous-songs-btn">View Previous Songs →</a>
    `;
}

// Render Reading Now
function renderReadingNow() {
    const container = document.getElementById('readingNowContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="book-container">
            <img src="${sidebarData.readingNow.coverUrl}" alt="${sidebarData.readingNow.title} by ${sidebarData.readingNow.author} book cover" class="book-cover">
            <div class="book-info">
                <p class="book-title"><em>${sidebarData.readingNow.title}</em> by ${sidebarData.readingNow.author}</p>
                <p class="book-progress">Page: <span class="page-number">${sidebarData.readingNow.currentPage}</span></p>
                <a href="${sidebarData.readingNow.bookLink}" target="_blank" class="book-link">View Book →</a>
            </div>
        </div>
    `;
}

// Render Current Focus
function renderCurrentFocus() {
    const container = document.getElementById('currentFocusContainer');
    if (!container) return;

    container.innerHTML = sidebarData.currentFocus.map(item => `
        <div class="focus-item">
            <strong>${item.label}</strong>
            <p>${item.text}</p>
        </div>
    `).join('');
}

// Auto-render all sidebar content on page load
function renderSidebar() {
    renderSongOfWeek();
    renderReadingNow();
    renderCurrentFocus();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSidebar);
} else {
    renderSidebar();
}
