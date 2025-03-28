document.addEventListener('DOMContentLoaded', function() {
    // Check for incoming chat request
    const chatUser = JSON.parse(localStorage.getItem('currentChatUser'));
    
    if (chatUser) {
        // Clear the temp storage
        localStorage.removeItem('currentChatUser');
        
        // Find or create conversation
        let conversation = conversations.find(c => c.userId == chatUser.id);
        
        if (!conversation && chatUser.isNew) {
            conversation = {
                id: conversations.length + 1,
                userId: chatUser.id,
                name: chatUser.name,
                avatar: chatUser.avatar,
                lastMessage: "",
                time: "Just now",
                unread: 0,
                messages: []
            };
            conversations.unshift(conversation);
        }
        
        if (conversation) {
            // Force open this conversation
            setActiveConversation(conversation);
            displayConversations();
        }
    }
});

// [Keep all your existing messages.js functions]


// Sample conversation data with read status and file support
const conversations = [
    {
        id: 1,
        userId: 101,
        name: "Shreyam",
        course: "Data Science",
        avatar: "/users/shreyam.jpeg",
        lastMessage: "admin block at 7?",
        time: "2:30 PM",
        messages: [
            {
                id: 1,
                text: "Hey, we matched for the maths subject, remember?",
                time: "10:30 AM",
                incoming: true,
                read: true
            },
            {
                id: 2,
                text: "Yes! i do.",
                time: "10:45 AM",
                incoming: false,
                read: true
            },
            {
                id: 3,
                text: "We could study together if you're free tomorrow afternoon for the Integration?",
                time: "10:46 AM",
                incoming: true,
                read: true
            },
            {
                id: 4,
                text: "That would be great! Library at 2pm?",
                time: "11:00 AM",
                incoming: false,
                read: true
            },
            {
                id: 5,
                file: {
                    name: "algorithm_notes.jpg",
                    size: "1.2 MB",
                    type: "jpg",
                    url: "#"
                },
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 6,
                text: "Here are my notes from prerna mam",
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 7,
                text: "Perfect, I'll bring my notes",
                time: "11:05 AM",
                incoming: false,
                read: true
            },
            {
                id: 8,
                text: "so where and when?",
                time: "2:30 PM",
                incoming: true,
                read: false
            },
            {
                id: 9,
                text: "admin block at 7?",
                time: "2:30 PM",
                incoming: false,
                read: false
            }
        ]
    },
    {
        id: 1,
        userId: 101,
        name: "Akshra Singh",
        course: "Computer Science",
        avatar: "/users/akshra.jpeg",
        lastMessage: "Hey, are we still meeting at the library tomorrow?",
        time: "5:30 PM",
        unread: 1,
        messages: [
            {
                id: 1,
                text: "Hi there! I saw your profile and we're both taking Algorithms this semester",
                time: "10:30 AM",
                incoming: true,
                read: true
            },
            {
                id: 2,
                text: "Yes! I'm struggling with the dynamic programming concepts",
                time: "10:45 AM",
                incoming: false,
                read: true
            },
            {
                id: 3,
                text: "We could study together if you're free tomorrow afternoon?",
                time: "10:46 AM",
                incoming: true,
                read: true
            },
            {
                id: 4,
                text: "That would be great! Library at 2pm?",
                time: "11:00 AM",
                incoming: false,
                read: true
            },
            {
                id: 5,
                file: {
                    name: "algorithm_notes.pdf",
                    size: "2.4 MB",
                    type: "pdf",
                    url: "#"
                },
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 6,
                text: "Here are my notes from last lecture",
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 7,
                text: "Perfect, I'll bring my notes",
                time: "11:05 AM",
                incoming: false,
                read: true
            },
            {
                id: 8,
                text: "Hey, are we still meeting at the library tomorrow?",
                time: "2:30 PM",
                incoming: true,
                read: false
            }
        ]
    },
    {
        id: 1,
        userId: 101,
        name: "Ayush",
        course: "Electrical Engineering",
        avatar: "/users/ayush.jpeg",
        lastMessage: "done",
        time: "1:17 PM",
        messages: [
            {
                id: 1,
                text: "Hi there! I saw your profile and we're both taking Algorithms this semester",
                time: "10:30 AM",
                incoming: true,
                read: true
            },
            {
                id: 2,
                text: "Yes! I'm struggling with the dynamic programming concepts",
                time: "10:45 AM",
                incoming: false,
                read: true
            },
            {
                id: 3,
                text: "We could study together if you're free tomorrow afternoon?",
                time: "10:46 AM",
                incoming: true,
                read: true
            },
            {
                id: 4,
                text: "That would be great! Library at 2pm?",
                time: "11:00 AM",
                incoming: false,
                read: true
            },
            {
                id: 5,
                file: {
                    name: "algorithm_notes.pdf",
                    size: "2.4 MB",
                    type: "pdf",
                    url: "#"
                },
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 6,
                text: "Here are my notes from last lecture",
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 7,
                text: "Perfect, I'll bring my notes",
                time: "11:05 AM",
                incoming: false,
                read: true
            },
            {
                id: 8,
                text: "lib tomo?",
                time: "2:30 PM",
                incoming: true,
                read: false
            },
            {
                id: 9,
                text: "Done",
                time: "2:45 AM",
                incoming: false,
                read: false
            }
        ]
    },
    {
        id: 1,
        userId: 101,
        name: "Manik Gupta",
        course: "Artificial Intelligence",
        avatar: "/users/manik.jpeg",
        lastMessage: "yeah sure",
        time: "2:30 PM",
        messages: [
            {
                id: 1,
                text: "Hi there! I saw your profile and we're both taking Algorithms this semester",
                time: "10:30 AM",
                incoming: true,
                read: true
            },
            {
                id: 2,
                text: "Yes! I'm struggling with the dynamic programming concepts",
                time: "10:45 AM",
                incoming: false,
                read: true
            },
            {
                id: 3,
                text: "We could study together if you're free tomorrow afternoon?",
                time: "10:46 AM",
                incoming: true,
                read: true
            },
            {
                id: 4,
                text: "That would be great! Library at 2pm?",
                time: "11:00 AM",
                incoming: false,
                read: true
            },
            {
                id: 5,
                file: {
                    name: "algorithm_notes.pdf",
                    size: "2.4 MB",
                    type: "pdf",
                    url: "#"
                },
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 6,
                text: "Here are my notes from last lecture",
                time: "11:02 AM",
                incoming: true,
                read: true
            },
            {
                id: 7,
                text: "Perfect, I'll bring my notes",
                time: "11:05 AM",
                incoming: false,
                read: true
            },
            {
                id: 8,
                text: "Hey, are we still meeting at the library tomorrow?",
                time: "2:30 PM",
                incoming: true,
                read: false
            }
        ]
    },
    // ... (other conversations remain similar but with read status)
];

