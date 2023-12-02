//create 3 variables for the 3 parts of calculation operation
document.addEventListener("DOMContentLoaded", function(){
    let display = document.getElementById('display');
    let num1 = '';
    let num2 = '';
    let operator = '';
    document.querySelectorAll('.num').forEach(function(number){
        number.addEventListener('click', function(){
            if (!operator){
                num1 += number.textContent; 
            }else{
                num2 += number.textContent;
            }
            display.textContent += number.textContent;
        });
    });

    document.querySelectorAll('.operator').forEach(function(op){
        op.addEventListener('click', function(){
            operator = op.textContent
            display.textContent = num1 + operator + num2;
        });
    });
   
    document.getElementById('equal-sign').addEventListener('click', function(){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Check the operation and perform the calculation
        if (operator === '+') {
            display.textContent = add(num1, num2).toString();
        } else if (operator === '-') {
            display.textContent = subtract(num1, num2).toString();
        } else if (operator === '*') {
            display.textContent = multiply(num1, num2).toString();
        } else if (operator === '/') {
            display.textContent = divide(num1, num2).toString();
        }

        num1 = display.textContent;
        num2 = '';
    })

    //create addition function
    function add(num1, num2){
        return num1 + num2;
    };
    //create subtraction function
    function subtract(num1, num2){
        return num1 - num2;
    };
    //create multiplication function
    function multiply(num1, num2){
        return num1 * num2;
    };
    //create division function
    function divide(num1, num2){
        if (num2 === 0){
            alert('please enter another number except 0');
            return NaN;
        }
        return num1 / num2;
    };
    //update the values of variables when clean button is pressed
    document.getElementById('clean').addEventListener('click', function(){
        console.log('Clean button clicked');
        num1 = '';
        num2 = '';
        operator = '';
        display.textContent = '';
    });

    //delete the last content entered
    document.getElementById('backspace').addEventListener('click', function(){
        display.textContent = display.textContent.slice(0 , -1);
    })
});

