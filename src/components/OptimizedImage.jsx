import { useState, useEffect, useRef } from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  placeholder = "blur",
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder === "blur" ? "" : src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // If priority loading, load immediately
    if (priority) {
      setImageSrc(src);
      return;
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Generate WebP source if original is not WebP
  const webpSrc = src?.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const isWebpSupported = webpSrc !== src;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      ref={imgRef}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {placeholder === "blur" && !imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
      )}

      {/* Error fallback */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded">
          <span className="text-sm">Image failed to load</span>
        </div>
      )}

      {/* Actual image with WebP support */}
      {imageSrc && !imageError && (
        <picture>
          {isWebpSupported && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={imageSrc}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            width={width}
            height={height}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
