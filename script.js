// ==========================================
// 1. التنقل بين أقسام الموقع الرئيسية
// ==========================================
function showSection(sectionId, buttonElement) {
    const sections = document.querySelectorAll('.content > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const navButtons = document.querySelectorAll('nav.main-nav button');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}

// ==========================================
// 2. التنقل بين أزرار الفيديوهات الفرعية
// ==========================================
function filterGrade(gradeId, buttonElement) {
    const videoGrids = document.querySelectorAll('.videos-grid:not(.track-grid), .videos-grid-container');
    videoGrids.forEach(grid => {
        grid.style.display = 'none';
    });

    const subButtons = document.querySelectorAll('.sub-nav button');
    subButtons.forEach(btn => {
        btn.classList.remove('active-sub');
    });

    const targetGrid = document.getElementById(gradeId);
    if (targetGrid) {
        if (gradeId === 'grade2-extra-videos') {
            targetGrid.style.display = 'block';
        } else {
            targetGrid.style.display = 'grid';
        }
    }

    if (buttonElement) {
        buttonElement.classList.add('active-sub');
    }
}

// ==========================================
// 3. التنقل بين مسارات المواد الإضافية
// ==========================================
function filterTrack(trackId, buttonElement) {
    const trackGrids = document.querySelectorAll('.track-grid');
    trackGrids.forEach(grid => {
        grid.style.display = 'none';
    });

    const trackButtons = document.querySelectorAll('.tracks-nav button');
    trackButtons.forEach(btn => {
        btn.classList.remove('active-track');
    });

    const targetTrack = document.getElementById(trackId);
    if (targetTrack) {
        targetTrack.style.display = 'grid';
    }

    if (buttonElement) {
        buttonElement.classList.add('active-track');
    }
}

// ==========================================
// 4. دالة الوضع الليلي والنهاري (Dark / Light Mode)
// ==========================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// ==========================================
// 5. دالة البحث السريع المحدثة (تعمل عبر كافة الأقسام)
// ==========================================
function searchVideos() {
    let input = document.getElementById('videoSearchInput').value.toLowerCase().trim();
    let videoCards = document.querySelectorAll('#videos .video-card');

    videoCards.forEach(card => {
        let title = card.querySelector('h3').textContent.toLowerCase();
        let desc = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || desc.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
