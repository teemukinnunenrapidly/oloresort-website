'use client';

import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false
}: CloudinaryImageProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // If Cloudinary is not configured, show placeholder
  if (!cloudName) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm text-center px-4">
          {alt}
          <br />
          <span className="text-xs">(Configure Cloudinary)</span>
        </span>
      </div>
    );
  }

  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      crop="fill"
      gravity="auto"
      sizes="100vw"
    />
  );
}
