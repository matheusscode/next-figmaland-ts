import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

export type SocialTag = {
  id: number;
  icon: any;
  text: string;
  link: string;
};

export type SocialIcon = {
  id: number;
  icon: any;
  link: string;
};

export const socialTags: SocialTag[] = [
  {
    id: 1,
    icon: AiFillGooglePlusCircle,
    text: "matheussdev3@gmail.com",
    link: "",
  },
  {
    id: 2,
    icon: BsFillTelephoneOutboundFill,
    text: "+55 (92) 99982-7649",
    link: "",
  },
];

export const socialIcons: SocialIcon[] = [
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

export default {};
