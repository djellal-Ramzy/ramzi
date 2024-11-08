import React from "react";
import { motion } from "framer-motion";
const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
function reserveIndex (index) {
  const total = 6;
  return (total - index - 1);
};
export default function Stair() {  
  return (
    <>
   
      {[...Array(6)].map((_,index) => {
          return (
            <motion.div   key={index}
              variants={StairAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reserveIndex(index) * 0.1,
              }}
              className="h-full w-full bg-white relative"/>
          )
        })
      }
    </>
  );
}
