const numCrafters = document.getElementById("numCrafters");
const lInput = document.getElementById("lInput");
const lOutput = document.getElementById("lOutput");
const proliferat = document.getElementById("proliferat");
const crafterSpeed = document.getElementById("crafters");
const craftTime = document.getElementById("craftTime");
const beltSpeed = document.getElementById("beltSpeed");
const oneOneProd = document.getElementById("oneOneProd");
const twoOneProd = document.getElementById("twoOneProd");
const oneTwoProd = document.getElementById("oneTwoProd");

const box = document.querySelector(".hover-box");

box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    box.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(30, 7, 48, 1) 0%,  #111319 70%, #111319 100%)`;
});

box.addEventListener("mouseleave", () => {
    box.style.background = "#111319";
})


function calcNumOfCrafters(){

    oneOne();
    twoOne();
    oneTwo();

}

function oneOne() {

        lOutput.classList.remove("constrainte");
        lInput.classList.remove("constrainte");
    let constrainte;
    if (lOutput.value * proliferat.value > lInput.value) {
        constrainte = lOutput.value * proliferat.value;
        lOutput.classList.add("constrainte");
    }
    else {
        constrainte = lInput.value;
        lInput.classList.add("constrainte");
    }
    let temp = beltSpeed.value / ((constrainte * crafterSpeed.value) / craftTime.value);
    numCraftersOneOne.textContent = temp;
    oneOneProd.textContent = temp * lOutput.value * crafterSpeed.value* proliferat.value/ craftTime.value;
    

}

function twoOne() {
    

    let constrainte;
    if (lOutput.value * proliferat.value > lInput.value / 2) {
        constrainte = lOutput.value * proliferat.value;
    }
    else {
        constrainte = lInput.value /2;
    }
    let temp = beltSpeed.value / ((constrainte * crafterSpeed.value) / craftTime.value);
    numCraftersTwoOne.textContent = temp;
    twoOneProd.textContent = temp * lOutput.value * crafterSpeed.value* proliferat.value/ craftTime.value;
    
}
function oneTwo() {
    

    let constrainte;
    if (lOutput.value * proliferat.value /2 > lInput.value ) {
        constrainte = lOutput.value * proliferat.value /2;
    }
    else {
        constrainte = lInput.value;
    }
    let temp = beltSpeed.value / ((constrainte * crafterSpeed.value) / craftTime.value);
    numCraftersOneTwo.textContent = temp;
    oneTwoProd.textContent = temp * lOutput.value * crafterSpeed.value* proliferat.value/ craftTime.value;
    
}