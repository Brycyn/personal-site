import React, { useState } from "react";
import { motion } from "framer-motion";

interface ImageHoverProps {
  defaultImage: string;
  hoverImage: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  transitionDuration?: number;
}

const ImageHover: React.FC<ImageHoverProps> = ({
  defaultImage,
  hoverImage,
  alt,
  className = "",
  imageClassName = "",
  transitionDuration = 0.3,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Image */}
      <motion.img
        src={defaultImage}
        alt={alt}
        className={`w-full h-full object-cover ${imageClassName}`}
        animate={{
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: transitionDuration }}
      />

      {/* Hover Image */}
      <motion.img
        src={hoverImage}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${imageClassName}`}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: transitionDuration }}
      />
    </div>
  );
};

export default ImageHover;
