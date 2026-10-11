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
// 5. دالة البحث الحي اللحظي (زي جهات الاتصال)
// ==========================================
function globalSearch() {
    let input = document.getElementById('globalSearchInput').value.toLowerCase().trim();
    let sections = document.querySelectorAll('.content > section');

    // إذا تم إفراغ خانة البحث نعود للوضع الطبيعي
    if (input === "") {
        sections.forEach(sec => sec.style.display = 'none');
        document.getElementById('home').style.display = 'block';
        
        // إعادة إظهار كل العناصر بحالتها الافتراضية
        document.querySelectorAll('.video-card, .pdf-card, .card, tbody tr, .videos-grid, .track-grid').forEach(el => {
            el.style.display = "";
        });
        return;
    }

    // إظهار كافة الأقسام للفلترة الفورية
    sections.forEach(sec => sec.style.display = 'block');
    document.querySelectorAll('.videos-grid, .videos-grid-container, .track-grid').forEach(grid => {
        grid.style.display = 'grid';
    });

    // فلترة حية وحظية لكل كارت أو نص يحتوي على الحرف المكتوب
    let items = document.querySelectorAll('.video-card, .pdf-card, .features .card, tbody tr, .manager-showcase-card');

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.style.display = ""; // إظهار العناصر المطابقة للحرف
        } else {
            item.style.display = "none"; // إخفاء العناصر غير المطابقة
        }
    });
}
