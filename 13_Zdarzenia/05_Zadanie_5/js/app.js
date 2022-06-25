const buttons = document.querySelectorAll("button");
buttons.forEach(function (button){
    button.addEventListener("click", function (){
        this.previousElementSibling.firstElementChild.innerText++;
    })
})