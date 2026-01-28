import { prisma } from "./lib/prisma.js";

// A `main` function so that you can use async/await
async function createUser(name, email) {
  // Create user, posts, and categories
  const user = await prisma.user.create({
    data: {
      email: "ariadne6@prisma.io",
      name: "Ariadne6",
    },
  });

  console.log(returnUser);
}

main();
