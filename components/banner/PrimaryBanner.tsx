"use client";

import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../Button";
import "swiper/css";
import { motion } from "framer-motion";
import { childVariants, containerVariants } from "./anim";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerData } from "@/data";

const PrimaryBanner = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Autoplay]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) return <p>Loading...</p>; // TODO: this will be a carousel loading

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      initialSlide={1}
      className="mySwiper rounded-xl overflow-hidden w-full h-[470px] relative"
    >
      {bannerData.primary.map((data, idx) => (
        <SwiperSlide key={idx}>
          <div className=" flex items-center w-full h-full">
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.12 }}
              transition={{ duration: 5 }}
              className="absolute rounded-xl w-full h-full"
            >
              <Image
                src={data.img}
                alt={data.title}
                width={1000}
                height={700}
                className="w-full h-full rounded-xl"
              />
            </motion.div>

            <div className="flex flex-col gap-6 items-start relative z-20 ml-10">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-col gap-3 relative z-20"
              >
                <motion.h4
                  variants={childVariants}
                  className="uppercase text-white font-bold text-3xl"
                >
                  {data.title}
                </motion.h4>
                <motion.p
                  variants={childVariants}
                  className="uppercase text-white font-semibold text-sm"
                >
                  {data.desc}
                </motion.p>
                <motion.p
                  variants={childVariants}
                  className="text-accentLightLime font-bold text-xl"
                >
                  From ${data.price}
                </motion.p>
              </motion.div>

              {/* btn */}
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.32, 0, 0.67, 0],
                  },
                }}
              >
                <Button isPrimary={true} />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PrimaryBanner;
