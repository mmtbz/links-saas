import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";

import { Container, Theme } from "@radix-ui/themes";

import { Inter, Outfit } from "next/font/google";
import NavigationBar from "./NavigationBar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Hacka - Home",
  description: "No Remote Job platform in Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme
          appearance="light"
          accentColor="iris"
          panelBackground="solid"
          radius="large"
        >
          <main className={`${inter.className} bg-gray-200 min-h-screen`}>
            <NavigationBar />
            <Container className="sm:px-5 md:px-8 lg:px-10 xl:px-12">
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
