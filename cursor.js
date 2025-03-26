// Custom Cursor
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
            this.cursor.style.left = `${e.clientX}px`;
            this.cursor.style.top = `${e.clientY}px`;
            
            // Delayed follower effect
            setTimeout(() => {
                this.cursorFollower.style.left = `${e.clientX}px`;
                this.cursorFollower.style.top = `${e.clientY}px`;
            }, 100);
        });
    }
    
    hoverEffects() {
        // Elements that should trigger cursor change
        const hoverElements = [
            'a', 'button', '.feature-card', '.hero-btn',
            'input', 'textarea', '.ripple', '.login-btn'
        ];
        
        hoverElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.addEventListener('mouseenter', () => {
                    this.cursor.classList.add('cursor-active');
                    if (selector === 'a' || selector === 'button') {
                        element.style.cursor = 'none';
                    }
                });
                
                element.addEventListener('mouseleave', () => {
                    this.cursor.classList.remove('cursor-active');
                });
            });
        });
    }
}

// Initialize custom cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
});