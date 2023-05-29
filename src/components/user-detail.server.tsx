import prismaClient from "prisma/client";
import UserCard from "src/components/user-card.client";
import classNames from "classnames";

interface IProps {
  id: string;
  className?: string;
}
export default async function UserDetail({ id, className }: IProps) {
  const user = await prismaClient.user.findFirstOrThrow({
    where: {
      id,
    },
  });
  return (
    <div className={classNames(className)}>
      <UserCard user={user} />
    </div>
  );
}
