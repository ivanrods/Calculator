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

let number = ''
let numbers = []
let arrayNumbers = []
let preview = []

//states
let add = false
let sub = false
let mult = false
let div = false

//events
//function capture

document.querySelectorAll(" main button").forEach( function(button) {
    button.addEventListener("click", function(event){
        const vel = event.target || event.srcElement;
        const n = vel.value;
        preview.push(n)
        result()
    })
})

document.querySelectorAll(".number").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.value;
    number +=id
 
    arrayNumbers = numbers.map(function(item) {
        let num = Number(item)
        if (!isNaN(num)) {
            return num
        }    
    })
    arrayNumbers = arrayNumbers.filter(function(item) {
        return item !== undefined
    })  
  })
})


function confg(){
    numbers.push(number);
    number = '';
    numbers = numbers.filter(function(value) {
        return value !== '';
    });
}
//apetations
plus.addEventListener('click', ()=>{
    add = true
    confg()
}) 
minus.addEventListener('click', ()=> {
    sub = true
    confg()
})

multiply.addEventListener('click', ()=> {
    mult = true
    confg()
})

division.addEventListener('click', ()=> {
    div = true
    confg()
})
//equal
equal.addEventListener('click', ()=>{
    switch(true) {
        case add == true:
            CalcSum();
            break;
        case sub == true:
            CalcMinus();
            break;
        case mult == true:
            CalcMultiply();
            break;
        case div == true:
            CalcDivision();
            break;
        default:
            document.querySelector("h1").innerHTML = arrayNumbers.join('')
    }  
})

//function sum
function CalcSum(){
    let sum = 0
    for(let i = 0; i < arrayNumbers.length; i++){
    sum+=arrayNumbers[i]}
    document.querySelector("h1").innerHTML = sum
}

//funtion minus
function CalcMinus(){
    let min = arrayNumbers[0]
    for(let i = 1; i < arrayNumbers.length; i++) {
        min -= arrayNumbers[i]}
    document.querySelector("h1").innerHTML = min
}

//function multiply
function CalcMultiply(){
    let mult = 1; 
    for(let i = 0; i < arrayNumbers.length; i++) {
    mult *= arrayNumbers[i]
}
document.querySelector("h1").innerHTML = mult
}

//division
function CalcDivision(){
    let div = arrayNumbers[0]
    for(let i = 1; i < arrayNumbers.length; i++) {
        div /= arrayNumbers[i]}
    document.querySelector("h1").innerHTML = div
    console.log(div)
}

//percentage
function calcPercentage(){
    num = arrayNumbers.length
    let perc = (num / arrayNumbers.length) * 100
    return perc
}
//funtion result
function result(){
    document.querySelector("h2").innerHTML = preview.join('')
}

//Function clean
clean.addEventListener('click', ()=>{
    numbers = []
    document.querySelector("h1").innerHTML = 0
    document.querySelector("h2").innerHTML = 0
})

//delete
delet.addEventListener('click', ()=> {
    if(numbers.length >= 0){
        numbers.pop()
        numbers.pop()
    }
})