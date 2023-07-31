let nametxt = document.getElementById('nametxt');
let amounttxt = document.getElementById("amountxt")
let datetxt = document.getElementById('datetxt');
let btn = document.getElementById('mybtn');
let myjstr = document.getElementById('myjstr');

btn.addEventListener('click',function(){
let problema= document.createElement('tr');
let problema3= document.createElement('td');
let problema1= document.createElement('td');
let problema2= document.createElement('td');
    
    
problema1.innerText=nametxt.value;
problema2.innerText=amounttxt.value;
problema3.innerText=datetxt.value;
if(problema===''){
    console.log('enter something man!')
}

problema.appendChild(problema1);
problema.appendChild(problema2);
problema.appendChild(problema3);
myjstr.appendChild(problema);

nametxt.value='';
amounttxt.value='';
datetxt.value='';



});