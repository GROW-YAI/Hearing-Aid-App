// Image preloader utility for critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (imageUrls) => {
  return Promise.all(imageUrls.map(preloadImage));
};

// Preload critical images that should load immediately
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/src/assets/images/logo.png',
    '/src/assets/images/ear.png',
    '/src/assets/images/hearing.jpg'
  ];
  
  return preloadImages(criticalImages);
};
