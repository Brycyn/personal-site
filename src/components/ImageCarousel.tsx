import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const VISIBLE_RANGE = 2; // How many images to show on each side

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate visible images for coverflow
  const getVisibleImages = () => {
    const visible = [];
    for (let i = -VISIBLE_RANGE; i <= VISIBLE_RANGE; i++) {
      let idx = (currentIndex + i + images.length) % images.length;
      visible.push({ ...images[idx], offset: i, idx });
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto min-h-[300px] lg:min-h-[533px]">
        {/* Left Arrow */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-0 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        {/* Images Row */}
        <div className="flex items-center justify-center w-full">
          {visibleImages.map(({ src, alt, offset, idx }) => {
            // Coverflow transforms
            const scale = offset === 0 ? 1 : 0.8 - 0.1 * (Math.abs(offset) - 1);
            const translateY = offset === 0 ? 0 : 20 * Math.abs(offset);
            const rotate = offset === 0 ? 0 : offset * 10;
            const zIndex = 10 - Math.abs(offset);
            const opacity =
              offset === 0 ? 1 : 0.7 - 0.2 * (Math.abs(offset) - 1);
            const marginX = offset === 0 ? "-mx-4" : "-mx-8";
            return (
              <motion.div
                key={src + idx}
                className={`flex-shrink-0 flex items-center justify-center ${marginX}`}
                style={{
                  width: 400,
                  height: 533,
                  zIndex,
                }}
                animate={{
                  scale,
                  y: translateY,
                  rotate,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={() => {
                  setCurrentIndex(idx);
                  setModalOpen(true);
                }}
              >
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    className="object-contain w-full h-full select-none"
                    draggable={false}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Right Arrow */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-0 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
            style={{ top: "50%", transform: "translateY(-50%)" }}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>
      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="mt-4 flex space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
      {/* Modal for viewing image */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 z-10"
                onClick={() => setModalOpen(false)}
              >
                <X size={32} />
              </button>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
