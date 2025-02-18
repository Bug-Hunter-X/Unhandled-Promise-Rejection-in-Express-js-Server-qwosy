const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    // Error handling in the promise chain is incomplete
    console.error('Error:', err);
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5; // 50% chance of success
    setTimeout(() => {
      if (success) {
        resolve('Success!');
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
}