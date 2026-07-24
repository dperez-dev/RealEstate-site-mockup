const housePriceValue = document.getElementById("home-price-value");
const downPaymentValue = document.getElementById("down-payment-value");
const intrestRateValue = document.getElementById("intrest-rate-value");
const results = document.getElementById("output-results");
// const creditScoreValue = document.getElementById("credit-score-value");
// const loanTermValue = document.getElementsByClassName("loan-term-value");
let housePrice;
let downPayment;
let intrestRate;
let loanTerm;

housePriceValue.addEventListener('input', () => {
    housePrice = parseFloat(housePriceValue.value);
    parseFloat(calculateMortgage())
    console.log(housePrice)
})
downPaymentValue.addEventListener('input', () => {
    downPayment = parseFloat(downPaymentValue.value);
    calculateMortgage()
    console.log(downPayment)
})
intrestRateValue.addEventListener('input', () =>{
    const rateVal = parseFloat(intrestRateValue.value);
    intrestRate = rateVal / 100;
    calculateMortgage()
    console.log(intrestRate)
})
// document.querySelectorAll(".credit-score-value").forEach(Option => {
//     Option.addEventListener('click', () => {
//         const value = Option.value;
//         console.log(value)
//     })
// })
document.querySelectorAll('.loan-term-value').forEach(btn => {
    btn.addEventListener('click', () => {
        loanTerm = parseFloat(btn.dataset.value);
        calculateMortgage()
        console.log(loanTerm)
    })
})

function calculateMortgage() {
    const principal = housePrice - downPayment;
    const monthlyIntrestRate = intrestRate / 12;
    const numOfPayments = loanTerm * 12;

    const mortageCalculation = principal*(monthlyIntrestRate * (1 + monthlyIntrestRate)**numOfPayments) / ((1+monthlyIntrestRate)**numOfPayments - 1)
    // console.log(mortageCalculation)
    results.value = Math.round(mortageCalculation);

    return results.value; 
    // console.log(housePrice)
    // console.log(downPayment)
    // console.log(intrestRate)
    // console.log(loanTerm)
} 

//hPrice, dPayment, iRate, lTerm

//M = P [ r(1+r)^n ] / [ (1+r)^n - 1 ]
// P = Principal (loan amount = home price - down payment)
// r = Monthly interest rate (annual rate ÷ 12 ÷ 100)
// n = Number of payments (loan term in years × 12)