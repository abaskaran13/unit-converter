// javascript

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    lengthConversion(inputEl.value)
    volumeConversion(inputEl.value)
    massConversion(inputEl.value)
})


function lengthConversion(value) {
    const mToFt = Number(value) * 3.28084
    const ftToM = Number(value) * 0.3028
    
    lengthEl.innerHTML = `${value} meters = ${mToFt.toFixed(3)} feet | ${value} feet = ${ftToM.toFixed(3)} meters`
}

function volumeConversion(value) {
    const lToGal = Number(value) * 0.264172
    const galToL = Number(value) * 3.78541
    
    volumeEl.innerHTML = `${value} liters = ${lToGal.toFixed(3)} gallons | ${value} gallons = ${galToL.toFixed(3)} liters`
}

function massConversion(value) {
    const kgToLb = Number(value) * 2.20462
    const lbToKg = Number(value) * 0.453592
    
    massEl.innerHTML = `${value} kilos = ${kgToLb.toFixed(3)} pounds | ${value} pounds = ${lbToKg.toFixed(3)} kilos`
}