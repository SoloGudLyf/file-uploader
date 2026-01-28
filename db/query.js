import { prisma } from "./lib/prisma.js";

// A `main` function so that you can use async/await
async function createUser(name, password, role) {
  // Create user, posts, and categories
  const user = await prisma.user.create({
    data: {
      name,
      password,
      role,
    },
  });
  return user;
}

async function getUser(username) {
  const user = await prisma.user.findUnique({
    where: {
      name: username,
    },
  });
  return user;
}

async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}
export { createUser, getUser, getUserById };
