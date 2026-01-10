import { useState, useEffect, useRef } from "react";
import useInView from "../hooks/useInView";
import { motion } from "framer-motion";

export default function ImageGrid() {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [ref, inView] = useInView({ threshold: 0.1 });
  const imageRefs = useRef({});

  useEffect(() => {
    if (inView && !isLoaded) {
      // Populate images as soon as the section enters view. Use requestIdleCallback
      // when available to avoid blocking critical work.
      const load = () => {
        setImages([
          { id: 1, alt: "Gallery image 1" },
          { id: 2, alt: "Gallery image 2" },
          { id: 3, alt: "Gallery image 3" },
          { id: 4, alt: "Gallery image 4" },
          { id: 5, alt: "Gallery image 5" },
          { id: 6, alt: "Gallery image 6" },
        ]);
        setIsLoaded(true);
      };

      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(load, { timeout: 200 });
        return () => window.cancelIdleCallback && window.cancelIdleCallback(id);
      } else {
        load();
      }
    }
  }, [inView, isLoaded]);

  // Lazy load images with intersection observer
  useEffect(() => {
    if (!isLoaded) return;

    const imageElements = Object.entries(imageRefs.current);
    if (imageElements.length === 0) return;

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const full = img.dataset.src;
            if (full && img.src !== full) {
              img.src = full;
              img.removeAttribute('data-src');
              img.loading = 'lazy';
              img.decoding = 'async';
              img.addEventListener("load", () => {
                setLoadedImages((prev) => new Set([...prev, full]));
              }, { once: true });
            }
            imageObserver.unobserve(img);
          }
        });
      },
      { threshold: 0.01, rootMargin: "50px" }
    );

    imageElements.forEach(([, ref]) => {
      if (ref) imageObserver.observe(ref);
    });

    return () => imageObserver.disconnect();
  }, [isLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatingImages = images.slice(0, 2);
  const remainingImages = images.slice(2);

  const ImageItem = ({ image, isFloating = false }) => {
    const fullSrc = `https://picsum.photos/800/600?random=${image.id}`;
    const placeholderSrc = `https://picsum.photos/20/15?random=${image.id}`;
    const isImageLoaded = loadedImages.has(fullSrc);

    return (
      <motion.div
        className={isFloating ? "floating-image-item" : "image-grid-item"}
        variants={itemVariants}
      >
        <div className="image-placeholder">
          <img
            ref={(el) => {
              if (el) imageRefs.current[image.id] = el;
            }}
            src={placeholderSrc}
            data-src={fullSrc}
            alt={image.alt}
            className={`lazy-image ${isImageLoaded ? "loaded" : ""}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div ref={ref} className="floating-images-container">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="floating-grid"
        >
          {floatingImages.map((image) => (
            <ImageItem key={image.id} image={image} isFloating={true} />
          ))}
        </motion.div>
      </div>

      <section className="wnsection image-grid-section">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="image-grid-container"
        >
          {remainingImages.map((image) => (
            <ImageItem key={image.id} image={image} isFloating={false} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
