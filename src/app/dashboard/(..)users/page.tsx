import prismaClient from "prisma/client";
import UserCard from "src/components/user-card.client";
import Article from "src/components/article";

export default async function DashboardUsersPage() {
  const users = await prismaClient.user.findMany({ take: 10 });
  return (
    <div
      className={"min-h-screen flex flex-col items-center justify-center mt-4"}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {users.map((user) => (
          <UserCard user={user} key={user.id} showId={true} />
        ))}
      </div>

      <Article className={"my-10"} />
    </div>
  );
}
