const searchInput = document.querySelector('#search');
const posts = document.querySelectorAll('.post');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    posts.forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchValue) || content.includes(searchValue)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
});