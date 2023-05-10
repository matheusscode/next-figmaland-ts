import image1 from "../../../public/assets/images/gallery/image-1.svg"
import image2 from "../../../public/assets/images/gallery/image-2.svg"
import image3 from "../../../public/assets/images/gallery/image-3.svg"
import image4 from "../../../public/assets/images/gallery/image-4.svg"
import image5 from "../../../public/assets/images/gallery/image-5.svg"
import image6 from "../../../public/assets/images/gallery/image-6.svg"
import image7 from "../../../public/assets/images/gallery/image-7.svg"

export type ImageProps = {
  id: number;
  src: string;
  alt: string;
};

export const images: ImageProps[] = [
  {
    id: 1,
    src: image1,
    alt: "Drone image.",
  },
  {
    id: 2,
    src:image2,
    alt: "Image of an iPad in the pool.",
  },
  {
    id: 3,
    src: image3,
    alt: "Image of two women sitting using notebooks.",
  },
  {
    id: 4,
    src: image4,
    alt: "image of a desktop with an apple computer.",
  },
  {
    id: 5,
    src: image5,
    alt: "Image of a computer screen showing computer codes.",
  },
  {
    id: 6,
    src: image6,
    alt: "Image of a blue notebook with someone's hands working on it.",
  },
  {
    id: 7,
    src: image7,
    alt: "Image from a camera.",
  },
];
