const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const score = document.getElementById('score');

calculateBtn.addEventListener('click', () => {
    let Height = parseFloat(height.value);
    let newHeight = Height / 100;
    let sqrHeight = newHeight * newHeight;
    let Weight = parseFloat(weight.value);
    let BMI = Weight / sqrHeight;
    score.innerText = BMI.toFixed(2);

    if (BMI.toFixed(2)<18.6) {
        score.style.backgroundColor = "#f1c40f"
    }else if (BMI.toFixed(2)>24.6) {
        score.style.backgroundColor = "#e74c3c"
    }else {
        score.style.backgroundColor = "#2ecc71"
    }
})
