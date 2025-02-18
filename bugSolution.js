const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    const result = await someAsyncOperation();
    res.send(result);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve('Success!');
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
}