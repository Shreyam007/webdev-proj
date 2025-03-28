// Sample user data
const users = [
    {
        id: 1,
        name: "Akshra Singh",
        course: "Computer Science",
        subject: "Programming",
        timing: "Mon, Wed 2-4 PM",
        location: "Library",
        compatibility: 92,
        avatar: "/users/akshra.jpeg",
        bio: "Looking for someone to study algorithms and data structures with. Prefer pair programming sessions."
    },
    {
        id: 2,
        name: "Ayush",
        course: "Electrical Engineering",
        subject: "Math",
        timing: "Tue, Thu 6-8 PM",
        location: "Hostel",
        compatibility: 87,
        avatar: "/users/ayush.jpeg",
        bio: "Need help with advanced calculus. Can also help with circuit theory in exchange."
    },
    {
        id: 3,
        name: "Shreyam",
        course: "Data Science",
        subject: "Statistics",
        timing: "Flexible",
        location: "Online",
        compatibility: 95,
        avatar: "/users/shreyam.jpeg",
        bio: "Looking for study partners for machine learning projects. Comfortable with Zoom/Teams."
    },
    {
        id: 4,
        name: "Vaishnavi",
        course: "Mechanical Engineering",
        subject: "Physics",
        timing: "Weekends",
        location: "Cafe",
        compatibility: 78,
        avatar: "/users/vaishnavi.jpeg",
        bio: "Study best in casual environments. Looking for thermodynamics study group."
    },
    {
        id: 5,
        name: "Krutika Deshmukh",
        course: "Biochemistry",
        subject: "Chemistry",
        timing: "Fri 1-5 PM",
        location: "Library",
        compatibility: 85,
        avatar: "/users/krutika.jpeg",
        bio: "Organic chemistry study partner needed. Willing to form study group."
    },
    {
        id: 6,
        name: "Shubhadeep",
        course: "Artificial Intelligence",
        subject: "Programming",
        timing: "Evenings",
        location: "Online",
        rating: 4.9,
        compatibility: 91,
        avatar: "/users/shubhadeep.jpeg",
        bio: "Python and AI enthusiast. Looking for coding partners for projects."
    },
    {
        id: 6,
        name: "Manik Gupta",
        course: "Artificial Intelligence",
        subject: "Programming",
        timing: "Evenings",
        location: "Online",
        rating: 4.9,
        compatibility: 91,
        avatar: "/users/manik.jpeg",
        bio: "Python and AI enthusiast. Looking for coding partners for projects."
    },
];

// DOM Elements
const matchGrid = document.getElementById('matchGrid');
const searchInput = document.getElementById('search');
const subjectFilter = document.getElementById('subject-filter');
const locationFilter = document.getElementById('location-filter');

// Display users
function displayUsers(usersToDisplay = users) {
    matchGrid.innerHTML = '';
    
    usersToDisplay.forEach(user => {
        const stars = '★'.repeat(Math.floor(user.rating)) + '☆'.repeat(5 - Math.floor(user.rating));
        
        const card = document.createElement('div');
        card.className = 'match-card glass';
        card.innerHTML = `
            <div class="match-compatibility">${user.compatibility}%</div>
            <div class="match-card-header">
                <img src="${user.avatar}" alt="${user.name}" class="match-card-avatar">
                <div>
                    <div class="match-card-name">${user.name}</div>
                    <div class="match-card-course">${user.course}</div>
                </div>
            </div>
            <div class="match-card-details">
                <div class="match-card-detail">
                    <i class="fas fa-book"></i>
                    <span>${user.subject}</span>
                </div>
                <div class="match-card-detail">
                    <i class="fas fa-clock"></i>
                    <span>${user.timing}</span>
                </div>
                <div class="match-card-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${user.location}</span>
                </div>
            </div>
            <p class="match-card-bio">${user.bio}</p>
            <div class="match-card-actions">
                <button class="match-card-btn primary">Connect</button>
                <button class="match-card-btn secondary">Message</button>
            </div>
        `;
        
        // Add event listeners to buttons
        card.querySelector('.match-card-btn.primary').addEventListener('click', () => {
            connectWithUser(user.id);
        });
        
        card.querySelector('.match-card-btn.secondary').addEventListener('click', () => {
            messageUser(user.id);
        });
        
        matchGrid.appendChild(card);
    });
}

// Filter functions
function filterUsers() {
    const searchTerm = searchInput.value.toLowerCase();
    const subject = subjectFilter.value;
    const location = locationFilter.value;
    
    const filteredUsers = users.filter(user => {
        const matchesSearch = 
            user.name.toLowerCase().includes(searchTerm) ||
            user.course.toLowerCase().includes(searchTerm) ||
            user.subject.toLowerCase().includes(searchTerm) ||
            user.bio.toLowerCase().includes(searchTerm);
        
        const matchesSubject = subject ? user.subject === subject : true;
        const matchesLocation = location ? user.location === location : true;
        
        return matchesSearch && matchesSubject && matchesLocation;
    });
    
    displayUsers(filteredUsers);
}

// Connect with user
function connectWithUser(userId) {
    const user = users.find(u => u.id === userId);
    alert(`Connection request sent to ${user.name}!`);
    // In a real app, you would send this to your backend
}

// Message user
function messageUser(userId) {
    const user = users.find(u => u.id === userId);
    alert(`Opening chat with ${user.name}`);
    // In a real app, you would redirect to messages page
}

// Event listeners
searchInput.addEventListener('input', filterUsers);
subjectFilter.addEventListener('change', filterUsers);
locationFilter.addEventListener('change', filterUsers);

// Initialize
displayUsers();

// Initialize particles (if not already in main.js)
if (typeof particlesJS !== 'undefined') {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('Particles.js loaded');
    });
}