import fs from "fs";
import { ProjectType } from "../@types/Projects";

export const getProjects = async () => {
  const projects: ProjectType[] = [
    {
      id: 6,
      name: "GeoChat",
      folderName: "geochat",
      description: `GeoChat is an Android/iPhone app built using React Native. <br> <br>
      
          Implemented public APIs to give each user a unique identifier and name. Utilized Firebase Auth to authenticate users by their phone number.
          Developed an API which tracks the users location, allowing users to anonymously view other users that are nearby. This gives them the option to initiate an anonymous SMS conversation which is terminated once users are no longer in range.
       
           `,
      tech: [
        "Typescript",
        "React Native",
        "Twilio SMS",
        "Firebase Auth",
        "Node",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      primaryImage: "/images/projects/geochat/geochat_169.png",
      images: ["/images/projects/geochat/geochat_169.png"],

      demoURL: "",
      sourceURL: "https://github.com/Christopher-Warren/GeoChat",
    },
    {
      id: 5,
      name: "Easydash",
      folderName: "easydash",
      description: ` * This project was recently migrated to NextJS.<br><br> Easydash is a Fullstack, GraphQL powered ecommerce application.<br><br> On the seller side, EasyDash offers a user-friendly interface for managing product listings, tracking inventory, and fulfilling orders.  
      <br><br>
      On the buyer side, EasyDash offers a streamlined checkout process. Customers can easily browse through products, and add items to their cart. 
        
        `,
      tech: [
        "NextJS",
        "Typescript",
        "React",

        "Redux",
        "GraphQL",
        "Node",
        "Express",
        "AWS S3",
        "MongoDB",
        "TailwindCSS",
      ],
      primaryImage: "/images/projects/easydash/dashboard.png",
      images: [""],
      demoURL: "https://easydash.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/easydash",
    },
    {
      id: 4,
      name: "Fenrir",
      folderName: "fenrir",
      description:
        "A turn-based, survival(ish) RPG game, built from scratch, using - NextJS, MongoDB, and public art assets. The game engine features leveling up, talents, and a battle system similar to ATB (Active Time Battle). I built this project to show my skill in bringing an idea to life.",
      tech: ["Javascript", "HTML5 Canvas", "NextJS", "React", "MongoDB"],
      primaryImage: "/images/projects/fenrir/fenrir-preview.png",
      images: [],
      demoURL: "https://beta-fenrir.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/beta-fenrir",
    },
    {
      id: 3,
      name: "Dev-Apparel",
      folderName: "devapparel",
      description:
        "Dev-Apparel is a Fullstack E-commerce App, built using - NextJS, MongoDB, React, Stripe, and Bootstrap. Dev-Apparel uses CRUD operations to populate the storefront with items stored in a Mongo database.",
      tech: ["NextJS", "React", "MongoDB", "Stripe API", "Bootstrap"],
      images: [""],
      primaryImage: "/images/projects/devapparel/dev-apparel.png",
      demoURL: "https://dev-apparel.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/dev-apparel",
    },
    {
      id: 2,
      name: "Refurn",
      folderName: "refurn",
      description:
        "Refurn is a Fullstack E-commerce App, built using - React, NodeJS, Express, MongoDB, Bootstrap, and Firebase Storage as a solution to store images. Refurn was built to exemplify my abilities to work with CRUD operations. Refurn supports authentication, allowing users to login and upload furniture they wish to sell. This then enables the owner to see the listing and either approve or deny the offer.",
      tech: ["React", "NodeJs", "Express", "MongoDB", "Bootstrap", "Firestore"],
      images: [""],
      primaryImage: "/images/projects/refurn/refurn.png",
      demoURL: "https://refurn.herokuapp.com/",
      sourceURL: "https://github.com/Christopher-Warren/Refurn",
    },
    {
      id: 1,
      name: "IP Tracker",
      folderName: "iptracker",
      description:
        "IP Tracker is an IP location tool, built using - React, TailwindCSS, and leaflet as a mapping solution. IP Tracker gets the users IP address on load and shows the location and ISP information. This tool features a Generate IP button which generates a random IP address, then shows the IP location and ISP info.",
      tech: ["React", "Leaflet", "TailwindCSS"],
      images: [""],
      primaryImage: "/images/projects/iptracker/iptracker.png",
      demoURL: "https://iptracker-phi.vercel.app/",
      sourceURL: "https://github.com/Christopher-Warren/iptracker",
    },
  ];

  const projectsWithImgs = projects.map((project) => {
    const name = project.folderName;

    try {
      const imageNames = fs.readdirSync("./public/images/projects/" + name);

      const relativeImageNames = imageNames.map((image) => {
        return `/images/projects/${name}/${image}`;
      });

      project.images = relativeImageNames;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      console.error(message);
    }

    return project;
  });

  return projectsWithImgs;
};
