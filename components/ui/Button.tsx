"use client";

import { motion, MotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Add, Download } from "@mui/icons-material";

const buttonVariants = cva(
  "w-1/2 relative inline-block px-8 py-3 font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        contact: [
          "w-2/5 bg-gradient-to-br from-cyan-300/80 via-blue-500 to-indigo-600",
          "hover:bg-[length:400%_400%] bg-[length:200%_200%]",
          "border-cyan-300/20"
        ],
        cv: [
          "w-2/5 bg-gradient-to-br from-purple-400/90 via-indigo-500 to-sky-400",
          "hover:bg-[length:400%_400%] bg-[length:200%_200%]",
          "border-purple-300/20"
        ],
      },
    },
    defaultVariants: {
      variant: "contact",
    },
  }
);

interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  download?: boolean;
  fileName?: string;
}

type CombinedProps = ButtonProps & MotionProps;

const Button = forwardRef<HTMLAnchorElement, CombinedProps>(
  (
    {
      className,
      variant,
      href = "#",
      download = false,
      fileName = "cv.pdf",
      // Props Motion
      initial = { opacity: 0, y: 20 },
      animate = { opacity: 1, y: 0 },
      whileHover = { scale: 1.05 },
      whileTap = { scale: 0.95 },
      transition = { duration: 0.5 },
      children,
      ...props
    },
    ref
  ) => {
    const MotionLink = motion.a;

    return (
      <MotionLink
        ref={ref}
        href={download ? `/${fileName}` : href}
        download={download ? fileName : undefined}
        className={cn(buttonVariants({ variant, className }))}
        initial={initial}
        animate={animate}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        {...props}
      >
        {children || (
          <>
            <span>
              {variant === "cv" ? "Télécharger le CV" : "Contacter"}
            </span>
            {variant === "cv" ? <Download /> : <Add />}
          </>
        )}
      </MotionLink>
    );
  }
);

Button.displayName = "Button";

export default Button; // Export par défaut
export { buttonVariants }; // Export nommé pour les variants