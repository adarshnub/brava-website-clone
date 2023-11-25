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
            <div className="w-screen h-[40rem]	">
              <img
                src={"/test6.jpg"}
                className="object-cover w-full h-[40rem] "
              />
              <div className={styles.textOverlay}>
                <p>Text for Image 1 - Line 1</p>
                <p>Text for Image 1 - Line 2</p>
              </div>
            </div>
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <div className="w-screen h-[40rem]	">
              <img
                src={"/test5.jpg"}
                className="object-cover w-full h-[40rem]"
              />
              <div className={styles.textOverlay}>
                <p>Text for Image 2 - Line 1</p>
                <p>Text for Image 2 - Line 2</p>
              </div>
            </div>
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <div className="w-screen h-[40rem]	">
              <img
                src={"/test6.jpg"}
                className="object-cover w-full h-[40rem]"
              />
              <div className={styles.textOverlay}>
                <p>Text for Image 3 - Line 1</p>
                <p>Text for Image 3 - Line 2</p>
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
      currentCarouselItem.style.transition = "transform 0.5s ease, opacity 0.5s ease";

      const textOverlay = currentCarouselItem.querySelector(
        `.${styles.textOverlay}`
      );
      if (textOverlay) {
        textOverlay.style.animation = "none";
        void textOverlay.offsetWidth; // Trigger reflow
        textOverlay.style.animation = "panIn 0.9s ease forwards";
      }

      setTimeout(() => {
        currentCarouselItem.style.transition = "transform 0.5s ease, opacity 0.5s ease";
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
    <div>
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
