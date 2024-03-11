//Display mode
let lightMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')
})

//funtions buttons
const clean = document.getElementById('clean')
const delet = document.getElementById('delete')
const equal = document.getElementById('equal')

//Operator buttons
const parentheses = document.getElementById('parentheses')
const percentage = document.getElementById('percentage')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const division = document.getElementById('division')
const point = document.getElementById('point')

//Numbers buttons
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

let numbers = []
let arrayNumbers = []
//events
//function capture
document.querySelectorAll("main button").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.value;
    numbers.push(id)

    arrayNumbers = numbers.map(function(item) {
        let num = Number(item)
        if (!isNaN(num)) {
            return num
        }
    })
    arrayNumbers = arrayNumbers.filter(function(item) {
        return item !== undefined
    }) 
    result()
  })  
})

//function sum
plus.addEventListener('click', ()=>{
    let sum = 0
    for(let i = 0; i < arrayNumbers.length; i++){
    sum+=arrayNumbers[i]}
    document.querySelector("h1").innerHTML = sum
    console.log(sum)
})

//funtion minus
minus.addEventListener('click', ()=>{
    let min = arrayNumbers[0]
    for(let i = 1; i < arrayNumbers.length; i++) {
        min -= arrayNumbers[i]}
    document.querySelector("h1").innerHTML = min
})

//function multiply
multiply.addEventListener('click', ()=>{
    let mult = 1; 
    for(let i = 0; i < arrayNumbers.length; i++) {
    mult *= arrayNumbers[i]
}
document.querySelector("h1").innerHTML = mult
})

//division
division.addEventListener('click', ()=>{
    let div = arrayNumbers[0]
    for(let i = 1; i < arrayNumbers.length; i++) {
        div /= arrayNumbers[i]}
    document.querySelector("h1").innerHTML = div
    console.log(div)
})

//funtion result
function result(){
    document.querySelector("h2").innerHTML = arrayNumbers.join('')
}

//Function clean
clean.addEventListener('click', ()=>{
    numbers = []
    document.querySelector("h1").innerHTML = 0
    document.querySelector("h2").innerHTML = 0
})

//delete
delet.addEventListener('click', ()=> {
    arrayNumbers.pop()
    result()
    console.log(arrayNumbers)   
})