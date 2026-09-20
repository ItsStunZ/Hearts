// Elements
const heartElements = document.querySelectorAll('.heart');

const numOfHearts = 3 // Default

// icons
const heart_outline = 'icons/heart_outline.svg';
const heart_broken = 'icons/heart_broken.svg';

heartElements.forEach(heart => {
    // Listen for click
    heart.addEventListener('click', (e) => {
        if (heart.src.includes(heart_outline)) {
            heart.src = heart_broken;
        } else {
            heart.src = heart_outline;
        }
    });
});