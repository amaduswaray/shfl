import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "@styles/globals.css";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "SHFL",
  description: "A party game",
  icons: {
    icon: "/icons/shuffle.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
