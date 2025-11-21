function deleteMe() {
    document.getElementById("Result").value = "";
}

function calculator(myValue) {
    document.getElementById("Result").value += myValue;
}

function answer() {
    let a = document.getElementById("Result").value;
    let b = eval(a);
    document.getElementById("Result").value = b;
}