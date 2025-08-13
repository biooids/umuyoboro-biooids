// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/ThemeProvider";
import { Toaster } from "react-hot-toast";
import SocketProvider from "@/components/layouts/SocketProvider";
import AuthInitializer from "@/components/layouts/AuthInitializer"; // <-- IMPORT
import ReduxProvider from "@/components/layouts/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "My App",
  description: "My new application",
};

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
            {" "}
            {/* <-- WRAP HERE */}
            <SocketProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                <Toaster position="top-center" />
                {children}
              </ThemeProvider>
            </SocketProvider>
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
