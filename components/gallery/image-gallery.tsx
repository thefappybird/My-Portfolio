"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "react-medium-image-zoom/dist/styles.css";
import Modal from "../shared/Modal";
import ImageList from "./image-list";

export function ImageGallery({ images }: { images: string[] }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <ImageList openModal={openModal} images={images} />
      <Modal isOpen={selectedImageIndex !== null} onClose={closeModal}>
        <div
          className="relative flex flex-col items-center "
          onClick={(event: React.MouseEvent) => event.stopPropagation()}
        >
          {selectedImageIndex !== null && (
            <div className="relative w-full overflow-hidden rounded min-h-[80vh] min-w-[80vw]">
              <Button
                variant="ghost"
                size="icon"
                className="  absolute bg-gray-500/50 text-white h-full w-fit z-11"
                onClick={goToPreviousImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className=" absolute bg-gray-500/50 text-white right-0 w-fit h-full z-11"
                onClick={goToNextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <div className=" border bg-black flex h-[80vh] w-[80vw] items-center flex-col text-black">
                    {/* Zoom Control Buttons */}
                    <div className="absolute bottom-2  z-10 flex gap-2 bg-white/80 p-1 rounded-md shadow">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => zoomIn()}
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => zoomOut()}
                      >
                        −
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => resetTransform()}
                      >
                        Reset
                      </Button>
                    </div>

                    {/* Zoomable Image */}
                    <div className="flex h-full w-full">
                      <TransformComponent
                        wrapperClass="!w-full !h-full"
                        contentClass="!w-full !h-full justify-center"
                      >
                        <Image
                          src={images[selectedImageIndex] || "/placeholder.svg"}
                          alt={`Project image ${selectedImageIndex + 1}`}
                          width={1200}
                          height={800}
                          className="h-auto w-auto select-none object-contain md:aspect-video md:object-scale-down"
                        />
                      </TransformComponent>
                    </div>
                  </div>
                )}
              </TransformWrapper>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
