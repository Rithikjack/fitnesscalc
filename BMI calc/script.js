function calculateBMI() {
    let weightInput = prompt("Enter your weight in kilograms (kg):");
    let heightInput = prompt("Enter your height in centimeters (cm):");

    
    let weight = parseFloat(weightInput);
    let heightCm = parseFloat(heightInput);

    
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById("result").innerHTML = `
            <span style="color: red;">Please enter valid positive numbers for weight and height.</span>
        `;
        return;
    }

    
    let heightM = heightCm / 100;
    let bmi = weight / (heightM * heightM);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    
    document.getElementById("result").innerHTML = `
        Your BMI is: <strong>${bmi.toFixed(2)}</strong><br>
        Category: <strong>${category}</strong>
    `;
}
