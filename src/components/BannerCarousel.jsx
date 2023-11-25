"use client";

import styles from "./BannerCarousel.module.css";
import React from "react";
import Image from "next/image";
import { useSpringCarousel } from "react-spring-carousel";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const BannerCarousel = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: [
        {
          id: "item-1",
          renderItem: (
            <div className="w-screen h-[40rem]	overflow-hidden">
              <img
                src={"/test7.avif"}
                className="object-cover w-full h-[40rem] "
              />
              <div className={styles.textOverlay}>
                <p className="text-[2rem]  md:text-[4rem]">Premium</p>
                <p className="text-[2rem] md:text-[4rem]"> - Tees</p>
              </div>
            </div>
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <div className="w-screen h-[40rem]	overflow-hidden">
              <img
                src={"/test5.jpg"}
                className="object-cover w-full h-[40rem]"
              />
              <div className={styles.textOverlay}>
                <p className="text-[2rem] md:text-[4rem]">Premium Zip</p>
                <p className="text-[2rem] md:text-[4rem]">Hoodies</p>
              </div>
            </div>
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <div className="w-screen h-[40rem]	overflow-hidden">
              <img
                src={"/test6.jpg"}
                className="object-cover w-full h-[40rem]"
              />
              <div className={styles.textOverlay}>
                <p className="text-[2rem] md:text-[4rem]">Heritage</p>
                <p className="text-[2rem] md:text-[4rem]"> - Tees</p>
              </div>
            </div>
          ),
        },
        {
          id: "item-4",
          renderItem: (
            <div className="w-screen h-[40rem]	overflow-hidden">
              <img
                src={"/test4.avif"}
                className="object-cover w-full h-[40rem]"
              />
              <div className={styles.textOverlay}>
                <p className="text-[2rem] md:text-[4rem]">Heritage</p>
                <p className="text-[2rem] md:text-[4rem]"> - Tees</p>
              </div>
            </div>
          ),
        },
      ],
    });

  const scaleOut = () => {
    const currentCarouselItem = document.querySelector(
      ".spring-carousel-item-active"
    );
    if (currentCarouselItem) {
      currentCarouselItem.style.transform = "scale(0.7)";
      currentCarouselItem.style.transition =
        "transform 0.5s ease, opacity 0.5s ease";

      const textOverlay = currentCarouselItem.querySelector(
        `.${styles.textOverlay}`
      );
      if (textOverlay) {
        textOverlay.style.animation = "none";
        void textOverlay.offsetWidth; // Trigger reflow
        textOverlay.style.animation = "panIn 0.9s ease forwards";
      }

      setTimeout(() => {
        currentCarouselItem.style.transition =
          "transform 0.5s ease, opacity 0.5s ease";
      }, 0);
    }
  };

  const handleNextItem = () => {
    slideToNextItem();
    scaleOut();
  };

  const handlePrevItem = () => {
    slideToPrevItem();
    scaleOut();
  };

  return (
    <div className="relative overflow-hidden">
      <button
        className="absolute z-10 rounded-full left-5 top-1/2 transform -translate-y-1/2 px-4 py-3 bg-black text-white hover:bg-white hover:text-black transition duration-300 scale-75"
        onClick={handlePrevItem}
      >
        <HiArrowSmallLeft />
      </button>
      <div>{carouselFragment}</div>
      <button
        className="absolute z-10 rounded-full right-5 top-1/2 transform -translate-y-1/2 px-4 py-3 bg-black text-white hover:bg-white hover:text-black transition duration-300 scale-75"
        onClick={handleNextItem}
      >
        <HiArrowSmallRight />
      </button>
    </div>
  );
};

export default BannerCarousel;
