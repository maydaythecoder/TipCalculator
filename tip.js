
let billAmountElement = document.querySelector("#billAmount");
let numGuestsElement = document.querySelector("#numberOfGuests");
let serviceQualElement = document.getElementById("service");
let div = document.getElementById('Total');
let button = document.querySelector('button');

function total(){
    let billAmount = Number(billAmountElement.value);
    let numGuests = Number(numGuestsElement.value);
    let serviceQual = Number(serviceQualElement.value);
    let billTotal = ((billAmount * serviceQual)+ billAmount)/numGuests;
    console.log(billTotal);

    div.innerText= billTotal.toFixed(2);
}

button.addEventListener('click', total);
