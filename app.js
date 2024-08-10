const decreaseButton = document.getElementById("decrease_button");
const resetButton = document.getElementById("reset_button");
const increaseButton = document.getElementById("increase_button");
const countLabel = document.getElementById("count_label");

let count = 0;

increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}