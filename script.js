// التنقل بين الأقسام الرئيسية
function showSection(sectionId, btnElement) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('exams').style.display = 'none';

    // إلغاء تفعيل كافة الأزرار الرئيسية
    const mainNavButtons = document.querySelectorAll('nav.main-nav button');
    mainNavButtons.forEach(btn => btn.classList.remove('active'));

    // إظهار القسم المطلوب وتفعيل الزر
    document.getElementById(sectionId).style.display = 'block';
    btnElement.classList.add('active');
}

// التبديل بين صفوف الفيديوهات (الأول والثاني الثانوي فقط)
function filterGrade(gradeId, btnElement) {
    document.getElementById('grade1-videos').style.display = 'none';
    document.getElementById('grade2-videos').style.display = 'none';

    // إلغاء تفعيل أزرار التنقل الفرعية
    const subNavButtons = document.querySelectorAll('.sub-nav button');
    subNavButtons.forEach(btn => btn.classList.remove('active-sub'));

    // إظهار الصف المختار
    document.getElementById(gradeId).style.display = 'grid';
    btnElement.classList.add('active-sub');
}
