function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var result = document.getElementById("result");

  if (weight === "" || height === "") {
    result.innerHTML = "* Please enter your weight and height.";
  } else {
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    if (bmi < 18.5) {
      result.innerHTML = "Your BMI is " + bmi + ", Under Weight.";
      document.getElementById('result').style.color='aqua';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = "Your BMI is " + bmi + ", Normal Weight.";
      document.getElementById('result').style.color='lime';
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML = "Your BMI is " + bmi + ", Over Weight.";
      document.getElementById('result').style.color='yellow';
    } else if (bmi >= 30 && bmi <= 34.9) {
      result.innerHTML = "Your BMI is " + bmi + ", Obese.";
      document.getElementById('result').style.color='orange';
    } else {
      result.innerHTML = "Your BMI is " + bmi + ", Extremely Obese.";
      document.getElementById('result').style.color='red';
    }
  }
}