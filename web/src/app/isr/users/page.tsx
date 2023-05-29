import prismaClient from "prisma/client";
import DemoPage from "src/components/demo.page";

const getUsers = async () => {
  return prismaClient.user.findMany({
    take: 10,
  });
};

export default async function UserPage() {
  const users = await getUsers();

  return <DemoPage users={users} />;
}
