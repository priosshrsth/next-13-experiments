"use client";

import DemoPage from "src/components/demo.page";

export default async function UserPage() {
  return (
    <>
      <DemoPage config={{ next: { revalidate: 0 } }} />
    </>
  );
}
