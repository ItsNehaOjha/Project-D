
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  // benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,

  msgg,
  discuss,
  files,
  userProIcon,
  codeBlock,
  helpCenter,
  notion,

  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,


  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
 
  
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Complain",
    url: "#features",
  },
  {
    id: "1",
    title: "Notes",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Features",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "FeedBack",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Experience streamlined voting and robust privacy, making it the ideal platform for student participation.";

export const collabContent = [
  {
    id: "0",
    title: "Streamlined Complaint Tracking",
  },
  {
    id: "1",
    title: "Integrate Feedback Effortlessly",
    text: collabText,
  },
  {
    id: "2",
    title: "Automated Voting Process",
  },
  {
    id: "3",
    title: "Secure and Reliable Platform",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Feedback",
    icon: msgg, 
    width: 36,
    height: 26,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Notes",
    icon: discuss,
    width: 36,
    height: 36,
  },

  {
    id: "4",
    title: "Documents",
    icon: files, 
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "User Profiles",
    icon: userProIcon, 
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Code Block",
    icon: codeBlock, 
    width: 26,
    height: 26,
  },
  {
    id: "7",
    title: "Help Center",
    icon: helpCenter, 
    width: 34,
    height: 34,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Complain",
    text: "Allow students to easily submit and track complaints using a user-friendly interface, ensuring that issues are addressed promptly and efficiently.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    buttonText: "Submit a Complaint", // Custom button text
  },
  {
    id: "1",
    title: "Get Notes",
    text: "Easily access and share course notes with fellow students, ensuring you have the resources you need to succeed academically.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    buttonText: "View Notes", // Custom button text
  },
  {
    id: "2",
    title: "Features",
    text: "Explore a variety of features designed to enhance your student experience, from easy note sharing to a streamlined complaint system.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    buttonText: "Discover Features", // Custom button text
  },
];

  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
// ];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
