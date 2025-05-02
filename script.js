window.addEventListener('scroll', function() {
    const line = document.getElementById('scrollLine');
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
    const scrollPosition = window.scrollY; // Current scroll position

    // Calculate the width of the line based on scroll position
    const lineWidth = (scrollPosition / maxScrollHeight) * 100; // Line width as a percentage of total scroll height
    line.style.width = `${lineWidth}%`; // Set the width of the line
});
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the active class on click
});
