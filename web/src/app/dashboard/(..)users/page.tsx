import prismaClient from "prisma/client";
import DemoPage from "src/components/demo.page";

export default async function DashboardUsersPage() {
  const users = await prismaClient.user.findMany({ take: 10 });
  return <DemoPage users={users} />;
}
