"use client";

import BannerCarousel from "@/components/BannerCarousel";
import Navbar from "@/components/Navbar";
import SlideshowImg from "@/components/SlideshowImg";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col ">
      {showTopBar && <TopBar />}
      <Navbar />
      <BannerCarousel />
      <SlideshowImg />
    </div>
  );
}
