"use client";
import DashboardHeader from "@/components/dashboard-header";
import HomepageNavCard from "@/components/homepage-nav-card";
import { supabase } from "../utils/supabase/supabase";
import { useEffect } from "react";

const homepageNavCards = [
  { title: "Fees & Payments", description: "Home", path: "/" },
  { title: "Attendance", description: "Home", path: "/" },
  { title: "Time Table", description: "Home", path: "/" },
  { title: "Parents Portal", description: "Home", path: "/" },
];

export default function Home() {

  async function callAPI() {
    const { data } = await supabase.from("Users").select("*");
    supabase.auth.signInWithPassword({
      email: "thomsonmartinbzn@gmail.com",
      password: "123456",
    });
    console.log("API called");
    console.log(data);
  }

  callAPI();

  return (
    <div className="bg-gray-100 min-h-[100vh] w-full flex items-center justify-center">
      <DashboardHeader />
      <div className="h-full w-full grid grid-cols-2 gap-4 p-4">
        {/* First column - single full height div */}
        <div className="bg-white rounded-lg shadow-md h-full">
          {homepageNavCards.map(({ title, description, path }) => (
            <HomepageNavCard
              title={title}
              description={description}
              path={path}
            />
          ))}
        </div>

        {/* Second column - two vertically stacked divs */}
        <div className="flex flex-col gap-4 h-full">
          <div className="bg-white rounded-lg shadow-md flex-1">a</div>
          <div className="bg-white rounded-lg shadow-md flex-1">b</div>
        </div>
      </div>
    </div>
  );
}
