import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SignUp from "@/components/signUp";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scooter",
  description:
    "A sccoter website which gives us an overview about the scooter.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider cssVarsRoot={undefined}>
          <Header />
          <main>{children}</main>
          <SignUp />
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
