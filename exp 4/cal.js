function calculate(operation, num1, num2) {
    return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    reject('Invalid input. Both inputs must be numbers.');
    return;
    }
    switch (operation) {
    case 'add':
    resolve(num1 + num2);
    break;
    case 'subtract':
    resolve(num1 - num2);
    break;
    case 'multiply':
    resolve(num1 * num2);
    break;
    case 'divide':
    if (num2 === 0) {
    reject('Division by zero is not allowed.');
    } else {
    resolve(num1 / num2);
    
    }
    break;
    default:
    reject('Invalid operation. Supported operations: add, subtract, multiply,divide.');
    }
    });
    }
    // Example
    calculate('add', 5, 3)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
    calculate('subtract', 8, 2)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
    calculate('multiply', 4, 6)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
    calculate('divide', 10, 0)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));
    calculate('power', 2, 3)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));