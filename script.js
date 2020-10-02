class calculator {
        constructor(previousOperandTextElement, currentOperandTextElement) {
            this.previousOperandTextElement = previousOperandTextElement;
            this.currentOperandTextElement = currentOperandTextElement;
            this.clear();
        }

        clear() {
            this.currentOperand = '';
            this.previousOperand = '';
            this.operation = undefined;
        }

        delete() {

        }

        appendNumber(number) {
            this.currentOperand = number;
        }

        chooseOperation(operation) {

        }

        compute() {

        }

        updateDisplay () {
            this.currentOperandTextElement.innerText = this.currentOperand;
        }
    };
    
   
    
const numberBtn = document.querySelectorAll('[data-number]'),
    operationBtn = document.querySelectorAll('[data-operation]'),
    equalsBtn = document.querySelector('[data-equals]'),
    deleteBtn = document.querySelector('[data-delete]'),
    allClearBtn = document.querySelector('[data-all-clear]'),
    previousOperandTextElement = document.querySelector('[date-previous-operand]'),
    currentOperandTextElement = document.querySelector('[data-current-operand]');


    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

    numberButtons.forEach( button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        })
    });




