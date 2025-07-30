  const btn = document.getElementById('btn');
  btn.addEventListener('click', function(){
let currentNumber = parseInt(btn.innerHTML);
currentNumber++;
btn.innerHTML = currentNumber;
})