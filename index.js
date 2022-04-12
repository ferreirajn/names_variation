function getNumberOfChars(name) { 
  return name.length; 
  }
  
  function getLower(name) { 
    return name.toLowerCase()
  }
  
  function getUpper(name) {
    return name.toUpperCase()
  }

  function getFirstchar(name){
  return name[0]
  }

  function getLastchar(name){
  return name[name.length - 1]
  }

  function captalize(name){ 
    return name[0].toUpperCase() + name.substring(1).toLowerCase()
    
  }

let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")
let answer5 = document.querySelector("#answer5")
let answer6 = document.querySelector("#answer6")

let name = document.querySelector("#your-name")

name.addEventListener("keyup", () => {
    answer1.textContent = getNumberOfChars(name.value)
    answer2.textContent = getLower(name.value)
    answer3.textContent = getUpper(name.value)
    answer4.textContent = getFirstchar(name.value)
    answer5.textContent = getLastchar(name.value)
    answer6.textContent = captalize(name.value)
});