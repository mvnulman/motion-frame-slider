import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import images from "../images";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images.map((image) => {
          return (
            <motion.div className="item" key={image}>
              <img src={image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
