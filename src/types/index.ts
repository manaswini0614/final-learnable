export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  shortCode: string;
  icon: string;
  progress?: number;
  totalHours?: number;
  completedHours?: number;
  isRecommended?: boolean;
  xpReward?: number;
  achievements?: string[];
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  skillsGained?: string[];
  prerequisites?: string[];
  challengeQuests?: {
    title: string;
    description: string;
    xpReward: number;
    timeEstimate: string;
    progress: number;
    total: number;
  }[];
  skillTree?: {
    title: string;
    level: number;
    isUnlocked: boolean;
    isCompleted: boolean;
    xpRequired: number;
    dependsOn?: string[];
  }[];
  learningOutcomes?: string[];
  estimatedTimeToComplete?: string;
  communityRating?: number;
  expertiseLevel?: {
    current: number;
    max: number;
  };
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  xpReward: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
  streak: number;
  lastActive: string;
  coursesEnrolled: string[];
  completedLevels: string[];
  achievements?: Achievement[];
  currentQuests?: Quest[];
}

export interface Hackathon {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  registrationUrl: string;
  description: string;
  xpReward?: number;
  achievements?: string[];
  skillsRequired?: string[];
}

export interface Level {
  id: string;
  courseId: string;
  title: string;
  description: string;
  resources: Resource[];
  quiz: Quiz;
  order: number;
  price?: number;
  isPaid: boolean;
  xpReward?: number;
  achievements?: string[];
}

export interface Resource {
  id: string;
  title: string;
  type: "video" | "article" | "documentation";
  url: string;
  content?: string;
  xpReward?: number;
}

export interface Quiz {
  id: string;
  levelId: string;
  questions: Question[];
  xpReward?: number;
  achievements?: string[];
}

export interface Question {
  id: string | number;
  text?: string;
  question?: string;
  options: string[];
  correctAnswerIndex?: number;
  correctAnswer?: number;
  xpReward?: number;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  milestones: Milestone[];
  totalHours: number;
  progress: number;
  isAIGenerated: boolean;
  xpReward?: number;
  achievements?: string[];
}

export interface Milestone {
  id: number;
  title: string;
  description: string;
  resources: Resource[];
  timeEstimate: string;
  completed: boolean;
  xpReward?: number;
  achievements?: string[];
}

export interface SkillArea {
  name: string;
  value: number;
  fullMark: number;
}

export interface LevelStatus {
  completed: boolean;
  paid: boolean;
}

export interface LevelStatusMap {
  [key: string]: LevelStatus;
}
