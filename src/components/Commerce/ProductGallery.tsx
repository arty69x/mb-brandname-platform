import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [active, setActive] = useState(0);

  if (safeImages.length === 0) {
    return <p className="text-sm text-[#666666]">No images available.</p>;
  }

  return (
    <div>
      <div className="relative mb-4 aspect-square overflow-hidden rounded-lg border border-[#e5e5e5]">
        <Image src={safeImages[active]} alt={title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {safeImages.map((image, index) => (
          <button key={image} onClick={() => setActive(index)} aria-label={`Select image ${index + 1}`} className="relative aspect-square overflow-hidden rounded-md border border-[#e5e5e5] focus-visible:ring-2 focus-visible:ring-[#111111]">
            <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  );
}
