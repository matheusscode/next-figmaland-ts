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
    link: "https://mail.google.com/mail/u/1/#inbox?compose=CllgCJfrKnHwdrtMzGlGBMGMnRbsBdJCTRsHpTkJvfxhPzjHFJlmBNDPvBvHcgbGlbkHrBdGQDq",
  },
  {
    id: 2,
    icon: BsFillTelephoneOutboundFill,
    text: "+55 (92) 99982-7649",
    link: "https://wa.me/message/HDP33S5LPCCNA1",
  },
];

export const socialIcons: SocialIcon[] = [
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

export default {};
