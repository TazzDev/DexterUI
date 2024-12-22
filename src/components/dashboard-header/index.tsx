"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export interface User {
  name: string;
  email: string;
  image: string;
}

export interface DashboardHeaderProps {
  user: User;
  onLogout: () => void;
}

const styles = {
  header:
    "bg-gray-800 fixed top-0 left-0 right-0 h-[100px] rounded-t-[5px] rounded-b-[40px]  mr-2 ml-2 flex justify-center items-center text-white transition-transform duration-300",
};

const useScrollDirection = () => {
  // Initialize states inside a useEffect to avoid hydration mismatch
  const [scrollDirection, setScrollDirection] = useState({
    visible: true,
    lastScrollY: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      // Show header at the very top of the page
      if (currentScrollY < 10) {
        setScrollDirection((prev) => ({
          ...prev,
          visible: true,
          lastScrollY: currentScrollY,
        }));
        return;
      }

      // Determine scroll direction and distance
      const isScrollingDown = currentScrollY > lastScrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only trigger hide/show if scrolled more than 5px
      if (scrollDifference > 5) {
        setScrollDirection((prev) => ({
          visible: !isScrollingDown,
          lastScrollY: currentScrollY,
        }));
      }

      lastScrollY = currentScrollY;
    };

    // Add event listener
    window.addEventListener("scroll", updateScrollDirection);

    // Cleanup
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []); // Empty dependency array means this only runs once on mount

  return scrollDirection.visible;
};

const DashboardHeader = () => {
  const visible = useScrollDirection();
  return (
    <div
      className={`${styles.header} ${
        visible ? "translate-y-0" : "-translate-y-24"
      } hover:translate-y-0 shadow-xl shadow-gray-400/50`}
    >
      <div className="relative group">
        <Image src="/logo_dex.png" alt="Dexter" width={100} height={120} priority/>
      </div>
      <div className="absolute mr-[2%] right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer ml-auto">
        <FaUser className="h-6 w-6 text-teal-800" aria-hidden="true" />
      </div>
    </div>
  );
};

export default DashboardHeader;
