const blocks = document.querySelectorAll(".block");

for (let i = 0; i < blocks.length; i++) {
    console.log(blocks[i].innerText);
    blocks[i].innerText = "Nowa wartość diva o klasie blocks";
    console.log(blocks[i].innerText);
}