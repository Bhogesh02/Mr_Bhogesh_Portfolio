import ayla from "../../Images/ayla.jpg";
import crefin from "../../Images/crefin.jpg";
import realEstate from "../../Images/real-estate.jpg";
import travel from "../../Images/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Echo-Link: Real-Time Chat Application",
    description:
      "Developed a real-time chat application using the MERN stack, enabling users to securely sign up, log in, and engage in one-on-one conversations. Integrated WebSocket (Socket.io) for instant messaging, ensuring a seamless and responsive chat experience. Implemented media sharing features, allowing users to send images and videos. Used JWT authentication for secure access and Cloudinary for efficient media storage. Designed an intuitive UI with React and Tailwind CSS to enhance user experience.",
    tools: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Cloudinary",
      "Multer",
      "JWT",
      "Redux",
      "Tailwind CSS",
    ],
    role: "Full-Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Quick Kare: Online Doctor Consultation",
    description:
      "Built a seamless online doctor consultation platform using React and Firebase, featuring three user portals: Admin, Doctor, and Patient. The Admin verifies and approves doctors before they can consult patients. Patients can register, book appointments, and consult doctors via real-time video calls. Doctors manage appointments, conduct video consultations, and provide prescriptions. Implemented Firebase Authentication for secure login, Firestore for real-time data storage, and WebRTC for smooth video communication. Designed a responsive and intuitive UI using Tailwind CSS to ensure an excellent user experience.",
    tools: ["React.js", "Firebase", "Firestore", "WebRTC", "Tailwind CSS"],
    role: "Frontend Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "MockUp: AI-Powered Interview System",
    description:
      "Developed an advanced AI-powered mock interview platform designed to help candidates prepare for real-world job interviews. The system conducts automated mock interviews using Gemini AI, analyzing responses in real time and providing personalized feedback. Integrated Firebase Authentication for secure user login, Firestore for real-time storage of responses and evaluations, and WebRTC for video-based interviews. Gemini AI processes user answers, evaluates communication skills, technical accuracy, and confidence levels, and generates insightful feedback. Designed an intuitive and responsive UI with React.js and Tailwind CSS, ensuring a seamless user experience for candidates looking to enhance their interview performance.",
    tools: [
      "React.js",
    "Firebase",
    "Firestore",
    "Gemini AI",
    "WebRTC",
    "Tailwind CSS",
    ],
    code: "",
    role: "Frontend Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Newsroom Management",
    description:
      "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full Stack Developer",
  },
];
