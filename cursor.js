// cursor.js - Simple elegant cursor for study hub
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'study-cursor';
    document.body.appendChild(cursor);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Follow mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effects
    const interactive = ['a', 'button', 'input', 'textarea', 'select'];
    interactive.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('study-cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('study-cursor-hover');
            });
        });
    });
});
