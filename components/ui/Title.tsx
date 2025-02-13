"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

interface TitleProps {
  title: string;
  span?: string;
  subTitle?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  smallTitle?: boolean;
}

const Title = ({ title, span, subTitle = false, smallTitle = false, icon: Icon }: TitleProps): ReactElement => {
  const titleStyles = "styleh2 font-heading text-color_bali text-5xl font-semibold uppercase tracking-[2px] pb-1";
  const spanStyles = "absolute font-bold text-titleSpanColor text-6xl left-0 top-1/4 -z-1 opacity-40";

  const titleAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const subtitleAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.2 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <>
      {smallTitle ? (
        <motion.div 
          {...subtitleAnimation}
          className="flex font-heading items-center gap-2"
        >
          {Icon && <Icon className="text-color_bali w-8 h-8" />}
          <h3 className="text-3xl text-color_bali">{title}</h3>
        </motion.div>
      ) : subTitle ? (
        <motion.div {...subtitleAnimation} className="relative">
          <h2 className={titleStyles}>
            {title} <span className={spanStyles}>{span}</span>
          </h2>
        </motion.div>
      ) : (
        <motion.div {...titleAnimation} className="relative">
          <h2 className={titleStyles}>
            {title} <span className={spanStyles}>{span}</span>
          </h2>
        </motion.div>
      )}
    </>
  );
};

export default Title;