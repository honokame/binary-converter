document.getElementById('convert').addEventListener('click', convertToBinary);

function convertToBinary(){
  const inputDecimal = document.getElementById('inputDecimal').value;
	const outputBinary = document.getElementById('outputBinary');
  
	const decimalNumber = parseInt(inputDecimal, 10);
	const result = decimalNumber.toString(2);
  outputBinary.textContent = result;
}