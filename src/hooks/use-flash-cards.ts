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

  // Example flash cards with quest details
  const getFlashCardsForLesson = (lessonId: string): FlashCard[] => {
    return [
      {
        id: '1',
        level: 1,
        question: "What does the <a> tag do?",
        answer: "It defines a hyperlink that navigates to another page or location.",
        questDetails: {
          title: "Bridge to the HTML Castle",
          story: "Oh no! Mario needs to reach the HTML Castle, but the bridge is broken.",
          task: "Use the correct <a> tag to build a clickable path for Mario.",
          correctInput: '<a href="castle.html">Go to Castle</a>',
          rewards: {
            xp: 50,
            badge: "HTML Apprentice",
            unlockable: "Castle Theme"
          }
        }
      },
      {
        id: '2',
        level: 1,
        question: "How do you add an image using HTML?",
        answer: "Use the <img> tag with src attribute to specify the image source and alt for accessibility.",
        questDetails: {
          title: "Restore the Gallery of Legends",
          story: "The Great HTML Gallery lost all its paintings!",
          task: "Place the missing image using the correct HTML tag.",
          correctInput: '<img src="legend.jpg" alt="Legend Portrait">',
          rewards: {
            xp: 50,
            badge: "Image Inserter",
            unlockable: "Gallery Theme"
          }
        }
      },
      {
        id: '3',
        level: 2,
        question: "What's the difference between <div> and <span>?",
        answer: "<div> is a block-level element that starts on a new line, while <span> is an inline element used within text.",
        questDetails: {
          title: "Fix the Layout Chaos",
          story: "The web layout has collapsed! Blocks and text are all mixed up.",
          task: "Use the correct tags to fix block-level and inline elements.",
          correctInput: '<div class="container"><span>inline text</span></div>',
          rewards: {
            xp: 75,
            badge: "Layout Fixer",
            unlockable: "Layout Theme"
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