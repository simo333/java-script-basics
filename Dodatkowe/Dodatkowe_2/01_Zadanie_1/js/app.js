class Tree {
    constructor(type) {
        this.type = type;
    }
}
Tree.prototype.bloom = function () {
    return "I'm blooming";
}

let tree1 = new Tree("sosna");
let tree2 = new Tree("dąb");
let tree3 = new Tree("jesion");
console.log(tree1);
console.log(tree2);
console.log(tree3);
console.log(tree2.bloom());