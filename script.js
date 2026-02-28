// calculator.js

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The difference of a and b.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} - The quotient of a and b.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}

// Exporting functions for use in other modules
module.exports = {
    add,
    subtract,
    multiply,
    divide
};