var input = document.getElementById("input");
var text = document.getElementById("txt");
var button = document.getElementById("btn");
var value;

button.addEventListener("click", function (value) {
    value = input.value;
    if (value >= 1 && value <= 10) {
        text.innerText = "Valid";
    } else {
        text.innerText = "Not valid";
    }
});
