"use client";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { useRouter } from "next/router";
import { Outlet, RouterProvider } from "react-router-dom";

export default function Home() {
  return (
    <div id="root" className=" mx-3 ">
     <Header />
     <Outlet />
     <Footer />
    </div>
  );
}
