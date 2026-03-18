// Projects Data
const projectsData = [
    {
        status: "Currently Researching",
        title: "4SeamMetrics",
        description: "Platform integrating baseball API's, LLM workflows, and custom statistical analysis across large structured datasets. Showcasing my evolving DS skillset and passion for baseball. Currently researching and evaluating APIs for implementation.",
        skills: ["Python", "APIs", "LLM", "Data Analysis", "Statistics"],
        links: {
            github: "https://github.com/nowhyporque/4SeamMetrics",
            demo: null
        },
        slug: "4seammetrics"
    },
    {
        status: "Active Development",
        title: "MISHI",
        description: "Full-stack React/Firebase web app with Google Maps API for stray cat tracking and fostering. Implemented role-based authentication, location pinning, resource sharing, and OAuth-enabled account management. Integrated secure Firestore rules. Continuously adding new features and improvements.",
        skills: ["React", "Firebase", "Google Maps API", "OAuth", "Firestore"],
        links: {
            github: "https://github.com/nowhyporque/mishi",
            demo: "https://drive.google.com/drive/folders/1JZfPnCouUJPcrgI3oAvu_pgUBVue3_J3"
        },
        slug: "mishi"
    },
    {
        status: "Completed",
        title: "Room On Fire",
        description: "Platform for Music, Fashion, Art, and Cinema topics using SQL database and web development skills. Implemented account creation and commenting systems. A comprehensive full-stack project showcasing database management and modern web design.",
        skills: ["SQL", "Database", "Web Development", "Full-Stack"],
        links: {
            github: "https://github.com/nowhyporque/Room-On-fire",
            demo: "https://drive.google.com/drive/folders/1a1UQ3nYrf67hTdhJyIcqEP9Z6Oq-JhFY"
        },
        slug: "room-on-fire"
    }
];

// Render projects to the page
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-status">${project.status}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="skills-cloud">
                ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.links.github}" target="_blank">GitHub</a>
                ${project.links.demo ? `<a href="${project.links.demo}" target="_blank">View Demo</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Auto-render on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
