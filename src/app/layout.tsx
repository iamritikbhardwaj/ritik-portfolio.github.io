"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "@/router/Router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>
      
      <RouterProvider router={router} />
      <Outlet />
    </Suspense>
        
      </body>
    </html>
  );
}
