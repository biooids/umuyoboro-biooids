// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/ThemeProvider";
import { Toaster } from "react-hot-toast";
import SocketProvider from "@/components/layouts/SocketProvider";
import AuthInitializer from "@/components/layouts/AuthInitializer";
import ReduxProvider from "@/components/layouts/ReduxProvider";
import { AuthModal } from "@/components/pages/auth/AuthModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], // <-- ADD THIS LINE
});

export const metadata = {
  title: "My App",
  description: "My new application",
};

/**
 * The root layout for the entire application.
 * It sets up global styles, fonts, and context providers.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ReduxProvider>
          <AuthInitializer>
            <SocketProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                <Toaster position="top-center" />
                <AuthModal />
                {children}
              </ThemeProvider>
            </SocketProvider>
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
