function countHello(num) {
    let iter = 1;
    const intervalId = setInterval(function () {
        console.log(iter, "Hello");
        iter++;
        if (iter === num) {
            clearInterval(intervalId);
        }
    }, 500);

}

countHello(10);