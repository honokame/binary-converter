document.getElementById("convert").addEventListener("click", convertToBinary);
document.getElementById("copy").addEventListener("click", copyBinary);

function convertToBinary() {
  const inputDecimal = document.getElementById("inputDecimal").value;
  const outputBinary = document.getElementById("outputBinary");

  const decimalNumber = parseInt(inputDecimal, 10);

  if (isNaN(decimalNumber)) {
    outputBinary.textContent = "無効な入力です";
  } else {
    const result = decimalNumber.toString(2);
    const zerocheck = 4 - (result.length % 4);
    if (zerocheck == 4) {
      outputBinary.textContent = result;
    } else {
      outputBinary.textContent = "0".repeat(zerocheck) + result;
    }
  } 
}

function copyBinary() {
  const outputBinary = document.getElementById("outputBinary");
  const copyBinary = document.getElementById("copy");
  navigator.clipboard.writeText(outputBinary.textContent);
}