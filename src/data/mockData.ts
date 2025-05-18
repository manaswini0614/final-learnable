import { Course, User, Hackathon } from "@/types";

export const courses: Course[] = [
  {
    id: "1",
    shortCode: "UX",
    title: "UX Design Foundations",
    description: "Master the fundamentals of UX design through practical, real-world projects and challenges.",
    level: "Beginner",
    difficulty: "Easy",
    icon: "🎨",
    progress: 75,
    totalHours: 5,
    completedHours: 3.75,
    isRecommended: true,
    xpReward: 500,
    achievements: ["first_design", "feedback_master"],
    skillsGained: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Thinking"
    ],
    learningOutcomes: [
      "Create user-centered design solutions",
      "Conduct effective user research",
      "Build interactive prototypes",
      "Test and iterate designs"
    ],
    estimatedTimeToComplete: "2 weeks",
    communityRating: 4.8,
    expertiseLevel: {
      current: 2,
      max: 5
    },
    challengeQuests: [
      {
        title: "User Research Sprint",
        description: "Plan and conduct user interviews to understand real user needs.",
        xpReward: 150,
        timeEstimate: "3 hours",
        progress: 1,
        total: 3
      },
      {
        title: "Prototype Challenge",
        description: "Create an interactive prototype and gather user feedback.",
        xpReward: 200,
        timeEstimate: "4 hours",
        progress: 2,
        total: 4
      }
    ],
    skillTree: [
      {
        title: "Research Basics",
        level: 1,
        isUnlocked: true,
        isCompleted: true,
        xpRequired: 100
      },
      {
        title: "Design Methods",
        level: 2,
        isUnlocked: true,
        isCompleted: false,
        xpRequired: 250
      },
      {
        title: "Advanced Testing",
        level: 3,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 400
      }
    ]
  },
  {
    id: "2",
    shortCode: "DT",
    title: "Design Thinking Workshop",
    description: "Learn and apply design thinking methodology to solve complex problems.",
    level: "Intermediate",
    difficulty: "Medium",
    icon: "📚",
    progress: 40,
    totalHours: 8,
    completedHours: 3.2,
    xpReward: 750,
    achievements: ["design_thinker", "problem_solver"],
    skillsGained: [
      "Problem Definition",
      "Ideation",
      "Solution Design",
      "User Empathy",
      "Innovation Methods"
    ],
    learningOutcomes: [
      "Define complex design problems",
      "Generate innovative solutions",
      "Create user journey maps",
      "Facilitate design workshops"
    ],
    estimatedTimeToComplete: "3 weeks",
    communityRating: 4.9,
    expertiseLevel: {
      current: 3,
      max: 5
    },
    challengeQuests: [
      {
        title: "Problem Space Explorer",
        description: "Map out a complex problem space using design thinking tools.",
        xpReward: 250,
        timeEstimate: "5 hours",
        progress: 2,
        total: 5
      },
      {
        title: "Innovation Workshop",
        description: "Design and run an innovation workshop with your team.",
        xpReward: 300,
        timeEstimate: "6 hours",
        progress: 1,
        total: 3
      }
    ],
    skillTree: [
      {
        title: "Design Thinking Basics",
        level: 1,
        isUnlocked: true,
        isCompleted: true,
        xpRequired: 200
      },
      {
        title: "Advanced Methods",
        level: 2,
        isUnlocked: true,
        isCompleted: false,
        xpRequired: 400
      },
      {
        title: "Workshop Facilitation",
        level: 3,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 600
      }
    ]
  },
  {
    id: "3",
    shortCode: "UI",
    title: "Advanced UI Patterns",
    description: "Master advanced UI patterns and create sophisticated user interfaces.",
    level: "Advanced",
    difficulty: "Hard",
    icon: "🧩",
    progress: 20,
    totalHours: 10,
    completedHours: 2,
    isRecommended: true,
    xpReward: 1000,
    achievements: ["ui_master", "pattern_expert"],
    skillsGained: [
      "Component Design",
      "Design Systems",
      "Interaction Patterns",
      "Accessibility",
      "Visual Design"
    ],
    learningOutcomes: [
      "Create complex UI components",
      "Build scalable design systems",
      "Implement advanced interactions",
      "Ensure accessible designs"
    ],
    estimatedTimeToComplete: "4 weeks",
    communityRating: 4.7,
    expertiseLevel: {
      current: 4,
      max: 5
    },
    challengeQuests: [
      {
        title: "Component Library Builder",
        description: "Design and document a comprehensive component library.",
        xpReward: 400,
        timeEstimate: "8 hours",
        progress: 1,
        total: 4
      },
      {
        title: "Accessibility Champion",
        description: "Audit and improve accessibility of a complex interface.",
        xpReward: 350,
        timeEstimate: "6 hours",
        progress: 0,
        total: 3
      }
    ],
    skillTree: [
      {
        title: "UI Fundamentals",
        level: 1,
        isUnlocked: true,
        isCompleted: true,
        xpRequired: 300
      },
      {
        title: "Component Systems",
        level: 2,
        isUnlocked: true,
        isCompleted: false,
        xpRequired: 600
      },
      {
        title: "Advanced Patterns",
        level: 3,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 900
      }
    ]
  },
  {
    id: "4",
    shortCode: "FD",
    title: "Frontend Development",
    description: "Learn modern frontend development practices through hands-on projects.",
    level: "Intermediate",
    difficulty: "Medium",
    icon: "💻",
    progress: 60,
    totalHours: 8,
    completedHours: 4.8,
    isRecommended: true,
    xpReward: 800,
    achievements: ["code_ninja", "bug_hunter"],
    skillsGained: [
      "React Development",
      "State Management",
      "API Integration",
      "Performance Optimization",
      "Testing"
    ],
    learningOutcomes: [
      "Build modern React applications",
      "Implement efficient state management",
      "Create responsive layouts",
      "Write maintainable code"
    ],
    estimatedTimeToComplete: "3 weeks",
    communityRating: 4.6,
    expertiseLevel: {
      current: 3,
      max: 5
    },
    challengeQuests: [
      {
        title: "Component Builder",
        description: "Create reusable React components with proper testing.",
        xpReward: 300,
        timeEstimate: "5 hours",
        progress: 3,
        total: 5
      },
      {
        title: "State Management Pro",
        description: "Implement complex state management solutions.",
        xpReward: 250,
        timeEstimate: "4 hours",
        progress: 2,
        total: 4
      }
    ],
    skillTree: [
      {
        title: "React Basics",
        level: 1,
        isUnlocked: true,
        isCompleted: true,
        xpRequired: 200
      },
      {
        title: "Advanced Patterns",
        level: 2,
        isUnlocked: true,
        isCompleted: false,
        xpRequired: 400
      },
      {
        title: "Performance",
        level: 3,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 600
      }
    ]
  },
  {
    id: "5",
    shortCode: "PD",
    title: "Product Design",
    description: "Master end-to-end product design process with real-world projects.",
    level: "Advanced",
    difficulty: "Hard",
    icon: "🚀",
    progress: 10,
    totalHours: 10,
    completedHours: 1,
    xpReward: 1000,
    achievements: ["product_pioneer"],
    skillsGained: [
      "Product Strategy",
      "User Research",
      "Information Architecture",
      "Design Systems",
      "Design Leadership"
    ],
    learningOutcomes: [
      "Lead product design initiatives",
      "Create comprehensive design strategies",
      "Build scalable design systems",
      "Drive design decisions with data"
    ],
    estimatedTimeToComplete: "5 weeks",
    communityRating: 4.9,
    expertiseLevel: {
      current: 4,
      max: 5
    },
    challengeQuests: [
      {
        title: "Product Vision",
        description: "Develop a comprehensive product vision and strategy.",
        xpReward: 400,
        timeEstimate: "8 hours",
        progress: 1,
        total: 4
      },
      {
        title: "Design System Architecture",
        description: "Create a scalable design system architecture.",
        xpReward: 350,
        timeEstimate: "6 hours",
        progress: 0,
        total: 3
      }
    ],
    skillTree: [
      {
        title: "Strategy Basics",
        level: 1,
        isUnlocked: true,
        isCompleted: true,
        xpRequired: 300
      },
      {
        title: "System Design",
        level: 2,
        isUnlocked: true,
        isCompleted: false,
        xpRequired: 600
      },
      {
        title: "Leadership",
        level: 3,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 900
      }
    ]
  },
  {
    id: "6",
    shortCode: "DA",
    title: "Design Accessibility",
    description: "Create accessible designs that work for all users.",
    level: "Intermediate",
    difficulty: "Medium",
    icon: "♿",
    progress: 0,
    totalHours: 4,
    completedHours: 0,
    xpReward: 600,
    achievements: ["accessibility_advocate"],
    skillsGained: [
      "WCAG Guidelines",
      "Assistive Technologies",
      "Inclusive Design",
      "Accessibility Testing",
      "Documentation"
    ],
    learningOutcomes: [
      "Implement WCAG guidelines",
      "Design for assistive technologies",
      "Conduct accessibility audits",
      "Create inclusive experiences"
    ],
    estimatedTimeToComplete: "2 weeks",
    communityRating: 4.8,
    expertiseLevel: {
      current: 2,
      max: 5
    },
    challengeQuests: [
      {
        title: "Accessibility Audit",
        description: "Conduct a comprehensive accessibility audit.",
        xpReward: 250,
        timeEstimate: "4 hours",
        progress: 0,
        total: 3
      },
      {
        title: "Inclusive Design",
        description: "Create an inclusive design system component.",
        xpReward: 200,
        timeEstimate: "3 hours",
        progress: 0,
        total: 2
      }
    ],
    skillTree: [
      {
        title: "WCAG Basics",
        level: 1,
        isUnlocked: true,
        isCompleted: false,
        xpRequired: 150
      },
      {
        title: "Testing Methods",
        level: 2,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 300
      },
      {
        title: "Advanced Tools",
        level: 3,
        isUnlocked: false,
        isCompleted: false,
        xpRequired: 450
      }
    ]
  }
];

