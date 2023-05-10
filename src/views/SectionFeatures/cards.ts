import alienVector from "../../../public/assets/images/vectors/alien-vector.svg";
import infiniteVector from "../../../public/assets/images/vectors/alien-vector.svg";
import cutleryVector from "../../../public/assets/images/vectors/alien-vector.svg";

export type FeatureCardItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
  text: string;
}

export const featuresCards: FeatureCardItem[] = [
  {
    id: 1,
    src: cutleryVector,
    alt: "Cutlery Vector.",
    title: "A Singe source off truth",
    text: "When you add work to your Slate calendar we automatically calculate useful insights.",
  },
  {
    id: 2,
    src: alienVector,
    alt: "Alien Vector.",
    title: "Intuitive Interface",
    text: "When you  add work to your Sllate calendar we automatically calculate useful insights",
  },
  {
    id: 3,
    src: infiniteVector,
    alt: "Infinite Vector.",
    title: "Or with rules",
    text: "When you  add work to your Sllate calendar we automatically calculate useful insights",
  },
];
