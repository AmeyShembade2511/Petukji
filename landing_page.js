// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');

    if (isInViewport(box1)) {
        box1.classList.add('visible');
    }

    if (isInViewport(box2)) {
        box2.classList.add('visible');
    }
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the initial check on page load
handleScroll();