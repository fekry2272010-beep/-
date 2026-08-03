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
    // إخفاء جميع شبكات الفيديوهات
    const videoGrids = document.querySelectorAll('.videos-grid');
    videoGrids.forEach(grid => {
        grid.style.display = 'none';
    });

    // إزالة تفعيل النيون عن أزرار الصفوف الفرعية
    const subButtons = document.querySelectorAll('.sub-nav button');
    subButtons.forEach(btn => {
        btn.classList.remove('active-sub');
    });

    // إظهار شبكة الفيديوهات المطلوبة وتفعيل زرها
    const targetGrid = document.getElementById(gradeId);
    if (targetGrid) {
        targetGrid.style.display = 'grid';
    }

    if (buttonElement) {
        buttonElement.classList.add('active-sub');
    }
}
