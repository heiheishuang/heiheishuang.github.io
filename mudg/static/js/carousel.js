document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.mudg-carousel');
    const items = carousel.querySelectorAll('.mudg-carousel-item');
    let currentIndex = 0;
    let autoPlay = true;
    let interval = 5000;
    let intervalId;

    // 设置容器尺寸
    function updateContainerSize() {
        const activeVideo = carousel.querySelector('.is-active video');
        if (!activeVideo) return;

        // 获取视频原始比例
        const videoRatio = activeVideo.videoWidth / activeVideo.videoHeight;

        // 根据窗口宽度计算高度
        const containerWidth = carousel.offsetWidth;
        const calculatedHeight = containerWidth / videoRatio;

        // 应用动态高度
        carousel.style.height = `${Math.min(calculatedHeight, window.innerHeight * 0.8)}px`;
    }

    // 轮播切换函数
    function updateSlide(index) {
        items.forEach(item => item.classList.remove('is-active'));

        currentIndex = (index + items.length) % items.length;
        items[currentIndex].classList.add('is-active');

        // 更新容器尺寸
        const activeVideo = items[currentIndex].querySelector('video');
        activeVideo.currentTime = 0;
        activeVideo.play();
        activeVideo.addEventListener('loadedmetadata', updateContainerSize);
        if (activeVideo.readyState > 0) updateContainerSize();
    }

    // 自动播放
    function startAutoPlay() {
        if (autoPlay) {
            intervalId = setInterval(nextSlide, interval);
        }
    }

    startAutoPlay();

    // 事件绑定
    document.querySelector('.mudg-carousel-button.next').addEventListener('click', () => {
        updateSlide(currentIndex + 1);
    });

    document.querySelector('.mudg-carousel-button.prev').addEventListener('click', () => {
        updateSlide(currentIndex - 1);
    });

    function nextSlide() {
        updateSlide(currentIndex + 1);
    }

    function prevSlide() {
        updateSlide(currentIndex - 1);
    }
});