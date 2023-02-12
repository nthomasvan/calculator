const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach(button =>
    button.addEventListener("click",showNumber));

function showNumber(event){
    const button = event.target;
    console.log(button.value);
}