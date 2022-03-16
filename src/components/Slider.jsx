import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "../images";

const Slider = () => {
  console.log(images);
  return (
    <motion.div className="carousel">
      <motion.div className="inner-carousel">
        {images.map(image => {
          return (
            <motion.div className="item">
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
