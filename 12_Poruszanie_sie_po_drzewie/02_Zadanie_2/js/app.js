const buttons = document.querySelectorAll("a");

buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.previousElementSibling.classList.toggle("hidden");
    });
});