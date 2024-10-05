import type { Metadata } from "next";
import AuthProvider from "@/context/AuthContext";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "SHFL",
  description: "A party game",
  icons: {
    icon: "/icons/shuffle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
