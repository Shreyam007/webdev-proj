// Matching Algorithm for Study Buddies
class StudyBuddyMatcher {
    constructor() {
        this.users = []; // Will be populated with user data
        this.currentUser = null; // Currently logged in user
        this.init();
    }
    
    init() {
        // Load user data (in a real app, this would be from an API)
        this.loadSampleData();
        
        // Get current user from session (simulated)
        this.currentUser = this.users[0]; // For demo purposes
        
        // If on browse page, display matches
        if (document.querySelector('.buddies-grid')) {
            this.displayMatches();
        }
    }
    
    loadSampleData() {
        // Sample user data
        this.users = [
            {
                id: 1,
                name: "Alex Johnson",
                university: "Stanford University",
                subjects: ["Computer Science", "Mathematics"],
                availability: ["evenings", "weekends"],
                locations: ["library", "online"],
                rating: 4.8,
                image: "p1.avif"
            },
            {
                id: 2,
                name: "Maria Garcia",
                university: "MIT",
                subjects: ["Physics", "Mathematics"],
                availability: ["morning", "afternoon"],
                locations: ["hostel", "cafe"],
                rating: 4.5,
                image: "p2.avif"
            },
            // More sample users...
        ];
    }
    
    // Calculate compatibility score (0-1)
    calculateCompatibility(user1, user2) {
        if (user1.id === user2.id) return 0; // Don't match with yourself
        
        let score = 0;
        let maxPossible = 0;
        
        // Subject compatibility (50% weight)
        const subjectMatches = this.countMatches(user1.subjects, user2.subjects);
        score += subjectMatches * 0.5;
        maxPossible += Math.max(user1.subjects.length, user2.subjects.length) * 0.5;
        
        // Availability compatibility (30% weight)
        const availabilityMatches = this.countMatches(user1.availability, user2.availability);
        score += availabilityMatches * 0.3;
        maxPossible += Math.max(user1.availability.length, user2.availability.length) * 0.3;
        
        // Location compatibility (20% weight)
        const locationMatches = this.countMatches(user1.locations, user2.locations);
        score += locationMatches * 0.2;
        maxPossible += Math.max(user1.locations.length, user2.locations.length) * 0.2;
        
        // Normalize score to 0-1 range
        return maxPossible > 0 ? score / maxPossible : 0;
    }
    
    countMatches(arr1, arr2) {
        return arr1.filter(item => arr2.includes(item)).length;
    }
    
    // Get top matches for current user
    getTopMatches(limit = 10) {
        if (!this.currentUser) return [];
        
        // Calculate compatibility scores for all users
        const usersWithScores = this.users.map(user => ({
            ...user,
            compatibility: this.calculateCompatibility(this.currentUser, user)
        }));
        
        // Filter out current user and 0-score matches, then sort by score
        return usersWithScores
            .filter(user => user.id !== this.currentUser.id && user.compatibility > 0)
            .sort((a, b) => b.compatibility - a.compatibility)
            .slice(0, limit);
    }
    
    // Display matches on browse page
    displayMatches() {
        const matches = this.getTopMatches();
        const grid = document.querySelector('.buddies-grid');
        
        // Clear existing cards (except the first sample card)
        const sampleCard = grid.querySelector('.buddy-card');
        grid.innerHTML = '';
        if (sampleCard) grid.appendChild(sampleCard);
        
        // Add matched users to the grid
        matches.forEach(user => {
            const card = document.createElement('div');
            card.className = 'buddy-card glass';
            card.setAttribute('data-scroll', 'fade-up');
            card.innerHTML = `
                <div class="buddy-image">
                    <img src="${user.image}" alt="${user.name}">
                    <div class="buddy-rating">
                        <i class="fas fa-star"></i>
                        <span>${user.rating}</span>
                    </div>
                </div>
                <div class="buddy-info">
                    <h3>${user.name}</h3>
                    <p class="university">${user.university}</p>
                    <div class="buddy-subjects">
                        ${user.subjects.map(subject => `<span>${subject}</span>`).join('')}
                    </div>
                    <div class="buddy-availability">
                        <p><i class="fas fa-clock"></i> ${this.formatList(user.availability)}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${this.formatList(user.locations)}</p>
                    </div>
                    <div class="buddy-actions">
                        <button class="buddy-btn message-btn">Message</button>
                        <button class="buddy-btn connect-btn">Connect</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
    
    formatList(items) {
        return items.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(', ');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StudyBuddyMatcher();
    
    // Filter functionality
    const filterBtn = document.querySelector('.filter-btn');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            // In a real app, this would filter the results
            alert('Filter functionality would be implemented here');
        });
    }
});