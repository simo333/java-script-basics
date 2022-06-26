const liPictures = document.querySelectorAll("li");
const body = document.querySelector("body");
liPictures.forEach(function (pic) {
    pic.addEventListener("click", function () {
        const src = this.querySelector("img").src;
        const fullScreenDiv = document.createElement("div");
        fullScreenDiv.classList.add("fullScreen");
        const image = document.createElement("img");
        image.src = src;
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("close");
        closeBtn.innerText = "Close";
        fullScreenDiv.append(image, closeBtn);
        body.append(fullScreenDiv);
        closeBtn.addEventListener("click", function () {
            fullScreenDiv.remove();
        });
    });
});


