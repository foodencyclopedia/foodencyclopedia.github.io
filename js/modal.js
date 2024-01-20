document.addEventListener('DOMContentLoaded', function () {
    // 检查公告栏是否在之前被关闭过
    if (localStorage.getItem('modalClosed') !== 'true') {
        // 显示模态框
        var modalContainer = document.getElementById('modalContainer');
        modalContainer.style.display = 'block';

        // 点击关闭按钮时关闭公告栏
        var closeBtn = document.getElementById('closeBtn');
        closeBtn.addEventListener('click', function () {
            modalContainer.style.display = 'none';
            // 在本地存储中设置一个标志，以记住公告栏已被关闭
            localStorage.setItem('modalClosed', 'true');
        });

        // 点击公告栏内容外的区域时关闭公告栏
        window.addEventListener('click', function (event) {
            if (event.target == modalContainer) {
                modalContainer.style.display = 'none';
                localStorage.setItem('modalClosed', 'true');
            }
        });
    }
});
