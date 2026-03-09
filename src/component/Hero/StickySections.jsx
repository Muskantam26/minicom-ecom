import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button1 } from "../Btn/Button1";

const StickyCard = ({ item, index, totalCards }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scale down slightly as the next card comes over it
  const targetScale = 1 - ((totalCards - index) * 0.05); 
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{
        zIndex: index + 10,
        marginTop: index === 0 ? "0" : "10vh",
        scale,
        opacity,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-[10vh] w-full h-[80vh] flex flex-col-reverse md:flex-row overflow-hidden shadow-2xl shadow-black/5 rounded-3xl border border-gray-100 bg-white"
    >
      {/* Left Side: Content */}
      <div className="w-full md:w-1/2 bg-[#f9f9f9] flex flex-col justify-center items-start p-6 md:p-12 lg:p-24 h-1/2 md:h-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-gray-900 uppercase mb-3 md:mb-6 tracking-wide leading-tight"
        >
          {item.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 text-sm md:text-xl  text-justify leading-relaxed"
        >
          {item.description}
        </motion.p>
        {item.buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5"
          >
            <Button1
              variant="primary"
              text={item.buttonText}
              icon={<ArrowUpRight size={16} />}
              iconPosition="right"
              className=""
            />
          </motion.div>
        )}
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const StickySections = ({ data }) => {
  return (
    <div className="relative w-full pb-[10vh]">
      {data.map((item, index) => (
        <StickyCard key={index} item={item} index={index} totalCards={data.length} />
      ))}
    </div>
  );
};

export default StickySections;
