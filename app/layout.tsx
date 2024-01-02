import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";

import { Container, Theme } from "@radix-ui/themes";

import { Outfit } from "next/font/google";
import NavigationBar from "./NavigationBar";

const outfit = Outfit({
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
          <main className={`${outfit.className} bg-gray-100 min-h-screen`}>
            <NavigationBar />
            <Container className="px-2 sm:px-5 md:px-8 lg:px-10 xl:px-12">
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