// DOM Elements
const conversationsContainer = document.querySelector('.conversations');
const emptyChat = document.getElementById('emptyChat');
const activeChat = document.getElementById('activeChat');
const messagesContainer = document.getElementById('messagesContainer');
const messageInput = document.getElementById('messageInput');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const chatUserAvatar = document.getElementById('chatUserAvatar');
const chatUserName = document.getElementById('chatUserName');
const chatUserCourse = document.getElementById('chatUserCourse');
const attachmentBtn = document.getElementById('attachmentBtn');
const attachmentModal = document.getElementById('attachmentModal');
const closeAttachmentBtn = document.querySelector('.close-attachment');
const fileInputs = document.querySelectorAll('.file-input');

// Current active conversation
let activeConversation = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayConversations();
    setupEventListeners();
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('Particles.js loaded');
        });
    }
});

function setupEventListeners() {
    // Message sending
    sendMessageBtn.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // Attachment handling
    attachmentBtn.addEventListener('click', toggleAttachmentModal);
    closeAttachmentBtn.addEventListener('click', toggleAttachmentModal);
    
    // File selection
    fileInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                sendFile(e.target.files[0]);
                toggleAttachmentModal();
            }
        });
    });

    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (!attachmentModal.contains(e.target) && e.target !== attachmentBtn) {
            attachmentModal.style.display = 'none';
        }
    });
}

function toggleAttachmentModal() {
    attachmentModal.style.display = attachmentModal.style.display === 'block' ? 'none' : 'block';
}

// Display conversations list
function displayConversations() {
    conversationsContainer.innerHTML = '';
    
    conversations.forEach(conversation => {
        const conversationElement = document.createElement('div');
        conversationElement.className = 'conversation-item';
        conversationElement.innerHTML = `
            <img src="${conversation.avatar}" alt="${conversation.name}" class="conversation-avatar">
            <div class="conversation-info">
                <div class="conversation-name">${conversation.name}</div>
                <div class="conversation-preview">${getPreviewText(conversation.lastMessage)}</div>
            </div>
            <div class="conversation-meta">
                <div class="conversation-time">${conversation.time}</div>
                ${conversation.unread > 0 ? `<div class="conversation-badge">${conversation.unread}</div>` : ''}
            </div>
        `;
        
        conversationElement.addEventListener('click', () => {
            setActiveConversation(conversation);
        });
        
        conversationsContainer.appendChild(conversationElement);
    });
}

function getPreviewText(text) {
    return text.length > 25 ? text.substring(0, 25) + '...' : text;
}

// Set active conversation
function setActiveConversation(conversation) {
    // Update active state in UI
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Show chat
    emptyChat.style.display = 'none';
    activeChat.style.display = 'flex';
    
    // Update chat header
    chatUserAvatar.src = conversation.avatar;
    chatUserName.textContent = conversation.name;
    chatUserCourse.textContent = conversation.course;
    
    // Display messages
    displayMessages(conversation.messages);
    
    // Set active conversation
    activeConversation = conversation;
    
    // Mark messages as read
    markMessagesAsRead();
}

