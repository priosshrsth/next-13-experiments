import { NextPage } from "next";
import UserDetail from "src/components/user-detail.server";

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
  return [{ id: "1" }];
}

// can be added to layouts as well
// @ts-ignore
// export const dynamicParams = true;

const UserPage: NextPage<{
  params: {
    id: string;
  };
}> = ({ params }) => {
  const userId = params.id;

  return (
    <div className={"h-screen grid content-center"}>
      {/* @ts-expect-error Async Server Component */}
      <UserDetail id={userId} />
    </div>
  );
};

export default UserPage;
