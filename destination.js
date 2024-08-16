function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Throttling the scroll event for better performance
function throttle(fn, wait) {
    let time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

function handleScroll() {
    const section = document.querySelector('.destinations-section');
    if (isElementInViewport(section)) {
        section.classList.add('visible');
    }
}

// Throttle the scroll event listener for smoother animations
window.addEventListener('scroll', throttle(handleScroll, 100));
window.addEventListener('load', handleScroll);



