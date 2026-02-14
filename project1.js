// variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[{
    quote:"Be the change that you wish to see in the world.",
    person:'Mahatma Gandhi'
},
{
  quote:"The only thing we have to fear is fear itself.",
    person:'Franklin D. Roosevelt'  
},
];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})