// Display messages in chat
function displayMessages(messages) {
    messagesContainer.innerHTML = '';
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.incoming ? 'message-incoming' : 'message-outgoing'}`;
        messageElement.dataset.messageId = message.id;
        
        if (message.file) {
            messageElement.innerHTML = createFileMessageHTML(message);
        } else {
            messageElement.innerHTML = createTextMessageHTML(message);
        }
        
        messagesContainer.appendChild(messageElement);
    });
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function createFileMessageHTML(message) {
    const fileIcon = getFileIcon(message.file.type);
    return `
        ${message.text ? `<div class="message-text">${message.text}</div>` : ''}
        <div class="message-file">
            <i class="fas ${fileIcon}"></i>
            <div class="file-info">
                <div class="file-name">${message.file.name}</div>
                <div class="file-size">${message.file.size}</div>
            </div>
            <a href="${message.file.url}" download class="download-btn">
                <i class="fas fa-download"></i>
            </a>
        </div>
        <div class="message-time">
            ${message.time}
            ${!message.incoming ? createReadReceiptHTML(message.read) : ''}
        </div>
    `;
}

function createTextMessageHTML(message) {
    return `
        <div class="message-text">${message.text}</div>
        <div class="message-time">
            ${message.time}
            ${!message.incoming ? createReadReceiptHTML(message.read) : ''}
        </div>
    `;
}

function createReadReceiptHTML(isRead) {
    return `<span class="read-receipt">
        ${isRead ? '<i class="fas fa-check-double seen"></i>' : '<i class="fas fa-check"></i>'}
    </span>`;
}

function getFileIcon(fileType) {
    const icons = {
        'image': 'fa-image',
        'pdf': 'fa-file-pdf',
        'document': 'fa-file-word',
        'code': 'fa-file-code'
    };
    return icons[fileType] || 'fa-file';
}

// Send text message
function sendMessage() {
    const text = messageInput.value.trim();
    if (text && activeConversation) {
        const newMessage = {
            id: activeConversation.messages.length + 1,
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            incoming: false,
            read: false
        };
        
        addMessageToConversation(newMessage);
        
        // Clear input
        messageInput.value = '';
        
        // Simulate reply after 1-3 seconds
        if (Math.random() > 0.3) {
            setTimeout(simulateReply, 1000 + Math.random() * 2000);
        }
    }
}

// Send file message
function sendFile(file) {
    if (!activeConversation) return;
    
    const fileType = getFileType(file.type || file.name);
    const fileSize = formatFileSize(file.size);
    
    const newMessage = {
        id: activeConversation.messages.length + 1,
        file: {
            name: file.name,
            size: fileSize,
            type: fileType,
            url: URL.createObjectURL(file) // In real app, upload to server first
        },
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        incoming: false,
        read: false
    };
    
    addMessageToConversation(newMessage);
}

function addMessageToConversation(message) {
    // Add to conversation
    activeConversation.messages.push(message);
    
    // Update UI
    displayMessages(activeConversation.messages);
    
    // Update last message in conversation list
    activeConversation.lastMessage = message.text || "Sent a file";
    activeConversation.time = "Just now";
    displayConversations();
    
    // Re-add active class to current conversation
    document.querySelectorAll('.conversation-item').forEach(item => {
        if (item.querySelector('.conversation-name').textContent === activeConversation.name) {
            item.classList.add('active');
        }
    });
    
    // Simulate message being read after delay
    if (!message.incoming) {
        setTimeout(() => {
            message.read = true;
            updateReadReceipt(message.id);
        }, 1000 + Math.random() * 2000);
    }
}

// Simulate received message
function simulateReply() {
    if (!activeConversation) return;
    
    const replies = [
        "Sounds good!",
        "I'll be there",
        "Can we reschedule?",
        "Thanks for the notes!",
        "Let me check my schedule",
        "Perfect!",
        "👍"
    ];
    
    const newMessage = {
        id: activeConversation.messages.length + 1,
        text: replies[Math.floor(Math.random() * replies.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        incoming: true,
        read: true
    };
    
    addMessageToConversation(newMessage);
}

// Update read receipt
function updateReadReceipt(messageId) {
    const messageElement = document.querySelector(`.message[data-message-id="${messageId}"]`);
    if (messageElement) {
        const receipt = messageElement.querySelector('.read-receipt');
        if (receipt) {
            receipt.innerHTML = '<i class="fas fa-check-double seen"></i>';
        }
    }
}

// Mark all messages as read
function markMessagesAsRead() {
    if (activeConversation) {
        activeConversation.messages.forEach(message => {
            if (message.incoming) {
                message.read = true;
            }
        });
        activeConversation.unread = 0;
        displayMessages(activeConversation.messages);
        displayConversations();
    }
}

// Helper functions
function getFileType(fileTypeOrName) {
    if (!fileTypeOrName) return 'file';
    if (fileTypeOrName.includes('image')) return 'image';
    if (fileTypeOrName.includes('pdf')) return 'pdf';
    if (fileTypeOrName.includes('document') || fileTypeOrName.match(/\.docx?$/)) return 'document';
    if (fileTypeOrName.match(/\.(js|py|java|cpp)$/)) return 'code';
    return 'file';
}

function formatFileSize(bytes) {
    if (!bytes) return '0 bytes';
    if (bytes < 1024) return bytes + ' bytes';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
}