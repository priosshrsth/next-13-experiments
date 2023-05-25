import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prismaClient = new PrismaClient();
async function main() {
  const user = await prismaClient.user.upsert({
    where: { email: "anit@outside.tech" },
    update: {},
    create: {
      name: "Anit Shrestha",
      email: "anit@outside.tech",
      photo: "https://xsgames.co/randomusers/avatar.php?g=male",
    },
  });

  const amountOfUsers = 50;

  const users: Pick<User, "name" | "email" | "photo">[] = [];

  for (let i = 0; i < amountOfUsers; i++) {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      photo: faker.image.avatar(),
    };

    users.push(user);
  }

  await prismaClient.user.createMany({
    data: users,
    skipDuplicates: true,
  });
}

main()
  .then(() => prismaClient.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit();
  });
