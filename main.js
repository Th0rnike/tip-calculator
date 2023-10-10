const body = document.querySelector("body")

const bill = document.getElementById("bill");
let tipButtons = document.querySelectorAll(".tips_button")
const customButton = document.querySelector(".input_button")
const numberOfPeople = document.getElementById("number")
const resetButton = document.getElementById("reset")

const tipAmount = document.getElementById("tip_amount")
const tipPerPerson = document.getElementById("total_per_person")

tipPerPerson.classList.add("prices", "h2")
tipAmount.classList.add("prices", "h2")


const selectTip = (e) => {
    const tipPercent = parseFloat(e.target.textContent.slice(0, 2))
    return tipPercent;
}

function tipCalculation(){
    const billValue = parseFloat(bill.value)
    const numberOfPeopleValue = parseInt(numberOfPeople.value)
    let customInput = parseFloat(customButton.value)

    if(!isNaN(billValue) && !isNaN(numberOfPeopleValue) && numberOfPeopleValue !== 0){
        tipPerPerson.lastChild.textContent = (billValue /numberOfPeopleValue).toFixed(2);
    }
    if(!isNaN(billValue) && !isNaN(numberOfPeopleValue) && numberOfPeopleValue !== 0 && !isNaN(customInput) && customInput !== 0){
        tipAmount.lastChild.textContent = ((billValue * customInput / 100) / numberOfPeopleValue).toFixed(2);
    }
}


tipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        billValue = parseFloat(bill.value);
        let numberOfPeopleValue = parseInt(numberOfPeople.value)
        if(!isNaN(billValue) && !isNaN(numberOfPeopleValue) && numberOfPeopleValue !== 0){
            tipAmount.lastChild.textContent = ((billValue * selectTip(e) / 100) / numberOfPeopleValue).toFixed(2);
        }
        
    })
})

function resetFunction(){
    bill.value = ""; // Clear the bill input
    numberOfPeople.value = ""; // Clear the number input
    customButton.value = ""; // Clear the custom tip input
    tipAmount.lastChild.textContent = "0.00"; // Reset tip amount display
    tipPerPerson.lastChild.textContent = "0.00"; // Reset total per person display
    // Loop through tipButtons and remove any active class if applicable
    tipButtons.forEach(button => {
        button.classList.remove("active");
    });
}


body.addEventListener("change", tipCalculation)
resetButton.addEventListener("click", resetFunction)