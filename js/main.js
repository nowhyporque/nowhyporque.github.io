// NYC Time Clock
function updateNYCTime() {
    const now = new Date();
    const nycTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const hours = nycTime.getHours().toString().padStart(2, '0');
    const minutes = nycTime.getMinutes().toString().padStart(2, '0');
    const seconds = nycTime.getSeconds().toString().padStart(2, '0');
    document.getElementById('nycTime').textContent = `NYC ${hours}:${minutes}:${seconds}`;
}

// Start clock on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNYCTime();
    setInterval(updateNYCTime, 1000);

    // Smooth scrolling with 25px offset for anchor links ON THIS PAGE
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            
            // Only handle scroll if target exists on current page
            if (target) {
                e.preventDefault();
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - 25; // 25px space from top

                // Always smooth scroll when target exists
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            // If target doesn't exist, let browser navigate normally
        });
    });

    // Handle landing on page with hash anchor (instant, no stutter)
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - 25; // 25px space from top
            
            // Instant scroll - no delay, no animation
            window.scrollTo({
                top: offsetPosition,
                behavior: 'auto'
            });
        }
    }

    // Updates scroll detection
    const updatesContainer = document.querySelector('.updates-scroll-container');
    const updatesSection = document.querySelector('.updates-section');

    if (updatesContainer && updatesSection) {
        updatesContainer.addEventListener('scroll', function() {
            const scrollTop = this.scrollTop;
            const scrollHeight = this.scrollHeight;
            const clientHeight = this.clientHeight;
            
            if (scrollTop + clientHeight >= scrollHeight - 10) {
                updatesSection.classList.add('scrolled-to-bottom');
            } else {
                updatesSection.classList.remove('scrolled-to-bottom');
            }
        });
        
        updatesSection.addEventListener('click', function(e) {
            const rect = updatesSection.getBoundingClientRect();
            const clickY = e.clientY - rect.top;
            const sectionHeight = rect.height;
            
            if (clickY > sectionHeight - 30) {
                updatesContainer.scrollTo({
                    top: updatesContainer.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
        
        updatesContainer.dispatchEvent(new Event('scroll'));
    }
});