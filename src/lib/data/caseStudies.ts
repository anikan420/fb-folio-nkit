// src/lib/data/caseStudies.ts
import type { StaticImageData } from 'next/image';

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string | StaticImageData; // Allow StaticImageData for local images if needed later
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  dataAiHint: string;
  services?: string[];
  client?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery?: { url: string, alt: string, dataAiHint: string }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'shopsphere',
    category: 'E-commerce - Web platform',
    title: 'ShopSphere: Seamless Online Retail',
    description: 'A fully functional online store with robust features for a seamless shopping experience, including dynamic product listings and secure payments.',
    longDescription: 'ShopSphere is a modern e-commerce platform built from the ground up, featuring dynamic product listings, an intuitive cart management system, and secure payment processing through Stripe integration. It offers a responsive design for optimal viewing on all devices and an admin panel for easy product and order management. The tech stack includes React for the frontend, Node.js with Express for the backend, and MongoDB for the database. User authentication, product search, and filtering are key features.',
    imageUrl: 'https://picsum.photos/seed/shopsphere-main/1200/800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'E-commerce', 'Web Development'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'online store interface',
    services: ['Full-Stack Development', 'UI/UX Design', 'Payment Integration'],
    client: 'Fictional Retail Co.',
    duration: '3 Months',
    challenge: 'To build a scalable and user-friendly e-commerce platform that can handle a growing inventory and customer base, while ensuring secure transactions.',
    solution: 'Developed a modular architecture using React and Node.js, integrated Stripe for payments, and designed an intuitive user interface for both customers and administrators.',
    results: [
      'Successfully launched platform handling 1000+ SKUs.',
      '20% increase in conversion rates compared to previous system.',
      'Admin panel reduced product management time by 40%.'
    ],
    gallery: [
        { url: 'https://picsum.photos/seed/shopsphere-gallery1/800/600', alt: 'ShopSphere product page', dataAiHint: 'product page' },
        { url: 'https://picsum.photos/seed/shopsphere-gallery2/800/600', alt: 'ShopSphere cart', dataAiHint: 'shopping cart' },
    ]
  },
  {
    id: 'taskmaster',
    category: 'Productivity - SaaS tool',
    title: 'TaskMaster: Collaborative Project Hub',
    description: 'A collaborative platform designed to streamline team workflows and task tracking with Kanban boards and real-time updates.',
    longDescription: 'TaskMaster empowers teams to manage projects efficiently with features like task assignment, progress tracking with Kanban boards, real-time collaboration, and file sharing. Built with Vue.js and Firebase, it offers a reactive and real-time experience. The UI is styled with Tailwind CSS for a clean and modern look. It supports multiple project workspaces and user roles.',
    imageUrl: 'https://picsum.photos/seed/taskmaster-main/1200/800',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Productivity', 'SaaS'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'project dashboard',
    services: ['Frontend Development', 'Backend (BaaS) Integration', 'Real-time Features'],
    client: 'Startup Inc.',
    duration: '4 Months',
    challenge: 'Creating a real-time collaborative environment that is both intuitive for non-technical users and powerful enough for complex project management.',
    solution: 'Leveraged Firebase for real-time database and authentication, with a Vue.js frontend for a responsive user experience. Implemented Kanban boards with drag-and-drop functionality.',
    results: [
        'Adopted by 5 internal teams within the first month.',
        'Reduced average task completion time by 15%.',
        'Positive user feedback on ease of use and collaboration features.'
    ],
    testimonial: {
        quote: 'TaskMaster revolutionized how our team handles projects. It\'s intuitive and powerful.',
        author: 'Jane Doe',
        role: 'Project Manager, Startup Inc.'
    }
  },
  {
    id: 'inquireai',
    category: 'Artificial intelligence - Customer service',
    title: 'InquireAI: Intelligent Chat Assistance',
    description: 'An intelligent chatbot leveraging NLP for enhanced customer service and engagement, improving response times and user satisfaction.',
    longDescription: 'InquireAI is a sophisticated chatbot application developed using Python and Dialogflow for natural language processing. It integrates with existing customer service platforms via a Flask backend and provides a React-based chat interface. The bot is trained to handle a wide range of customer queries, escalate complex issues to human agents, and learn from interactions to improve its responses over time.',
    imageUrl: 'https://picsum.photos/seed/inquireai-main/1200/800',
    tags: ['Python', 'Dialogflow', 'Flask', 'React', 'AI', 'NLP'],
    liveLink: '#',
    repoLink: '#',
    dataAiHint: 'chatbot conversation',
    services: ['AI Development', 'NLP Integration', 'API Development'],
    client: 'SupportSolutions Ltd.',
    duration: '5 Months',
    challenge: 'Developing a chatbot that can understand diverse customer queries with high accuracy and provide relevant, helpful responses while seamlessly integrating with existing support workflows.',
    solution: 'Utilized Dialogflow for robust NLP capabilities, built a Flask API for backend logic and integrations, and created a custom React chat widget. Implemented a continuous learning loop based on agent feedback.',
    results: [
        'Reduced customer support ticket volume by 30%.',
        'Improved average first response time by 60%.',
        'Achieved 85% accuracy in query understanding after 3 months of operation.'
    ],
     gallery: [
        { url: 'https://picsum.photos/seed/inquireai-gallery1/800/600', alt: 'InquireAI dashboard', dataAiHint: 'analytics dashboard' },
    ]
  },
  {
    id: 'fittrack',
    category: 'UI/UX design - Mobile application',
    title: 'FitTrack: Intuitive Fitness Tracking UI',
    description: 'A sleek and intuitive UI/UX design for a mobile fitness tracking application, focusing on clarity and ease of navigation.',
    longDescription: 'FitTrack\'s UI was meticulously designed in Figma, focusing on user experience for tracking fitness goals, workout routines, and progress. The design emphasizes clarity, ease of navigation, and motivational elements. It includes features like personalized dashboards, progress charts, social sharing capabilities, and gamified challenges, all wrapped in a visually appealing and accessible interface. Extensive user research and usability testing informed the design process.',
    imageUrl: 'https://picsum.photos/seed/fittrack-main/1200/800',
    tags: ['Figma', 'UI/UX Design', 'Mobile App', 'Fitness', 'Prototyping'],
    liveLink: '#', // Link to Figma prototype or Behance if available
    dataAiHint: 'fitness app dashboard',
    services: ['UI/UX Design', 'User Research', 'Prototyping', 'Usability Testing'],
    client: 'HealthMotion Apps',
    duration: '2 Months',
    challenge: 'Designing a fitness app UI that is motivating, easy to use for a wide range of users (from beginners to fitness enthusiasts), and stands out in a crowded market.',
    solution: 'Conducted user interviews and competitor analysis. Developed detailed user personas and journey maps. Created wireframes and high-fidelity prototypes in Figma, iterating based on user feedback from usability testing sessions.',
    results: [
        'Design system adopted for 3 other apps by the client.',
        'User task completion rate in prototypes increased by 25% after iterations.',
        'Highly positive feedback on visual appeal and intuitiveness from test users.'
    ]
  },
];
