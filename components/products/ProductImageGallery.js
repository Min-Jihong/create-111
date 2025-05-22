import Image from 'next/image';

export function ProductImageGallery({ images }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            src={image}
            alt={`Product image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}