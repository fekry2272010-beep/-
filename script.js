// دالة للتبديل بين الأقسام الرئيسية
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    document.getElementById('home').style.display = 'none';
    document.getElementById('videos').style.display = 'none';
    document.getElementById('exams').style.display = 'none';

    // إظهار القسم المطلوب
    document.getElementById(sectionId).style.display = 'block';

    // التحكم في ظهور الشريط الجانبي المخصص للفيديوهات فقط
    const videoSidebar = document.getElementById('videoSidebar');
    if (sectionId === 'videos') {
        videoSidebar.style.display = 'flex';
    } else {
        videoSidebar.style.display = 'none';
    }
}

// دالة التمرير السريع لإحدى مجموعات الفيديوهات
function scrollToVideo(videoId) {
    const element = document.getElementById(videoId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
