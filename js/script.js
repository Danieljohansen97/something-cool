console.log("-- script.js loaded --");

var tNode = document.getElementById("test");

window.addEventListener("click", t1);

function t1(input) {
    console.log("Start t1 function");
    input = prompt("?");
    tNode.innerHTML = input;
    console.log("Content Changed");
}
