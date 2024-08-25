const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
