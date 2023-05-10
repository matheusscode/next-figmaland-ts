import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillGooglePlusCircle,
} from "react-icons/ai";

export type LinkItem = {
  id: number;
  text: string;
  link: string;
};

export type SocialItem = {
  id: number;
  icon: any;
  link: string;
};

export const menuLinks: LinkItem[] = [
  {
    id: 1,
    text: "Home",
    link: "#home",
  },
  {
    id: 2,
    text: "Product",
    link: "#",
  },
  {
    id: 3,
    text: "About",
    link: "#",
  },
  {
    id: 4,
    text: "Contact",
    link: "#",
  },
];

export const menuSocialLinks: SocialItem[] = [
  {
    id: 1,
    icon: AiFillGithub,
    link: "#",
  },
  {
    id: 2,
    icon: AiFillYoutube,
    link: "#",
  },
  {
    id: 3,
    icon: AiFillLinkedin,
    link: "#",
  },
];
