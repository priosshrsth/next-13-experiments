import "src/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const revalidate = 0;
export const metadata = {
  title: "Server - ISR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>This is SSR Page</h1>
      {children}
    </div>
  );
}