export const currentUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  points: 1250,
  level: 5,
  streak: 7,
  lastActive: new Date().toISOString(),
  coursesEnrolled: ["1", "3", "4"],
  completedLevels: ["1-1", "1-2", "3-1", "4-1"],
  achievements: [
    {
      id: "first_steps",
      name: "First Steps",
      description: "Complete your first course",
      icon: "🚀",
      unlockedAt: "2024-03-15"
    },
    {
      id: "rising_star",
      name: "Rising Star",
      description: "Earn 1000 XP",
      icon: "⭐",
      unlockedAt: "2024-03-20"
    }
  ],
  currentQuests: [
    {
      id: "react_master",
      title: "React Master",
      description: "Complete all React courses",
      progress: 2,
      total: 3,
      xpReward: 1000
    },
    {
      id: "perfect_score",
      title: "Perfect Score",
      description: "Get 100% on 3 quizzes",
      progress: 1,
      total: 3,
      xpReward: 500
    }
  ]
};

export const topUsers: User[] = [
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    points: 3200,
    level: 12,
    streak: 14,
    lastActive: new Date().toISOString(),
    coursesEnrolled: ["1", "2", "4"],
    completedLevels: ["1-1", "1-2", "1-3", "2-1", "2-2", "4-1"],
    achievements: [
      {
        id: "code_master",
        name: "Code Master",
        description: "Complete all coding courses",
        icon: "👨‍💻",
        unlockedAt: "2024-03-01"
      }
    ]
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    points: 2800,
    level: 10,
    streak: 7,
    lastActive: new Date().toISOString(),
    coursesEnrolled: ["1", "3", "5"],
    completedLevels: ["1-1", "1-2", "3-1", "3-2", "5-1"],
    achievements: [
      {
        id: "fast_learner",
        name: "Fast Learner",
        description: "Complete 5 courses in a month",
        icon: "⚡",
        unlockedAt: "2024-02-28"
      }
    ]
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    points: 2400,
    level: 8,
    streak: 5,
    lastActive: new Date().toISOString(),
    coursesEnrolled: ["2", "4", "6"],
    completedLevels: ["2-1", "2-2", "4-1", "6-1"],
    achievements: [
      {
        id: "helper",
        name: "Helpful Hand",
        description: "Help 10 other learners",
        icon: "🤝",
        unlockedAt: "2024-03-10"
      }
    ]
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    points: 2100,
    level: 7,
    streak: 2,
    lastActive: new Date().toISOString(),
    coursesEnrolled: ["1", "2", "3"],
    completedLevels: ["1-1", "2-1", "3-1"],
    achievements: [
      {
        id: "consistent",
        name: "Consistency King",
        description: "Maintain a 30-day streak",
        icon: "👑",
        unlockedAt: "2024-02-15"
      }
    ]
  }
];

export const upcomingHackathons: Hackathon[] = [
  {
    id: "1",
    name: "Web3 Hackathon",
    startDate: "2025-06-15",
    endDate: "2025-06-17",
    registrationUrl: "https://example.com/web3-hackathon",
    description: "Build innovative solutions using blockchain technology.",
    xpReward: 2000,
    achievements: ["web3_pioneer", "blockchain_builder"],
    skillsRequired: ["JavaScript", "Solidity", "React"]
  },
  {
    id: "2",
    name: "AI for Good",
    startDate: "2025-06-28",
    endDate: "2025-06-30",
    registrationUrl: "https://example.com/ai-for-good",
    description: "Create AI solutions that address social challenges.",
    xpReward: 1800,
    achievements: ["ai_innovator", "social_impact"],
    skillsRequired: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    id: "3",
    name: "UX Design Challenge",
    startDate: "2025-07-10",
    endDate: "2025-07-12",
    registrationUrl: "https://example.com/ux-challenge",
    description: "Design user-centric interfaces for complex problems.",
    xpReward: 1500,
    achievements: ["ux_champion", "design_innovator"],
    skillsRequired: ["UI/UX Design", "Figma", "User Research"]
  }
];
