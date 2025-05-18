import { useState, useEffect } from 'react';

interface FlashCard {
  id: string;
  question: string;
  answer: string;
  level: number;
  questDetails?: {
    title: string;
    story: string;
    task: string;
    correctInput: string;
    rewards: {
      xp: number;
      badge?: string;
      unlockable?: string;
    };
  };
}

interface CardStatus {
  isKnown: boolean;
  needsReview: boolean;
  lastReviewed?: Date;
  questCompleted?: boolean;
  xpEarned?: number;
  badgesEarned?: string[];
}

interface UseFlashCardsProps {
  lessonId: string;
  currentLevel?: number;
}

export function useFlashCards({ lessonId, currentLevel = 1 }: UseFlashCardsProps) {
  const [showFlashCards, setShowFlashCards] = useState(false);
  const [cardStatuses, setCardStatuses] = useState<Record<string, CardStatus>>({});
  const [masteryPercentage, setMasteryPercentage] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedStatuses = localStorage.getItem(`flashcards_${lessonId}_statuses`);
    const savedXP = localStorage.getItem(`flashcards_${lessonId}_xp`);
    const savedBadges = localStorage.getItem(`flashcards_${lessonId}_badges`);
    
    if (savedStatuses) setCardStatuses(JSON.parse(savedStatuses));
    if (savedXP) setTotalXP(parseInt(savedXP));
    if (savedBadges) setEarnedBadges(JSON.parse(savedBadges));
  }, [lessonId]);

  // Calculate mastery percentage whenever card statuses change
  useEffect(() => {
    const totalCards = Object.keys(cardStatuses).length;
    if (totalCards === 0) return;

    const knownCards = Object.values(cardStatuses).filter(status => status.isKnown).length;
    setMasteryPercentage((knownCards / totalCards) * 100);
  }, [cardStatuses]);

  // Example flash cards with C/C++ quest details
  const getFlashCardsForLesson = (lessonId: string): FlashCard[] => {
    return [
      {
        id: '1',
        level: 1,
        question: "What is Game Design?",
        answer: "Game design is the art of creating rules, mechanics, and experiences that make up a game, focusing on player engagement and enjoyment.",
        questDetails: {
          title: "Barbie's Dream Game Studio",
          story: "Welcome to Malibu Game Studios! Barbie has hired you as a junior designer to help create her new fashion and adventure game series!",
          task: "Design a collectible system for Barbie's fashion accessories that awards style points.",
          correctInput: 'Collect sparkly accessories (+10 style points)\nRare pink items give style boost (2x)\nTime-limited fashion challenges',
          rewards: {
            xp: 50,
            badge: "Fashionista Designer",
            unlockable: "Barbie's Pink Design Template"
          }
        }
      },
      {
        id: '2',
        level: 1,
        question: "What are the core elements of game mechanics?",
        answer: "Core game mechanics include rules, goals, challenges, rewards, and feedback systems that create the gameplay experience.",
        questDetails: {
          title: "Dreamhouse Designer Quest",
          story: "Barbie's Dreamhouse needs new interactive features! Help design fun activities for Barbie and her friends.",
          task: "Create an engaging room decoration system with rewards.",
          correctInput: 'Hidden fashion treasures in each room\nStyle points for matching themes\nUnique rewards for different dream spaces',
          rewards: {
            xp: 75,
            badge: "Dreamhouse Innovator",
            unlockable: "Pink Glitter Design Kit"
          }
        }
      },
      {
        id: '3',
        level: 2,
        question: "What is game balancing?",
        answer: "Game balancing is the process of adjusting game mechanics, difficulty, and rewards to ensure fair, engaging, and enjoyable gameplay.",
        questDetails: {
          title: "Fashion Show Challenge",
          story: "The Malibu Fashion Show game needs better challenge progression! Help Barbie create the perfect difficulty curve.",
          task: "Design three fashion show levels with increasing complexity.",
          correctInput: 'Level 1: Basic outfit matching, intro to trends\nLevel 2: Time-limited style challenges\nLevel 3: Ultimate fashion week showdown',
          rewards: {
            xp: 100,
            badge: "Fashion Balance Expert",
            unlockable: "Barbie's Runway Designer"
          }
        }
      },
      {
        id: '4',
        level: 2,
        question: "What is level design?",
        answer: "Level design is the creation of game environments, challenges, and progression systems that guide player experience and storytelling.",
        questDetails: {
          title: "Barbie World Adventure",
          story: "Design an exciting level for Barbie's new adventure game across Malibu!",
          task: "Create a beach-to-city adventure layout with multiple activities.",
          correctInput: 'Malibu beach main path\nSecret boutique shortcuts\nStylish checkpoint cafes\nProgressive fashion challenges',
          rewards: {
            xp: 100,
            badge: "Malibu Level Architect",
            unlockable: "Dreamtopia Level Editor"
          }
        }
      },
      {
        id: '5',
        level: 3,
        question: "What is game monetization?",
        answer: "Game monetization involves strategies to generate revenue from games while maintaining player satisfaction and engagement.",
        questDetails: {
          title: "Barbie's Boutique Business",
          story: "Help Barbie create a fair and fun shopping system for her fashion game!",
          task: "Design a player-friendly fashion store system.",
          correctInput: 'Collectible fashion items\nEarnable style currency\nFashion Pass system\nDaily outfit challenges',
          rewards: {
            xp: 75,
            badge: "Boutique Business Expert",
            unlockable: "Pink Fashion Analytics"
          }
        }
      }
    ];
  };

  const handleLessonComplete = () => {
    setShowFlashCards(true);
  };

  const handleFlashCardsComplete = () => {
    setShowFlashCards(false);
    setShowCelebration(true);
    // Save progress
    localStorage.setItem(`flashcards_${lessonId}_statuses`, JSON.stringify(cardStatuses));
    localStorage.setItem(`flashcards_${lessonId}_xp`, totalXP.toString());
    localStorage.setItem(`flashcards_${lessonId}_badges`, JSON.stringify(earnedBadges));
  };

  const markCardStatus = (cardId: string, status: Partial<CardStatus>) => {
    setCardStatuses(prev => {
      const newStatus = {
        ...prev[cardId],
        ...status,
        lastReviewed: new Date()
      };
      return {
        ...prev,
        [cardId]: newStatus
      };
    });

    // Award XP and badges if quest is completed
    const card = getFlashCardsForLesson(lessonId).find(c => c.id === cardId);
    if (card?.questDetails && status.questCompleted) {
      setTotalXP(prev => prev + (card.questDetails.rewards.xp || 0));
      if (card.questDetails.rewards.badge) {
        setEarnedBadges(prev => [...prev, card.questDetails.rewards.badge!]);
      }
    }
  };

  const getCardsForCurrentLevel = () => {
    return getFlashCardsForLesson(lessonId).filter(card => card.level === currentLevel);
  };

  const isLevelComplete = (level: number) => {
    const levelCards = getFlashCardsForLesson(lessonId).filter(card => card.level === level);
    return levelCards.every(card => cardStatuses[card.id]?.questCompleted);
  };

  return {
    showFlashCards,
    flashCards: getCardsForCurrentLevel(),
    cardStatuses,
    masteryPercentage,
    totalXP,
    earnedBadges,
    showCelebration,
    handleLessonComplete,
    handleFlashCardsComplete,
    markCardStatus,
    isLevelComplete,
    setShowCelebration
  };
} 