
let display = document.getElementById("display");
let themeButton = document.getElementById("themeBtn");
let body = document.body;
let inputValue = "";
function press(num) {
    inputValue = inputValue + num;
    display.value = inputValue;
}
function calculate() {
    try {
        let ans = eval(inputValue);
        display.value = ans;
        inputValue = ans.toString();
    } catch (e) {
        display.value = "Error";
        inputValue = "";
    }
}
function clearScreen() {
    inputValue = "";
    display.value = "";
}
function deleteChar() {
    inputValue = inputValue.slice(0, -1);
    display.value = inputValue;
}
themeButton.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        themeButton.innerText = "Switch to Light Theme";
    } else {
        themeButton.innerText = "Switch to Dark Theme";
    }
}
);
