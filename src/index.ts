/**
 * @function sum
 * @description Add two numbers
 */
const sum = (num1: number, num2: number): number | string => {
        if(isNaN(num1) || isNaN(num2) || !num1 || !num2 || typeof num1 === 'string' || typeof num2 === 'string') return 'Provide a number as a argument';
        return num1 + num2;
  };

export default sum;
