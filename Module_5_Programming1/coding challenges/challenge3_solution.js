let weeklyIncome = parseInt(prompt("What is your weekly income?"))
let foodCost = parseInt(prompt("How much do you spend on food?"))
let housingCost = parseInt(prompt("How much do you spend on housing?"))
let transporationCost = parseInt(prompt("How much do you spend on transportation?"))
let otherCost = parseInt(prompt("How much do you spend on other cost?"))
const yearlySavings = parseInt(prompt("How much do you want to save in a year?"))

let weeklyCost = foodCost + housingCost + transporationCost + otherCost

if(yearlySavings % 52 >= weeklyIncome){
    console.log("Good, let's start saving!");

}else{
    (weeklyIncome - weeklyCost)
    console.log("You need a raise.");
}