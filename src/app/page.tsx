"use client";
import router from "@/router/Router";
import Header from "@/ui/Header";
import { RouterProvider } from "react-router-dom";

export default function Home() {
  return (
    <div className=" mx-3 ">
     <RouterProvider router={router} />
    </div>
  );
}
