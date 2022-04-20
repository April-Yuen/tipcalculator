class Calculator{
  constructor(currentOperandTextElement){
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
}

clear(){
  this.currentOperand = ''
  this.operation = undefined

}

appendNumber(number){

}

chooseOperation(operation){

}

updateDisplay(){

}

document.querySelector("#tenPercent").addEventListener("click", runten);
document.querySelector("#fifteenPercent").addEventListener("click", runfifteen);
document.querySelector("#twentyPercent").addEventListener("click", runtwenty);
document.querySelector("#seven").addEventListener("click", inputSeven);

const numberButtons = document.querySelectorAll('[data-number]');
const allClearButton = document.querySelector('[data-all-clear]');
const operationButtons = document.querySelectorAll('[data-operation]');
const display = document.querySelector("#placeToShowTip");



function runten(total){
  let tipTen = document.querySelector("#totalBill").value;
  tipTen = .10 * tipTen;
  document.querySelector("#placeToShowTip").innerText = tipTen;
}

function runfifteen(total){
  let tipFifteen = document.querySelector("#totalBill").value;
  tipFifteen = .15 * tipFifteen;
  document.querySelector("#placeToShowTip").innerText = tipFifteen;
}

function runtwenty(total){
  let tipTwenty = document.querySelector("#totalBill").value;
  tipTwenty = .20 * tipTwenty;
  document.querySelector("#placeToShowTip").innerText = tipTwenty;
}
