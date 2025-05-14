import project1 from "../assets/projects/bazario.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/imdb-clone.jpg";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `I'm a Full-Stack MERN Developer with over 6 months of experience in building and optimizing web applications. My skill set spans across front-end and back-end development, allowing me to create seamless, efficient, and user-friendly solutions. I’m passionate about coding, continuously learning, and eager to take on new challenges that push the boundaries of technology.`;

export const ABOUT_TEXT = `I'm a passionate and dedicated MERN Stack Developer with a strong foundation in MongoDB, Express.js, React.js, and Node.js. As a fresher, I'm constantly learning and building real-world projects to sharpen my skills and stay updated with the latest technologies in web development.

I enjoy turning complex problems into simple, beautiful, and intuitive solutions. My goal is to become a full-fledged full-stack developer capable of delivering robust, scalable, and user-friendly applications.

I'm also exploring version control (Git/GitHub), REST APIs, and deployment tools like Vercel and Render. Currently, I'm focused on building responsive web apps and contributing to open-source projects to enhance my experience.

I'm looking forward to collaborating with teams, learning from experienced developers, and growing in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "Dec 2023 - May 2024",
    role: "Junior Frontend Developer",
    company: "BookMyAi",
    description:
      "Started as a fresher and quickly advanced to Junior Frontend Developer. Contributed to the development and maintenance of web applications using JavaScript, React.js, and Next.js. Collaborated with backend developers to integrate RESTful APIs, and worked closely with stakeholders to define project requirements and timelines, ensuring the successful delivery of high-quality web solutions.",
    technologies: ["JavaScript", "React.js", "Next.js"],
  },
  {
    year: "Sep 2022 - Feb 2023",
    role: "MERN Stack Trainee",
    company: "Universal Informatics",
    description:
      "Designed and developed user interfaces for web applications using React.js. Collaborated with backend developers to integrate frontend components with Node.js and Express.js APIs. Implemented responsive designs, optimized frontend performance, and worked with MongoDB for database management.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  // {
  //   year: "202 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Bazario : E-Commerce Shopping Website",
    image: project1,
    description:
      "An e-commerce website built with React and Tailwind CSS, using the FakeStore API for dynamic product data fetching and a responsive shopping experience.",
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
    link: "https://github.com/Dev-Farhan/Bazario-Shop-Smart-Shop-Stylish",
    liveLink: "https://bazario-shop-smart.netlify.app",
  },
  {
    title: "Contact Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Javascript", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Dev-Farhan/Contact-Management-Application",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind Css"],
    // link: "  ",
    // liveLink: "https://agency-web-landing-page-mu.vercel.app/"
  },
  {
    title: "Movies (TMDB) Application",
    image: project4,
    description:
      "Build a clone of TMDB using ReactJS, showcasing strong frontend development skills and attention to detail in creating a user-friendly interface for browsing and searching popular movies, top rated Movie, and viewing ratings.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
    link: "https://github.com/Dev-Farhan/React-IMDB-Clone-App-",
    liveLink: "https://imdb-clone-farhan.netlify.app/",
  },
  {
    title: "Agency Website",
    image: project5,
    description:
      "This is a fully responsive and interactive IT Agency Website designed and developed to represent a modern tech company's online presence. The website includes multiple dynamic sections and provides a seamless user experience across all devices.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "Javascript", "React"],
    link: "https://github.com/Dev-Farhan/Agency-Web-Landing-Page",
    liveLink: "https://agency-web-landing-page-mu.vercel.app/",
  },
];

export const CONTACT = {
  address: "143, Rajkumar Nagar Baank near Sirpur lake, Indore",
  phoneNo: "+91 82340 34564 ",
  email: "mohdfarhan0678@gmail.com",
};
