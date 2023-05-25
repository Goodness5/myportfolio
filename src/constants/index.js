import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  termshub,
  reactjs,
  lunchpad,
  devxspace,
  tailwind,
  nodejs,
  solidity,
  git,
  staking,
  datavis,
  votingdapp,
  python,
  moviebuddy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain developer",
    icon: solidity,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "freelance",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "Web3bridge",
    icon: solidity,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Creation of various smart contracts on the ethereum blockchain and other EVM compatible chains",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack web Developer",
    company_name: "freelance",
    icon: python,
    iconBg: "#000000",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using Next.js, python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Movies and Books Recomendation System",
    description:
      "Web-based platform that recommends movies and books based on past ratings and user's preference.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: moviebuddy,
    source_code_link: "https://github.com/goodness5/moviebuddy",
  },
  {
    name: "Token LaunchPad",
    description:
      "A lunchpad for both ERC20 and ERC721 (NFT) pre-sales.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ERC20",
        color: "green-text-gradient",
      },
      {
        name: "ERC721",
        color: "pink-text-gradient",
      },
      {
        name: "NFTs",
        color: "pink-text-gradient",
      },
    ],
    image: lunchpad,
    source_code_link: "https://github.com/Goodness5/launchpad",
  },
  {
    name: "devxspace",
    description:
      "An advanced freelancing platforms that makes use of web3 Escrow agents as a means of transaction between buyers and sellers, with an highly decentralized mechanism.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "ethers",
        color: "pink-text-gradient",
      },
    ],
    image: devxspace,
    source_code_link: "https://github.com/devxspace-org",
  },
  {
    name: "blockchain voting app",
    description:
      "A secured smart contract that allows people create elections and vote for candidates of their choice during the election process.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "ethers",
        color: "pink-text-gradient",
      },
    ],
    image: votingdapp,
    source_code_link: "https://github.com/goodness5/voting_dapp",
  },
  {
    name: "Termshub",
    description:
      "A platform that automatically generates terms andd conditions for users based on their input and the laws guarding organixations in their society",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Zuri",
        color: "green-text-gradient",
      },
    ],
    image: termshub,
    source_code_link: "https://github.com/Goodness5/T-C-PP_gen_pjt73",
  },
  {
    name: "NFT staking",
    description:
      "A platform that provides opportunity for it's users to stake NFTs for a period of time and get rewarded after the set period.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "NFT",
        color: "pink-text-gradient",
      },
    ],
    image: staking,
    source_code_link: "https://github.com/goodness5/devxspace-org",
  },
  {
    name: "Github Data Visualization",
    description:
      "A data visualization of all repositories of web3bridge's students.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Threejs",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: datavis,
    source_code_link: "https://github.com/goodness5/web3bridge",
  },
];

export { services, technologies, experiences, testimonials, projects };
