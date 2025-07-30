   const res = document.getElementById('res');
        const buttons = document.querySelectorAll('.btn');

        function handleButtonClick(event) {
            const button = event.target;
            const value = button.innerHTML;

            if (value === 'C') {
                res.innerHTML = '';
            } else if (value === '=') {
                try {
                    const expression = res.innerHTML;
                    
                    // Use a regex to find the operator and operands
                    const operatorMatch = expression.match(/([01]+)([+\-*/])([01]+)/);
                    if (!operatorMatch) return;

                    const [, operand1Str, operator, operand2Str] = operatorMatch;

                    const operand1 = parseInt(operand1Str, 2);
                    const operand2 = parseInt(operand2Str, 2);

                    let result;
                    switch (operator) {
                        case '+': result = operand1 + operand2; break;
                        case '-': result = operand1 - operand2; break;
                        case '*': result = operand1 * operand2; break;
                        case '/': result = Math.floor(operand1 / operand2); break;
                        default: return;
                    }

                    res.innerHTML = result.toString(2);
                } catch (e) {
                    res.innerHTML = 'Error';
                }
            } else {
                res.innerHTML += value;
            }
        }

        document.getElementById('btns').addEventListener('click', handleButtonClick);