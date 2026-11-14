export type Entry = {
  title: string;
  description: string;
  date: string;
  /** Context shown after the date: the project's category. */
  context?: string;
  href?: string;
  /** Full Tailwind text-colour class, carried over from the old project cards. */
  color?: string;
  /** References that were inline links in the original write-up. */
  links?: { label: string; href: string }[];
};

export const site = {
  name: "Brian Temu",
  url: "https://briantemu.dev",
  description:
    "Brian Temu, Software and Machine Learning Engineer. PhD student at the University of Colorado Denver.",
};

export const nav = [
  { label: "thoughts", href: "/thoughts" },
  { label: "research", href: "/research" },
  { label: "engineering", href: "/engineering" },
];

export const socials = {
  github: "https://github.com/iam-dante",
  x: "https://twitter.com/iambriangasper",
  linkedin: "https://www.linkedin.com/in/brian-temu/",
  chess: "https://www.chess.com/member/bryngspr",
  zindi: "https://zindi.africa/users/iam-dante",
  resume: "/document/Brian_Temu_Resume.pdf",
};

export const projects: Entry[] = [
  {
    title: "World Gallery - Paintings",
    color: "text-amber-700 dark:text-amber-400",
    description:
      "World Gallery is an online showcase framed like a classical museum visit featured artists, a calm discover flow, and an intimate sense of journey through standout works. Under the hood I fine-tuned a Stable Diffusion model so generations better matched the gallery aesthetic I wanted: curating training data, iterating on hyperparameters, and debugging when outputs drifted or collapsed. Along the way I spent serious time on inference how sampling steps, guidance, schedulers, and latent-space choices change fidelity, speed, and consistency so the site could pair a polished front end with a pipeline I actually understood end to end.",
    date: "May 2026",
    context: "Application",
    href: "https://worldgallery.space/",
  },
  {
    title: "FoodScout - Smart Food Discovery",
    color: "text-emerald-700 dark:text-emerald-400",
    description:
      "FoodScout is an agent powered food and travel guide built around an interactive 3D globe. Users can click anywhere on the globe or search for a city to discover local restaurants, signature dishes, and food culture. Once a location is selected, a built-in Food Guide Chat lets you ask questions like \"best late-night food spots,\" \"hidden gems under $20,\" or \"best food neighborhood to explore,\" and the agent responds with short, curated tips on nearby restaurants and deeper dining context.",
    date: "March 2026",
    context: "Application",
    href: "https://foodscout.briantemu.dev/",
  },
  {
    title: "2nd Place Zindi Competition",
    color: "text-indigo-700 dark:text-indigo-400",
    description:
      "Placed 2nd out of 180+ participants in the Zindi Barbados Traffic Analysis Challenge ($11,000 USD prize pool). The task was to predict traffic congestion at a Barbados roundabout using four streams of video data. Models had to classify congestion levels at entrance and exit points and forecast conditions five minutes ahead, leveraging computer vision, object tracking, and deep learning with the goal of helping the Ministry of Transport and Works identify root causes of traffic and design interventions to reduce it island-wide.",
    date: "January 2026",
    context: "Machine Learning",
    href: "https://zindi.africa/competitions/barbados-traffic-analysis-challenge/leaderboard",
    links: [
      { label: "View Certificate", href: "https://drive.google.com/file/d/10ep61aWZ5TwuEmWuni3IHe78qZIiKuiZ/view?usp=sharing" },
    ],
  },
  {
    title: "Sidees - Student ID on Digital Wallets",
    color: "text-rose-700 dark:text-rose-400",
    description:
      "Sidees is a prototype exploring the integration of student identification credentials into digital wallets (Apple Wallet and Google Wallet) using NFC technology for secure access to campus systems. The primary objective of this prototype was to evaluate the feasibility, usability, and system behavior of such an implementation through a pilot-style test case modeled on UMBC. To conclude there is futher work to be done and make it adopted national wide.",
    date: "December 2025",
    context: "Application",
    href: "https://sidees.briantemu.dev/",
  },
  {
    title: "Eda AI - Learning Assistant",
    color: "text-orange-700 dark:text-orange-400",
    description:
      "Eda is a project focuses on creating an AI-powered learning assistant that uses Retrieval-Augmented Generation (RAG) to automatically generate interactive questions from academic documents like research papers, textbooks, and lecture notes. The system will process user-uploaded documents, extract key information using embeddings, retrieve relevant data via ChromaDB, and employ a Large Language Model (LLM) to produce context-aware questions and responses. The research aims to evaluate the AI's effectiveness in enhancing student comprehension.",
    date: "May 2025",
    context: "Application",
    href: "https://eda.briantemu.dev/",
  },
  {
    title: "CineRecall",
    color: "text-yellow-800 dark:text-yellow-400",
    description:
      "Cinerecall is a web-based tool designed to help users rediscover movies from their memories. If someone remembers specific scenes, characters, or plot details but can’t quite recall the title of the film, they can use this platform to search for movies based on those fragmented memories. Users can input details like specific scenes, dialogue, or visual elements they remember, and the site provides a list of possible movie matches. The service leverages a large database of films to suggest titles that align with the provided description, making it easier for users to find movies they’ve seen in the past but have trouble identifying.",
    date: "Feb 2025",
    context: "Application",
    href: "https://cinerecall.briantemu.dev/",
  },
  {
    title: "Vision Transformer",
    color: "text-green-800 dark:text-green-400",
    description:
      "A vision transformer, or ViT, is a deep learning architecture designed for computer vision tasks. Unlike traditional convolutional neural networks (CNNs), which rely on convolutional layers to process image data, ViTs utilize self-attention mechanisms commonly found in transformer models. ViT extends the success of transformers from natural language processing to image analysis, demonstrating remarkable performance on various image recognition tasks. This introduction will provide an overview of the key concepts and contributions of the Vision Transformer paper, setting the stage for a deeper exploration of its innovative methodology and experimental results.",
    date: "Dec 2023",
    context: "Paper Replication",
    href: "https://docs.briantemu.dev/docs/vision-transformer/intro",
    links: [
      { label: "Vision Transformer Paper", href: "https://arxiv.org/abs/2010.11929" },
    ],
  },
  {
    title: "Baltimore Police Department Crime",
    color: "text-sky-800 dark:text-sky-400",
    description:
      "Open Baltimore Crime Data Analysis is a data-driven project focused on exploring and interpreting crime data from the city of Baltimore. By leveraging various analytical techniques, this initiative aims to uncover trends, patterns, and insights within the dataset, providing valuable information to local authorities and communities. Through rigorous analysis, it seeks to enhance understanding of crime dynamics, contribute to informed decision-making, and ultimately promote safer and more secure neighborhoods in Baltimore.",
    date: "October 2023",
    context: "Data Analysis",
    href: "https://github.com/iam-dante/Open-Baltimore-Analysis",
    links: [
      { label: "Open Baltimore Crime Data", href: "https://data.baltimorecity.gov/datasets/baltimore::part-1-crime-data/explore" },
    ],
  },
  {
    title: "Real Time Facemask Detection System",
    color: "text-orange-800 dark:text-orange-400",
    description:
      "The YOLO Real Face Mask Detection System is an advanced computer vision application that utilizes the YOLO (You Only Look Once) object detection algorithm to identify and categorize whether individuals in images or video streams are wearing face masks accurately and in real-time. This system plays a crucial role in monitoring and enforcing mask-wearing compliance, especially during health crises such as the COVID-19 pandemic. It provides rapid and reliable detection of individuals wearing masks and those who are not, contributing to public health and safety efforts by minimizing the spread of infectious diseases.",
    date: "July 2022",
    context: "Computer Vision",
    href: "https://github.com/iam-dante/YoloV5-Facemask-Detection",
    links: [
      { label: "YOLO (You Only Look Once)", href: "https://pjreddie.com/darknet/yolo/" },
    ],
  },
  {
    title: "Spot the Mask Challenge",
    color: "text-purple-800 dark:text-purple-400",
    description:
      "The Spot the Mask Project is an exciting competition-based initiative that harnesses the power of machine learning to classify images exclusively sourced from zindi. In this competition, participants are tasked with creating and fine-tuning image classification models to discern whether individuals in these images are wearing masks. It represents a significant and innovative challenge within the machine learning community.",
    date: "June 2021",
    context: "Deep Learning",
    href: "https://docs.briantemu.dev/docs/spot-the-mask/intro",
    links: [
      { label: "zindi", href: "https://zindi.africa/competitions/spot-the-mask" },
    ],
  },
];
