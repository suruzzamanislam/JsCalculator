
(function(){
    let screen = document.querySelector(".output")
    let buttons = document.querySelectorAll(".btn")
    let clear = document.querySelector(".clear")
    let equal = document.querySelector(".equal")

buttons.forEach(function (button){
    button.addEventListener("click", function(e){
        let value = e.target.dataset.num;
        screen.value += value
    })
})

equal.addEventListener("click", function(){
    if(screen.value == ""){
        screen.value = "enter value"
    }
    else{
        let value = eval(screen.value)
        screen.value = value;
    }
})

clear.addEventListener("click", function(e){
    screen.value = "";
})
}());