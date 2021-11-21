function calculate(percent) {
  const inputs = document.querySelectorAll("input[type = 'number']");
  const amt = inputs[0].valueAsNumber;
  const ppl = inputs[1].valueAsNumber;
  var ans = (amt * percent) / 100 / ppl;
  var total = amt + ans * ppl;
  document.getElementById("perPerson").innerText = ans.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

document.getElementById("button1").addEventListener("click", function (e) {
  e.preventDefault();
  calculate(5);
});
document.getElementById("button2").addEventListener("click", function (e) {
  e.preventDefault();
  calculate(10);
});
document.getElementById("button3").addEventListener("click", function (e) {
  e.preventDefault();
  calculate(15);
});
document.getElementById("button4").addEventListener("click", function (e) {
  e.preventDefault();
  calculate(20);
});
document.getElementById("button5").addEventListener("click", function (e) {
  e.preventDefault();
  calculate(25);
});
document.getElementById("button6").addEventListener("click", function (e) {
  e.preventDefault();
  calculate(30);
});
document.getElementById("reset").addEventListener("click", function (e) {
  var elements = document.getElementById("myForm").elements;
  elements[0].value = "";
  elements[7].value = "";
  document.getElementById("perPerson").innerText = "0.00";
  document.getElementById("total").innerText = "0.00";
});
