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
// 4. دالة الوضع الليلي والنهاري
// ==========================================
function toggleDarkMode() {
    const toggleInput = document.getElementById('darkModeToggle');
    if (toggleInput && toggleInput.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const toggleInput = document.getElementById('darkModeToggle');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggleInput) toggleInput.checked = true;
    }
});

// ==========================================
// 5. فتح وإغلاق واجهة صفحة البحث (Search Overlay)
// ==========================================
function openSearchPage() {
    const overlay = document.getElementById('searchPageOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        const input = document.getElementById('overlaySearchInput');
        if (input) input.focus();
    }
}

function closeSearchPage() {
    const overlay = document.getElementById('searchPageOverlay');
    if (overlay) overlay.style.display = 'none';
}

function clearSearchInput() {
    const input = document.getElementById('overlaySearchInput');
    if (input) {
        input.value = '';
        liveSearchProcess();
    }
}

// ==========================================
// 6. دالة البحث اللحظي والانتقال الدقيق للعنصر
// ==========================================
function liveSearchProcess() {
    const inputElem = document.getElementById('overlaySearchInput');
    if (!inputElem) return;

    let input = inputElem.value.toLowerCase().trim();
    let resultsContainer = document.getElementById('searchResultsList');
    if (!resultsContainer) return;

    resultsContainer.innerHTML = '';

    if (input === '') {
        resultsContainer.innerHTML = '<p style="text-align: center; color: #777; margin-top: 40px;">اكتب أول حرف لبدء البحث الفوري...</p>';
        return;
    }

    let itemsToSearch = document.querySelectorAll('.video-card, .pdf-card, .manager-showcase-card, tbody tr, .card');
    let matchCount = 0;

    itemsToSearch.forEach((item, index) => {
        if (!item.id) {
            item.id = 'search-item-' + index;
        }

        let titleElem = item.querySelector('h3, .manager-name, td');
        let title = titleElem ? titleElem.textContent : item.textContent;
        let subtitleElem = item.querySelector('p');
        let subtitle = subtitleElem ? subtitleElem.textContent : '';

        if (title.toLowerCase().includes(input) || subtitle.toLowerCase().includes(input)) {
            matchCount++;
            let resultCard = document.createElement('div');
            resultCard.className = 'search-result-item';
            resultCard.innerHTML = `<h4>${title}</h4><p>${subtitle}</p>`;
            
            resultCard.onclick = () => {
                closeSearchPage();
                
                // إظهار القسم الرئيسي التابع له العنصر
                let parentSection = item.closest('section');
                if (parentSection) {
                    const sections = document.querySelectorAll('.content > section');
                    sections.forEach(sec => sec.style.display = 'none');
                    parentSection.style.display = 'block';

                    // تحديث زر القائمة النشطة
                    const navButtons
