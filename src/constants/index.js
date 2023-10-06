import {
  backend,
  web,
  javascript,
  html,
  creator,
  self,
  store,
  css,
  team,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  vuram,
  udemy,
  gym,
  linkedin,
  restuarant,
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
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Java and Python Enthusiast",
    icon: backend,
  },
  {
    title: "Team-Player",
    icon: team,
  },
  {
    title: "Self-Motivated",
    icon: self,
  },
  {
    title: "Self-Learner",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
];

const experiences = [
  {
    title: "Associate Technical Consultant (ATC) Intern",
    company_name: "Vuram Technology",
    icon: vuram,
    iconBg: "#383E56",
    date: "Feb 2023 - April 2023",
    points: [
      "During my tenure as an Associate Technical Consultant (ATC) Intern at Vuram Technology, I immersed myself in a dynamic and multifaceted role that provided essential insights into the world of technology consulting",
      "This internship allowed me to apply academic knowledge to real-world scenarios, enhance my problem-solving skills, and develop a strong understanding of how technology integrates with business processes.",
    ],
  },
  {
    title: "React Basics",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "5 days",
    points: [
      "I completed the React Basics course on Udemy, a comprehensive and hands-on learning experience designed to build a strong foundation in React.js development",
      " This course provided a deep dive into the fundamental concepts and practical aspects of React, equipping me with essential skills to create dynamic and interactive user interfaces",
    ],
  },
  {
    title: " The Ultimate React Course 2023: React, Redux & More",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    date: "67 hours",
    points: [
      " I am equipped with advanced skills in React.js and Redux, empowering me to tackle complex web development projects.",
      "The practical experience gained from this course has prepared me to create dynamic, responsive, and feature-rich web applications, meeting the demands of the ever-evolving tech industry.",
    ],
  },
];

const projects = [
  {
    name: "Restaurant Website Development with React",
    description:
      " I led the development of a captivating restaurant website using HTML, CSS, and React. The project encompassed crafting an appealing user interface, complete with a responsive design to ensure optimal functionality across various devices.",
    tags: [
      {
        name: "Html/css",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
    ],
    image: restuarant,
    source_code_link: "https://github.com/varshini21m/Restaurant_app_netify",
  },
  {
    name: "Gym Fitness Website with React and API Integration",
    description:
      " I undertook the development of a Gym Fitness Website using React and integrated APIs, aimed at providing a comprehensive platform for fitness enthusiasts. The project involved designing an interactive and user-friendly website that offers valuable fitness resources and tools.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/varshini21m/fitness",
  },
  {
    name: "LinkedIn Clone with React, Redux, Firebase",
    description:
      "I undertook the development of a LinkedIn clone utilizing React, Redux, Firebase, and integrating Google authentication. The project aimed to replicate the core functionalities of LinkedIn while incorporating modern technologies and enabling a seamless user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: linkedin,
    source_code_link: "https://github.com/varshini21m/linkedin_clone",
  },
  {
    name: "E-commerce Cloth Website Project",
    description:
      "I designed and developed a dynamic e-commerce platform for clothing using HTML, CSS, JavaScript, Node.js, Firebase, and AWS. This project demonstrates my expertise in creating seamless shopping experiences, efficient data management, and optimal image storage solutions. Explore the fusion of technology and fashion in a single click.",
    tags: [
      {
        name: "html",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "red-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "AWS",
        color: "yellow-text-gradient",
      },
    ],
    image: store,
    source_code_link: "https://github.com/varshini21m/store.git",
  },
];

export { services, technologies, experiences, projects };
