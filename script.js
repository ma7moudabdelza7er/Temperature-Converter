let fahrenheit = document.getElementById("fahrenheit");
let celsius = document.getElementById("celsius");

window.addEventListener("load",function(){
    celsius.focus();
})

fahrenheit.addEventListener("input",function(){
    celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2)
})
celsius.addEventListener("input",function(){
    fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2)
})