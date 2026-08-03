// ==========================================
// 1. التنقل بين أقسام الموقع الرئيسية (الرئيسية / الفيديوهات / الامتحانات)
// ==========================================
function showSection(sectionId, buttonElement) {
    // إخفاء جميع الأقسام الرئيسية
    const sections = document.querySelectorAll('.content > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // إزالة تفعيل النيون عن جميع أزرار القائمة الرئيسية
    const navButtons = document.querySelectorAll('nav.main-nav button');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // إظهار القسم المطلوب وتفعيل زره
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    if (buttonElement) {
        buttonElement.classList.add('active');
    }
}

// ==========================================
// 2. التنقل بين أزرار الفيديوهات الفرعية (الصف الأول / الصف الثاني / المواد الإضافية)
// ==========================================
function filterGrade(gradeId, buttonElement) {
    // إخفاء جميع شبكات ومجموعات الفيديوهات الرئيسية
    const videoGrids = document.querySelectorAll('.videos-grid:not(.track-grid), .videos-grid-container');
    videoGrids.forEach(grid => {
        grid.style.display = 'none';
    });

    // إزالة تفعيل النيون عن أزرار الصفوف الفرعية
    const subButtons = document.querySelectorAll('.sub-nav button');
    subButtons.forEach(btn => {
        btn.classList.remove('active-sub');
    });

    // إظهار القسم المختار
    const targetGrid = document.getElementById(gradeId);
    if (targetGrid) {
        if (gradeId === 'grade2-extra-videos') {
            targetGrid.style.display = 'block'; // الحاوية الرئيسية للمسارات
        } else {
            targetGrid.style.display = 'grid'; // الشبكة المعتادة للصفين الأول والثاني
        }
    }

    if (buttonElement) {
        buttonElement.classList.add('active-sub');
    }
}

// ==========================================
// 3. التنقل بين مسارات المواد الإضافية (طب / هندسة / أعمال / آداب)
// ==========================================
function filterTrack(trackId, buttonElement) {
    // إخفاء كافة شبكات المسارات
    const trackGrids = document.querySelectorAll('.track-grid');
    trackGrids.forEach(grid => {
        grid.style.display = 'none';
    });

    // إزالة تفعيل المسار عن الأزرار
    const trackButtons = document.querySelectorAll('.tracks-nav button');
    trackButtons.forEach(btn => {
        btn.classList.remove('active-track');
    });

    // إظهار المسار المطلوب وتفعيل زره
    const targetTrack = document.getElementById(trackId);
    if (targetTrack) {
        targetTrack.style.display = 'grid';
    }

    if (buttonElement) {
        buttonElement.classList.add('active-track');
    }
}
