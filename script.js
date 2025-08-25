document.addEventListener('DOMContentLoaded', () => {

    const mainImageContainer = document.querySelector('.main-image-container');
    const cards = document.querySelectorAll('.card');
    const dynamicCursor = document.querySelector('.dynamic-cursor');

    // Fare hareketine göre ana görselin 3D dönüşümünü yönet
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const { top, left, width, height } = mainImageContainer.getBoundingClientRect();
        
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const rotateX = (mouseY - centerY) / 50; 
        const rotateY = (mouseX - centerX) / 50; 

        mainImageContainer.style.transform = `perspective(1500px) rotateX(${35 - rotateX}deg) rotateY(${rotateY}deg)`;

        // Dinamik imleci fare pozisyonuna göre hareket ettir
        dynamicCursor.style.left = `${mouseX}px`;
        dynamicCursor.style.top = `${mouseY}px`;
    });

    // Her bir kart için etkileşim dinleyicilerini ayarla
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            dynamicCursor.style.opacity = '1';

            if (card.classList.contains('card-full-stack')) {
                dynamicCursor.textContent = 'Recruiter';
            } else if (card.classList.contains('card-financial-analyst')) {
                dynamicCursor.textContent = 'Hiring Manager';
            } else {
                dynamicCursor.textContent = 'İşaretçi'; 
            }
        });

        card.addEventListener('mouseleave', () => {
            dynamicCursor.style.opacity = '0';
        });
    });

    const words = document.querySelectorAll('.rotating-badge .word');
  let currentIndex = 0;

  // İlk kelimeyi aktif yap
  words[currentIndex].classList.add('active');

  function rotateWords() {
    words[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % words.length;

    words[currentIndex].classList.add('active');
  }

  setInterval(rotateWords, 2000);
});