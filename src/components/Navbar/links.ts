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
    text: "Features",
    link: "#features",
  },
  {
    id: 3,
    text: "Contents",
    link: "#contents",
  },
  {
    id: 4,
    text: "Gallery",
    link: "#gallery",
  },
  {
    id: 5,
    text: "Contact",
    link: "#contact",
  },
];

export const menuSocialLinks: SocialItem[] = [
  {
    id: 1,
    icon: AiFillGithub,
    link: "https://github.com/matheusscode",
  },
  {
    id: 2,
    icon: AiFillYoutube,
    link: "https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA",
  },
  {
    id: 3,
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/matheussfigueiredo/",
  },
];
