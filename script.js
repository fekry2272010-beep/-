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
// 5. دالة البحث الشامل الفعالة لجميع محتويات الموقع
// ==========================================
function globalSearch() {
    let input = document.getElementById('globalSearchInput').value.toLowerCase().trim();
    
    if (input.length > 0) {
        // إظهار جميع الأقسام عند بدء البحث لتشمل النتائج كل الموقع
        const sections = document.querySelectorAll('.content > section');
        sections.forEach(sec => sec.style.display = 'block');
    } else {
        // عند مسح البحث، نعود لعرض قسم الرئيسية الافتراضي
        showSection('home', document.querySelector('nav.main-nav button'));
        return;
    }

    // البحث الفوري في الفيديوهات، الملازم، بطاقات الرئيسية، وجداول الامتحانات
    let searchableItems = document.querySelectorAll('.video-card, .pdf-card, .features .card, tbody tr, .manager-showcase-card');

    searchableItems.forEach(item => {
        let textContent = item.textContent.toLowerCase();
        if (textContent.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
