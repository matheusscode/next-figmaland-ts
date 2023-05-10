export type Maps = {
  id: number;
  text: string;
  link: string;
};

export type MapsGroups = {
  id: number;
  groupName: string;
  links: Maps[];
};

const fingerTipe: Maps[] = [
  {
    id: 1,
    text: "Home",
    link: "#",
  },
  {
    id: 2,
    text: "Examples",
    link: "#",
  },
  {
    id: 3,
    text: "Pricing",
    link: "#",
  },
  {
    id: 4,
    text: "Updates",
    link: "#",
  },
];

const resources: Maps[] = [
  {
    id: 1,
    text: "Home",
    link: "#",
  },
  {
    id: 2,
    text: "Examples",
    link: "#",
  },
  {
    id: 3,
    text: "Pricing",
    link: "#",
  },
  {
    id: 4,
    text: "Updates",
    link: "#",
  },
];

const about: Maps[] = [
  {
    id: 1,
    text: "Home",
    link: "#",
  },
  {
    id: 2,
    text: "Examples",
    link: "#",
  },
  {
    id: 3,
    text: "Pricing",
    link: "#",
  },
  {
    id: 4,
    text: "Updates",
    link: "#",
  },
];

export const filterMaps = [
  { id: 1, groupName: "Fingertipe", links: fingerTipe },
  { id: 2, groupName: "Resources", links: resources },
  { id: 3, groupName: "About", links: about },
];

export default { filterMaps };
