import { useState, useEffect, useRef } from 'react';

const useLazyLoading = (src, options = {}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsInView(true);
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
          }
        );
        observer.observe(imageRef);
      } else {
        // Fallback for browsers without IntersectionObserver
        setImageSrc(src);
      }
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, src, options]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return [setImageRef, imageSrc, isLoaded, isInView, handleLoad];
};

export default useLazyLoading;
