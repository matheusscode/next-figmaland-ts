import avatar1 from "../../../public/assets/images/avatars/avatar1.svg"
import avatar2 from "../../../public/assets/images/avatars/avatar2.svg"
import avatar3 from "../../../public/assets/images/avatars/avatar3.svg"
import avatar4 from "../../../public/assets/images/avatars/avatar4.svg"

export type TestimonialsCardProps = {
  id: number;
  name: string;
  office: string;
  comment: string;
  src: string;
  alt: string;
};

export const testimonialCards: TestimonialsCardProps[] = [
  {
    id: 1,
    src: avatar1,
    alt: "Claire Bell avatar.",
    name: "Claire Bell",
    office: "Product Designer",
    comment: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year. your financial goal for the month and year.",
  },
  {
    id: 2,
    src: avatar2,
    alt: "Francisco Lane avatar.",
    name: "Francisco Lane",
    office: "Front End Developer",
    comment: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    id: 3,
    src: avatar3,
    alt: "Ralph Fisher avatar.",
    name: "Ralph Fisher",
    office: "UI / UX Designer",
    comment: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
  {
    id: 4,
    src: avatar4,
    alt: "Jorge Murphy avatar.",
    name: "Jorge Murphy",
    office: "Design System",
    comment: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
  },
];
