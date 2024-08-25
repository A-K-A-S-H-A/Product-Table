// controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  res.json(user);
};

module.exports = { getUser };
