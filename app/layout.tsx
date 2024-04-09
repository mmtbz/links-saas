"use client"
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";

import { Theme } from "@radix-ui/themes";

import { Inter, Outfit } from "next/font/google";
import DashboardNavBar from "./DashboardNavBar";
import QueryClientProvider from "./QueryClientProvider";
import AuthProvider from "./auth/Provider";
import { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

// export const metadata: Metadata = {
//   title: "Worklane - Home",
//   description: "No Remote Job platform in Africa",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <Theme accentColor="iris" panelBackground="solid" radius="large">
            <AuthProvider>
              {pathName !== "/new-dash" && <DashboardNavBar />}
              {children}
            </AuthProvider>
          </Theme>
        </QueryClientProvider>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
            },
            error: {
              style: {
                background: "red",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
