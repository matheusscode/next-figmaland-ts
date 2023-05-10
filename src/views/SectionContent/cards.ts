import macBookPro from "../../../public/assets/images/contents/macbook-pro.svg"
import boardsNotifications from "../../../public/assets/images/contents/boards-notifications.svg"

export type ContentCardItem = {
  id: number;
  title: string;
  text: string;
  buttonText: string;
  src: string;
  alt: string;
};

export const contentCards: ContentCardItem[] = [
  {
    id: 1,
    title: "Work",
    text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
    buttonText: "Sign Up",
    src: macBookPro,
    alt: "MacBook Pro image.",
  },
  {
    id: 2,
    title: "Design with real data",
    text: "Ever wondered if you're too reliant on a client for work? Slate helps you identify.",
    buttonText: "Try For Free",
    src: boardsNotifications,
    alt: "Boards Notifications image screen.",
  },
];
