let count = 0;

function increment() {
    let vl = document.getElementById("num").innerHTML;
    let num = Number(vl) + 1
    document.getElementById("num").innerHTML = num;

}

function decrement() {
    let vl = document.getElementById("num").innerHTML;
    let num = Number(vl) - 1
    document.getElementById("num").innerHTML = num;

}