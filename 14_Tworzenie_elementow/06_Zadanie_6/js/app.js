const items = document.querySelectorAll("a");
const list1 = document.getElementById("list1");
const list2 = document.getElementById("list2");

items.forEach(function (item){
    item.addEventListener("click", function (){
        if (this.parentElement === list1){
            list2.append(this);
        } else {
            list1.append(this);
        }
    })
})

