// Latest Updates Data
const updatesData = [
    {
        date: "April 13, 2026",
        title: "Quick Update on my ife",
        content: "Hi everyone I have been really busy lately, I've had to make last-minute travel plans for this weekend due to a family emergency, so I won't be in the country for the next two to three weeks. I'm still gonna be active and working towards my goals since I'm bringing my laptop, but that's been what's been keeping up most of my time the last two weeks. Also, I've been dealing with a little bit of health problems, specifically my sciatic nerve, due to an injury I recently had. And apart from that, I've just been busy with college and applying to roles online as well. But I have been beginning to feel better, and since most of the planning and the getting ready for the flight this weekend is almost done, I now will have more time to invest in my projects as well as my professional site, or in other words, where you're reading this right now lol. So thank you to who ever is reading this haha,  and keeping up with my life :D . ",
        tags: ["Life Update"]
    },
    {
        date: "February 1, 2026",
        title: "Starting My Master's in Data Science Journey",
        content: "Officially began my Master of Science in Data Science at CUNY SPS—a program ranked #1 by Tech Guide and consistently recognized by Fortune magazine as one of the nation's top data science programs. This spring semester, I'm diving into DATA 606 (Probability and Statistics for Data Analytics) and DATA 602 (Advanced Programming Techniques). The curriculum focuses on hands-on programming with R and Python, building predictive models, and working on real-world industry projects—exactly the practical skills I'm looking to master. The program's emphasis on current best practices and project-based learning aligns perfectly with my goal of becoming a well-rounded data scientist.",
        tags: ["graduate school", "data science", "CUNY SPS", "milestone"]
    },
    {
        date: "January 5, 2026",
        title: "Completed My Bachelor's in Computer Science",
        content: "Just wrapped up my Bachelor's degree in Computer Science from Queens College, CUNY. The journey was incredible—I gained solid foundations in web development, database systems, algorithms, and software engineering. My first data science internship in summer 2024 sparked a deep interest in the field, which led me to take data science electives that further fueled my passion. This ultimately opened doors to a second data science internship and solidified my decision to pursue a master's degree in the field. From building full-stack applications to optimizing database queries, every project taught me something valuable. Grateful for the skills I've developed and excited to take them to the next level.",
        tags: ["graduation", "computer science", "achievement"]
    }
];

// Render updates to the page
function renderUpdates() {
    const container = document.querySelector('.updates-scroll-container');
    if (!container) return;

    container.innerHTML = updatesData.map(update => `
        <div class="update-item">
            <div class="update-date">${update.date}</div>
            <h3>${update.title}</h3>
            <p>${update.content}</p>
            <div class="update-tags">
                ${update.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Auto-render on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderUpdates);
} else {
    renderUpdates();
}
