const parallaxContainers = document.querySelectorAll('.parallax-container');

parallaxContainers.forEach(container => {
    const parallaxBox = container.querySelector('.parallax-box');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left; // координата курсора відносно контейнера
        
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const rotateX = deltaY * 10; // значення для зміни кута нахилу
        const rotateY = -deltaX * 10; 

        parallaxBox.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        parallaxBox.style.transform = 'rotateX(0) rotateY(0)';
    });
});
