// let count = 5 + 12

// console.log(count)

// let myAge =  20

// console.log(myAge)

// function increment(){
//     console.log("the button was clicked")
// } 

let counting = document.getElementById("count-el")
let saving = document.getElementById("save-el")

let count = 0
  function increment(){
    count = count + 1
    counting.innerText = count
    
  }

  function save() {
    let countstr = count + " - "
    //the space after the - will note register with innerText because it shows human readable items only and space?! cmon....thats why i used textContent
    saving.innerText = saving.textContent + countstr
    console.log(count)
    count = 0
    counting.innerText=count
  }