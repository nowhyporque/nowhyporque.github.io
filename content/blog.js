// Blog Posts Data
const blogPosts = [
    {
        date: "March 19, 2026",
        time: "4:07 PM",
        title: "First YouTube Video for Project 4SeamMetrics",
        content: "Hey everyone, this is my first video. I'm really excited to work on this project. I'm excited to share my progress and know what I've been up to. If you have any suggestions or comments, feel free to comment on the video or email me personally, or even text me. My phone number is on my resume if you can find that. Haha.",
        youtubeId: "ZC2ZVLARm3M", // YouTube video ID extracted from the URL
        imageUrl: null,
        projectTags: ["4seammetrics"], // Links to 4seammetrics project page
        type: "video"
    },
    // Add more blog posts here - newest first!
];

// Render blog posts to homepage preview
function renderBlogPreview() {
    const container = document.getElementById('blogPreviewContainer');
    if (!container) return;

    // Show only the 3 most recent posts
    const recentPosts = blogPosts.slice(0, 3);

    container.innerHTML = recentPosts.map(post => `
        <div class="blog-preview-item">
            <div class="blog-date">${post.date} - ${post.time}</div>
            <h3>${post.title}</h3>
            <p>${post.content.substring(0, 150)}${post.content.length > 150 ? '...' : ''}</p>
            
            ${post.youtubeId ? `
                <div class="blog-youtube-embed">
                    <iframe 
                        width="100%" 
                        height="400" 
                        src="https://www.youtube.com/embed/${post.youtubeId}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            ` : ''}
            
            ${post.imageUrl ? `
                <div class="blog-image">
                    <img src="${post.imageUrl}" alt="${post.title}">
                </div>
            ` : ''}
            
            ${post.projectTags.length > 0 ? `
                <div class="blog-tags">
                    ${post.projectTags.map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // Add scroll detection for blog preview (same as updates section)
    setTimeout(() => {
        const scrollContainer = document.querySelector('.blog-preview-scroll-container');
        const blogSection = document.querySelector('.blog-preview-section');
        
        if (scrollContainer && blogSection) {
            scrollContainer.addEventListener('scroll', function() {
                const scrollTop = scrollContainer.scrollTop;
                const scrollHeight = scrollContainer.scrollHeight;
                const clientHeight = scrollContainer.clientHeight;
                
                if (scrollTop + clientHeight >= scrollHeight - 5) {
                    blogSection.classList.add('scrolled-to-bottom');
                } else {
                    blogSection.classList.remove('scrolled-to-bottom');
                }
            });
        }
    }, 100);
}

// Render full blog page
function renderFullBlog() {
    const container = document.getElementById('fullBlogContainer');
    if (!container) return;

    container.innerHTML = blogPosts.map(post => `
        <div class="blog-post">
            <div class="blog-post-date">${post.date} - ${post.time}</div>
            <h2 class="blog-post-title">${post.title}</h2>
            <div class="blog-post-content">
                <p>${post.content}</p>
                
                ${post.youtubeId ? `
                    <div class="blog-youtube-embed">
                        <iframe 
                            width="100%" 
                            height="400" 
                            src="https://www.youtube.com/embed/${post.youtubeId}" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>
                ` : ''}
                
                ${post.imageUrl ? `
                    <div class="blog-image">
                        <img src="${post.imageUrl}" alt="${post.title}">
                    </div>
                ` : ''}
            </div>
            
            ${post.projectTags.length > 0 ? `
                <div class="blog-post-tags">
                    ${post.projectTags.map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Render project-specific blog posts
function renderProjectBlog(projectSlug) {
    const container = document.getElementById('projectBlogContainer');
    if (!container) return;

    const projectPosts = blogPosts.filter(post => 
        post.projectTags.includes(projectSlug)
    );

    if (projectPosts.length === 0) {
        container.innerHTML = '<p style="color: #b1bac4; font-family: DotGothic16; text-align: center;">No blog posts yet for this project.</p>';
        return;
    }

    container.innerHTML = projectPosts.map(post => `
        <div class="project-blog-item">
            <div class="blog-date">${post.date} - ${post.time}</div>
            <h4>${post.title}</h4>
            <p>${post.content}</p>
            
            ${post.youtubeId ? `
                <div class="blog-youtube-embed">
                    <iframe 
                        width="100%" 
                        height="400" 
                        src="https://www.youtube.com/embed/${post.youtubeId}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
                </div>
            ` : ''}
            
            ${post.imageUrl ? `
                <div class="blog-image">
                    <img src="${post.imageUrl}" alt="${post.title}">
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Auto-render on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        renderBlogPreview();
        renderFullBlog();
    });
} else {
    renderBlogPreview();
    renderFullBlog();
}