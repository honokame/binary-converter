document.getElementById("convert").addEventListener("click", convertToBinary);

function convertToBinary() {
  const inputDecimal = document.getElementById("inputDecimal").value;
  const outputBinary = document.getElementById("outputBinary");

  const decimalNumber = parseInt(inputDecimal, 10);
  if (isNaN(decimalNumber)) {
    outputBinary.textContent = "無効な入力です";
  } else {
    const result = decimalNumber.toString(2);
    outputBinary.textContent = result;
  }
}
