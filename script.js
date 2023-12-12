// Grade-Calculator-Start
document.getElementById("btn").addEventListener("click", button);

//Output
function button() {
  let val1 = +document.getElementById("value1").value;
  let val2 = +document.getElementById("value2").value;
  let val3 = +document.getElementById("value3").value;
  let val4 = +document.getElementById("value4").value;
  let val5 = +document.getElementById("value5").value;

  document.getElementById("result").innerHTML = "";

  let sum = (val1 + val2 + val3 + val4 + val5) / 5;
  document.getElementById("result").innerHTML = sum;
}
