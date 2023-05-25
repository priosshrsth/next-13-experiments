"use client";
import Article from "src/components/article";
import UserTable, { IUser } from "src/components/users.table";

export default async function UserPage() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      return json as IUser[];
    });
  return (
    <div
      className={"min-h-screen flex flex-col items-center justify-center mt-4"}
    >
      <div className={"w-full"}>
        <UserTable users={users} />
      </div>

      <Article className={"my-10"} />
    </div>
  );
}
