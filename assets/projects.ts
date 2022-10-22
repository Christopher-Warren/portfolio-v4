interface ProjectTypes {
  id: number;
  name: string;
  description: string;
  tech: string[];
  images: string[];
  imageAspectRatio: "wide" | "vertical";
  demoURL: string;
  sourceURL: string;
}

export const projects: ProjectTypes[] = [
  {
    id: 5,
    name: "GeoChat",
    description: `GeoChat is an Android/iPhone app built using React native. Implemented public APIs to give each user a unique identifier and name. Utilized Firebase Auth to authenticate users by their phone number.
        Developed an API which tracks the users location, allowing users to anonymously view other users that are nearby. This gives them the option to initiate an SMS conversation which is terminated once users are no longer in range.
     
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
    images: [
      "/images/projects/geochat/geochat_169.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
    imageAspectRatio: "vertical",
    demoURL: "",
    sourceURL: "",
  },
  {
    id: 4,
    name: "Easydash",
    description: `Easydash is a Fullstack, GraphQL powered inventory management system; 
      Built using Typescript, Node, Express, AWS S3, MongoDB, GraphQL, React, Redux, React-router, and TailwindCSS.
      
      Easy dash features a dashboard in which a store owner can create, modify, and delete products. The store owner
      can also upload any number of photos for each product. They can then create orders, fulfill them, upload tracking information, all while
       viewing incoming orders real-time via the homepage. Lastly, Easydash features a fast, and powerful filtering and searching tool, created with
       efficient MongoDB aggregation stages.
      `,
    tech: [
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
    images: [
      "/images/projects/geochat/geochat_169.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
    imageAspectRatio: "wide",
    demoURL: "https://easydash-deploy-test.herokuapp.com/",
    sourceURL: "https://github.com/Christopher-Warren/easydash",
  },
  {
    id: 0,
    name: "Fenrir",
    description:
      "A turn-based, survival(ish) RPG game, built from scratch, using - NextJS and MongoDB (for statistic collection). While the art assets are not created by me, the small game engine, itself, is. I built this project to show my skills with bringing an idea to life.",
    tech: ["Javascript", "NextJS", "React", "MongoDB"],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
    imageAspectRatio: "wide",
    demoURL: "https://beta-fenrir.vercel.app/",
    sourceURL: "https://github.com/Christopher-Warren/beta-fenrir",
  },
  {
    id: 1,
    name: "Dev-Apparel",
    description:
      "Dev-Apparel is a Fullstack E-commerce App, built using - NextJS, MongoDB, React, Stripe, and Bootstrap. Dev-Apparel uses CRUD operations to populate the storefront with items stored in a Mongo database.",
    tech: ["NextJS", "React", "MongoDB", "Stripe API", "Bootstrap"],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
    imageAspectRatio: "wide",
    demoURL: "https://dev-apparel.vercel.app/",
    sourceURL: "https://github.com/Christopher-Warren/dev-apparel",
  },
  {
    id: 2,
    name: "Refurn",
    description:
      "Refurn is a Fullstack E-commerce App, built using - React, NodeJS, Express, MongoDB, Bootstrap, and Firebase Storage as a solution to store images. Refurn was built to exemplify my abilities to work with CRUD operations. Refurn supports authentication, allowing users to login and upload furniture they wish to sell. This then enables the owner to see the listing and either approve or deny the offer.",
    tech: ["React", "NodeJs", "Express", "MongoDB", "Bootstrap", "Firestore"],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
    imageAspectRatio: "wide",
    demoURL: "https://refurn.herokuapp.com/",
    sourceURL: "https://github.com/Christopher-Warren/Refurn",
  },
  {
    id: 3,
    name: "IP Tracker",
    description:
      "IP Tracker is an IP location tool, built using - React, TailwindCSS, and leaflet as a mapping solution. IP Tracker gets the users IP address on load and shows the location and ISP information. This tool features a Generate IP button which generates a random IP address, then shows the IP location and ISP info.",
    tech: ["React", "Leaflet", "TailwindCSS"],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
    imageAspectRatio: "wide",
    demoURL: "https://iptracker-phi.vercel.app/",
    sourceURL: "https://github.com/Christopher-Warren/iptracker",
  },
];
