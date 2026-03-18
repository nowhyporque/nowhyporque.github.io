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

    // Simple smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

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

// Legal Window Controls
const copyrightBtn = document.getElementById('copyrightBtn');
const legalWindow = document.getElementById('legalWindow');
const legalOverlay = document.getElementById('legalOverlay');
const legalCloseBtn = document.getElementById('legalCloseBtn');

function openLegalWindow() {
    legalWindow.classList.add('active');
    legalOverlay.classList.add('active');
}

function closeLegalWindow() {
    legalWindow.classList.remove('active');
    legalOverlay.classList.remove('active');
}

function toggleLegalWindow() {
    if (legalWindow.classList.contains('active')) {
        closeLegalWindow();
    } else {
        openLegalWindow();
    }
}

if (copyrightBtn) {
    copyrightBtn.addEventListener('click', toggleLegalWindow);
}
if (legalCloseBtn) {
    legalCloseBtn.addEventListener('click', closeLegalWindow);
}
if (legalOverlay) {
    legalOverlay.addEventListener('click', closeLegalWindow);
}
