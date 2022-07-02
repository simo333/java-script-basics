const articles = document.querySelectorAll("article");

console.log(articles);
articles.forEach(function (article) {
    const articleLink = article.querySelector("a");
    articleLink.addEventListener("click", function () {
        const content = article.querySelector(".content");
        content.classList.remove("d-none");
    });
    articleLink.addEventListener("mouseover", function () {
        const content = article.querySelector(".content");
        content.classList.remove("d-none");
    });

});
