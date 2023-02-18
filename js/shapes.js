let serial = 0;

// common function for getting input value from first two cards
function getInputFieldValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    
    if (inputFieldValue <= 0 || inputFieldValue == "" || isNaN(inputFieldValue)){
        return alert('Please Provide Valid Number');
    }
    else {
        return inputFieldValue;
    }
    
}

// common function for getting text value from last four cards
function getInputTextValue(id) {
    const inputText = document.getElementById(id);
    const inputTextValue = inputText.innerText;
    return parseFloat(inputTextValue);
}

// first card**********
document.getElementById("first-card-btn").addEventListener("click", function() {
serial += 1;
// const triangleB = document.getElementById("card-one-input-one");
// const triangleBValue = triangleB.value;

// const triangleH = document.getElementById("card-one-input-two");
// const triangleHValue = triangleH.value;

// const sum = 0.5 * triangleBValue * triangleHValue;

const sum = 0.5 * getInputFieldValue("card-one-input-one") * getInputFieldValue("card-one-input-two");
const name = "Triangle";

displayData(sum, name);

})

// second card**********
document.getElementById("second-card-btn").addEventListener("click", function() {
serial += 1;
// const rectangleW = document.getElementById("card-two-input-one");
// const rectangleWValue = rectangleW.value;

// const rectangleL = document.getElementById("card-two-input-two");
// const rectangleLValue = rectangleL.value;

const sum = getInputFieldValue("card-two-input-one") * getInputFieldValue("card-two-input-two");
const name = "Rectangle";

displayData(sum, name);
})

// third card**********
document.getElementById("third-card-btn").addEventListener("click", function() {
serial += 1;
// const parallelogramB = document.getElementById("card-three-input-one");
// const parallelogramBValue = parallelogramB.innerText;

// const parallelogramH = document.getElementById("card-three-input-two");
// const parallelogramHValue = parallelogramH.innerText;

// const sum = parseFloat(parallelogramBValue) * parseFloat(parallelogramHValue);

const sum = getInputTextValue("card-three-input-one") * getInputTextValue("card-three-input-two");
const name = "Parallelogram";

displayData(sum, name);
})

// forth card**********
document.getElementById("forth-card-btn").addEventListener("click", function() {
serial += 1;
// const rhombusD1 = document.getElementById("card-four-input-one");
// const rhombusD1Value = rhombusD1.innerText;

// const rhombusD2 = document.getElementById("card-four-input-two");
// const rhombusD2Value = rhombusD2.innerText;

// const sum = 0.5 * parseFloat(rhombusD1Value) * parseFloat(rhombusD2Value);

const sum = 0.5 * getInputTextValue("card-four-input-one") * getInputTextValue("card-four-input-two");
const name = "Rhombus";

displayData(sum, name);
})

// fifth card**********
document.getElementById("fifth-card-btn").addEventListener("click", function() {
serial += 1;
// const pentagonP = document.getElementById("card-five-input-one");
// const pentagonPValue = pentagonP.innerText;

// const pentagonB = document.getElementById("card-five-input-two");
// const pentagonBValue = pentagonB.innerText;

// const sum = 0.5 * parseFloat(pentagonPValue) * parseFloat(pentagonBValue);

const sum = 0.5 * getInputTextValue("card-five-input-one") * getInputTextValue("card-five-input-two");
const name = "Pentagon";

displayData(sum, name);
})

// sixth card**********
document.getElementById("sixth-card-btn").addEventListener("click", function() {
serial += 1;
// const ellipseA = document.getElementById("card-six-input-one");
// const ellipseAValue = ellipseA.innerText;

// const ellipseB = document.getElementById("card-six-input-two");
// const ellipseBValue = ellipseB.innerText;

// const sum = 3.14 * parseFloat(ellipseAValue) * parseFloat(ellipseBValue);

const sum = parseFloat((3.14 * getInputTextValue("card-six-input-one") * getInputTextValue("card-six-input-two")).toFixed(2));
const name = "Ellipse";

displayData(sum, name);
})

// common function to display data
function displayData(sum, name) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td>${sum}cm<sup>2</sup></td>
      <td>
      <button class=" bg-blue-600 my-5 px-2 py-2 text-white font-medium rounded-lg">Convert to  <span>m<sup>2</sup></span></button>
      </td>
      
    `;
    container.appendChild(tr);
}


// Random background color functions
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 
// card 1
document.getElementById('card-bg-hover-1').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = randomColor();
});

document.getElementById('card-bg-hover-1').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "white";
});
// card 2
document.getElementById('card-bg-hover-2').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = randomColor();
});
document.getElementById('card-bg-hover-2').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "white";
});

// card 3
document.getElementById('card-bg-hover-3').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = randomColor();
});
document.getElementById('card-bg-hover-3').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "white";
});

// card 4
document.getElementById('card-bg-hover-4').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = randomColor();
});
document.getElementById('card-bg-hover-4').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "white";
});

// card 5
document.getElementById('card-bg-hover-5').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = randomColor();
});
document.getElementById('card-bg-hover-5').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "white";
});

// card 6
document.getElementById('card-bg-hover-6').addEventListener('mouseenter', event => {
    event.target.style.backgroundColor = randomColor();
});
document.getElementById('card-bg-hover-6').addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = "white";
});