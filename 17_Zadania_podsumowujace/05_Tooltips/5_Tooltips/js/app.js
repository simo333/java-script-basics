const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach(function (tooltip) {
    const span = document.createElement("span");
    tooltip.addEventListener("mouseover", function () {
        console.log(tooltip.dataset.text);
        span.classList.add("tooltipText");
        span.innerText = tooltip.dataset.text;
        tooltip.append(span);
    });
    tooltip.addEventListener("mouseout", function () {
        span.remove();
    });
});