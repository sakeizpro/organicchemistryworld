
document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll("article h3");

    articles.forEach((article, index) => {
        article.style.cursor = "pointer"; // Make the header look clickable
        article.addEventListener("click", function() {
            const pageName = `page${index + 1}.html`;
            window.location.href = pageName;
        });
    });
});
