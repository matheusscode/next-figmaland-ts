import image1 from "../../../public/assets/images/partners/apple-app-store.svg"
import image2 from "../../../public/assets/images/partners/aplary.svg"
import image3 from "../../../public/assets/images/partners/android-icon.svg"
import image4 from "../../../public/assets/images/partners/basecamp.svg"
import image5 from "../../../public/assets/images/partners/airbnb.svg"
import image6 from "../../../public/assets/images/partners/ibm.svg"

export type BrandProps = {
  id: number;
  title: string;
  src: string;
  alt: string;
};

export const brands: BrandProps[] = [
  {
    id: 1,
    title: "Apple App Store",
    src: image1,
    alt: "Apple App Store logo Brand.",
  },
  {
    id: 2,
    title: "Aplary",
    src: image2,
    alt: "Aplary logo Brand.",
  },
  {
    id: 3,
    title: "Android",
    src: image3,
    alt: "Android logo Brand.",
  },
  {
    id: 4,
    title: "Basecamp",
    src: image4,
    alt: "Basecamp logo Brand.",
  },
  {
    id: 5,
    title: "Airbnb",
    src: image5,
    alt: "Airbnb logo Brand.",
  },
  {
    id: 6,
    title: "IBM",
    src: image6,
    alt: "IBM App Store logo Brand.",
  },
];
