// document.getElementById("count-el").innerText=5

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")


let count = 0
let saveCount=0

function increment(){
    count = count + 1
    countEl.innerText=count
    // count = count + 1
    console.log("clicked")    
}

function save(){
    saveCount=count+" - "
    saveEl.innerText+=saveCount
    countEl.innerText=0
    count=0
}




