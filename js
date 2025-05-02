// Optional: Smooth scrolling to projects
    const container = document.querySelector('.project-container');
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('project')) {
        e.preventDefault();
        container.scroll({
            left: e.target.offsetLeft - (container.clientWidth - e.target.clientWidth) / 2,
            behavior: 'smooth'
        });
    }
});
