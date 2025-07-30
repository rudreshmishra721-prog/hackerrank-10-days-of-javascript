
const btn5 = document.getElementById('btn5');


const values = ['1', '2', '3', '6', '9', '8', '7', '4'];


const buttonIds = ['btn1', 'btn2', 'btn3', 'btn6', 'btn9', 'btn8', 'btn7', 'btn4'];

btn5.onclick = () => {
    values.unshift(values.pop());

    for (let i = 0; i < buttonIds.length; i++) {
        document.getElementById(buttonIds[i]).innerHTML = values[i];
    }
};