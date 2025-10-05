import React, { useState } from 'react';
import useLazyLoading from '../hooks/useLazyLoading';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjY2NjIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  ...props 
}) => {
  const [setImageRef, imageSrc, isLoaded, isInView, handleLoad] = useLazyLoading(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const errorPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';

  return (
    <div ref={setImageRef} className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={placeholder}
          alt="Loading..."
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
          {...props}
        />
      )}
      
      {/* Error placeholder */}
      {hasError && (
        <img
          src={errorPlaceholder}
          alt="Failed to load image"
          className={`${className} transition-opacity duration-300`}
          {...props}
        />
      )}
      
      {/* Actual image */}
      {imageSrc && !hasError && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${!isLoaded ? 'absolute inset-0' : ''}`}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
