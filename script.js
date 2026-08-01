// التبديل بين أقسام الموقع الرئيسية
function showSection(sectionId, btnElement) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('exams').style.display = 'none';

    // إعادة ضبط الأزرار النشطة في النافبار الرئيسي
    const mainNavButtons = document.querySelectorAll('nav.main-nav button');
    mainNavButtons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(sectionId).style.display = 'block';
    btnElement.classList.add('active');
}

// التبديل بين صفوف الفيديوهات (الأول الثانوي / الثاني الثانوي)
function filterGrade(gradeId, btnElement) {
    document.getElementById('grade1-videos').style.display = 'none';
    document.getElementById('grade2-videos').style.display = 'none';

    // إعادة ضبط الأزرار النشطة في النافبار الفرعي للفيديوهات
    const subNavButtons = document.querySelectorAll('.sub-nav button');
    subNavButtons.forEach(btn => btn.classList.remove('active-sub'));

    document.getElementById(gradeId).style.display = 'grid';
    btnElement.classList.add('active-sub');
}
