import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";

import { Container, Theme } from "@radix-ui/themes";

import { Inter, Outfit } from "next/font/google";
import NavigationBar from "./NavigationBar";
import AuthProvider from "./auth/Provider";

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
      <body className={inter.className}>
        <Theme
          appearance="light"
          accentColor="iris"
          panelBackground="solid"
          radius="large"
        >
          <AuthProvider>
            <NavigationBar />
            {children}
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
