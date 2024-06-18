document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Vanta.js
    VANTA.BIRDS({
        el: "#vanta-bg",
        backgroundColor: 0x1d1f27, 
        color1: 0xcdd6e0, 
        color2: 0xff6347,
        birdSize: 1.50,
        wingSpan: 20.00,
        speedLimit: 6.00,
        separation: 50.00,
        alignment: 50.00,
        cohesion: 50.00,
        quantity: 3.00,
    });

   
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 元素淡入效果
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 回到頁首按鈕顯示與行為
    const backToTopButton = document.getElementById('BackTop');

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});