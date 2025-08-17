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
import SessionManager from "@/components/layouts/SessionManager";
import AudioPlayer from "@/components/layouts/AudioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// --- SEO METADATA ---
// This is the core of your app's SEO.
export const metadata: Metadata = {
  // TODO: Replace with your actual production domain name.
  metadataBase: new URL("https://umuyoboro-biooids.vercel.app"),

  // The title template allows child pages to set their own title.
  // For example, a page with `title: "About"` will become "About | UMUYOBORO".
  title: {
    default: "Umuyoboro | Rwanda Driving License Quiz & Exam Practice",
    template: `%s | Umuyoboro`,
  },

  // The main description for search engine results.
  description:
    "Ace your Rwandan provisional driving test with Umuyoboro. Practice with real exam questions, take timed quizzes, and track your progress. The best app for Rwanda's driving license exam.",

  // Keywords help search engines understand your content.
  keywords: [
    "Rwanda driving license",
    "provisional test",
    "quiz",
    "exam practice",
    "Umuyoboro",
    "ibizamini byo gutwara",
    "permi",
    "uruhushya rwo gutwara",
  ],

  // --- Open Graph (for Facebook, WhatsApp, etc.) ---
  openGraph: {
    title: "Umuyoboro | Rwanda Driving License Quiz & Exam Practice",
    description:
      "Practice for your Rwandan driving license test with real exam questions and timed quizzes.",
    // This is the image you provided.
    images: [
      {
        url: "https://res.cloudinary.com/djtww0vax/image/upload/v1755267077/logo_p7wco8.jpg",
        width: 1200,
        height: 630,
        alt: "Umuyoboro App Logo",
      },
    ],
    type: "website",
    url: "/",
    siteName: "Umuyoboro",
    locale: "en_US",
  },

  // --- Twitter Card (for X) ---
  twitter: {
    card: "summary_large_image",
    title: "Umuyoboro | Rwanda Driving License Quiz & Exam Practice",
    description:
      "Practice for your Rwandan driving license test with real exam questions and timed quizzes.",
    images: [
      "https://res.cloudinary.com/djtww0vax/image/upload/v1755267077/logo_p7wco8.jpg",
    ],
  },

  // Other important SEO tags
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Umuyoboro Team", url: "/" }],
  creator: "Umuyoboro",
};

/**
 * The root layout for the entire application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Set the language to Kinyarwanda if that's your primary audience, or keep 'en'.
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ReduxProvider>
          <AuthInitializer>
            <SocketProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <AudioPlayer />
                <Toaster position="top-center" />
                <AuthModal />
                <SessionManager />
                {children}
              </ThemeProvider>
            </SocketProvider>
          </AuthInitializer>
        </ReduxProvider>
      </body>
    </html>
  );
}
