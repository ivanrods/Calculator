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

//events
const numbers = []
let arrayDeNumeros = numbers.map(function(item) {
    return Number(item);
});

document.querySelectorAll("button").forEach( function(button) {
    
    button.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const id = el.value;
    numbers.push(id)
    res()
    console.log(numbers)
    console.log(arrayDeNumeros)
  });
  
});

function res(){
    document.querySelector("h2").innerHTML = numbers.join('')
}


equal.addEventListener('click', ()=>{
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
    sum+=numbers[i]
   }
    document.querySelector("h1").innerHTML = sum
})



