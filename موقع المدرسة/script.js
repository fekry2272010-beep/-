// دالة للتبديل بين الأقسام المختلفة
function showSection(sectionId) {
    // إخفاء جميع الأقسام أولاً
    document.getElementById('home').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('exams').style.display = 'none';

    // إظهار القسم المطلوب فقط
    document.getElementById(sectionId).style.display = 'block';
}