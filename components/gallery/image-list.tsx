import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

function ImageList({
  images,
  openModal,
}: {
  images: string[];
  openModal: (index: number) => void;
}) {
  const [showAll, setShowAll] = useState(false);

  // Determine what images to show based on count and showAll state
  const visibleImages =
    images.length <= 6 || showAll ? images : images.slice(0, 5);

  // Only show the button if we have more than 6 images
  const showButton = images.length > 6;

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 duration-500"
            onClick={() => openModal(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Project image ${index + 1}`}
              width={200}
              height={120}
              className="object-cover w-[200px] h-[120px]"
            />
          </div>
        ))}

        {/* Show button only if needed and not showing all */}
        {showButton &&
          (!showAll ? (
            <Button
              variant="ghost"
              onClick={() => setShowAll(true)}
              className="bg-accent/60 h-full rounded-none hover:bg-accent/90 min-h-[120px] hover:scale-105 duration-500"
            >
              See More
            </Button>
          ) : (
            <Button
              variant="ghost"
              onClick={() => setShowAll(false)}
              className="bg-accent/60 h-full rounded-none hover:bg-accent/90 min-h-[120px] hover:scale-105 duration-500"
            >
              See Less
            </Button>
          ))}
      </div>
    </div>
  );
}

export default ImageList;
