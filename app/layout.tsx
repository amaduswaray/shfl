import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHFL",
  description: "A party game",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
