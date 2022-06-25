const deleteButtons = document.querySelectorAll(".deleteBtn");
deleteButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // this.parentElement.parentElement.remove();
        this.closest("tr").remove();
    });
});