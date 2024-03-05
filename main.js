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
const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

//events
const numbers = []

function res(){
    document.querySelector("h2").innerHTML = numbers.join('')
}

one.addEventListener('click',()=>{
    numbers.push(1)
    res()

})
two.addEventListener('click', ()=>{
    numbers.push(2)
    res()
})
three.addEventListener('click', ()=>{
    numbers.push(3)
    res()
})


equal.addEventListener('click', ()=>{
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
    sum+=numbers[i]
   }
    document.querySelector("h1").innerHTML = sum
})

