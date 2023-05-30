"use client";

import { User } from "@prisma/client";
import UserCard from "src/components/user-card";
import Article from "src/components/article";
import { Suspense } from "react";
import classNames from "classnames";
import superjson from "superjson";

interface IProps {
  users?: User[];
  className?: string;
  config?: RequestInit | { next: { revalidate: false | number } };
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
) {
  const res = await fetch(input, init);
  return (await res.json()) as User[];
}

async function RawUserClientPage({ className, config }: Omit<IProps, "users">) {
  // const { data, isLoading, error, mutate } = useSWR(
  //   process.env.NEXT_PUBLIC_API_URL,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //   }
  // );
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // if (!data) return <div>no data!</div>;
  let users: User[] = [];
  if (typeof localStorage !== "undefined") {
    if (localStorage.getItem("users")) {
      users = superjson.parse(localStorage.getItem("users") || "[]");
    }
  }
  if (!users.length) {
    users = await fetcher(process.env.NEXT_PUBLIC_API_URL || "");
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("users", superjson.stringify(users));
    }
  }

  return (
    <div
      className={classNames(
        "min-h-screen flex flex-col items-center justify-center mt-4",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>

      <Article className={"my-10"} />
    </div>
  );
}

function RawUserPage({
  users,
  className,
}: Omit<IProps, "config"> & { users: User[] }) {
  return (
    <div
      className={classNames(
        "min-h-screen flex flex-col items-center justify-center mt-4",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>

      <Article className={"my-10"} />
    </div>
  );
}

const DemoPage = (props: IProps) => {
  return (
    <Suspense
      fallback={
        <div className={"text-6xl text-cyan-800 text-bolder"}>Loading...</div>
      }
    >
      {!!props.users ? (
        <RawUserPage users={props.users} className={props.className} />
      ) : (
        // @ts-expect-error Async Server Component
        <RawUserClientPage className={props.className} config={props.config} />
      )}
    </Suspense>
  );
};

export default DemoPage;
