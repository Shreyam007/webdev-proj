// Custom Cursor - Subtle Version
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursorFollower = document.createElement('div');
        this.init();
    }
    
    init() {
        // Create cursor elements
        this.cursor.className = 'custom-cursor';
        this.cursorFollower.className = 'cursor-follower';
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);
        
        // Hide default cursor
        document.body.style.cursor = 'none';
        
        // Add event listeners
        this.moveCursor();
        this.hoverEffects();
    }
    
    moveCursor() {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            
            // Main cursor (instant movement)
            this.cursor.style.left = `${clientX}px`;
            this.cursor.style.top = `${clientY}px`;
            
            // Follower cursor (delayed movement)
            requestAnimationFrame(() => {
                this.cursorFollower.style.left = `${clientX}px`;
                this.cursorFollower.style.top = `${clientY}px`;
            });
        });
    }
    
    hoverEffects() {
        // Elements that should trigger cursor change
        const hoverElements = [
            'a', 
            'button', 
            '.hero-btn',
            '.feature-card',
            '.login-btn',
            'input',
            'textarea',
            '[data-cursor-hover]' // Add this attribute to elements that need hover
        ];
        
        hoverElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.addEventListener('mouseenter', () => {
                    this.cursor.classList.add('cursor-active');
                    this.cursorFollower.classList.add('cursor-active');
                    element.style.cursor = 'none';
                });
                
                element.addEventListener('mouseleave', () => {
                    this.cursor.classList.remove('cursor-active');
                    this.cursorFollower.classList.remove('cursor-active');
                });
            });
        });
    }
}

// Initialize only if not on a touch device
document.addEventListener('DOMContentLoaded', () => {
    if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
        new CustomCursor();
    } else {
        // Remove cursor elements if they exist
        const existingCursor = document.querySelector('.custom-cursor');
        const existingFollower = document.querySelector('.cursor-follower');
        if (existingCursor) existingCursor.remove();
        if (existingFollower) existingFollower.remove();
    }
});
