import "@styles/globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import { SpotifyProvider } from "@/context/SpotifyContext";
import { getServerSession } from "next-auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body
        className={
          "antialiased bg-shfl-bg flex justify-center items-center w-screen h-screen p-2 lg:p-8"
        }
      >
        <AuthProvider session={session}>
          <SpotifyProvider>
            <div className="h-full w-full bg-inherit flex flex-col justify-center items-center max-w-lg">
              <Navbar />
              {children}
              <Footer />
            </div>
          </SpotifyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
