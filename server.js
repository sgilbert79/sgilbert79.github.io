const express = require('express');
const app = express();
const shopRouter = require('./routes/shop'); // Adjust the path as necessary

// Use the shop router
app.use(shopRouter);
app.use(express.json());

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
