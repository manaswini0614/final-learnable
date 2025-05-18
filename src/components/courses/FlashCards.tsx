import React, { useState } from 'react';
import { SimsCard } from '@/components/ui/sims-card';
import { SimsButton } from '@/components/ui/sims-button';
import { PlumbobLoader } from '@/components/ui/plumbob-loader';

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

interface FlashCardsProps {
  cards: FlashCard[];
  cardStatuses: Record<string, CardStatus>;
  onComplete: () => void;
  onUpdateStatus: (cardId: string, status: Partial<CardStatus>) => void;
  masteryPercentage: number;
  currentLevel: number;
  totalXP: number;
  earnedBadges: string[];
  showCelebration: boolean;
  setShowCelebration: (show: boolean) => void;
}

export function FlashCards({ 
  cards, 
  cardStatuses,
  onComplete, 
  onUpdateStatus,
  masteryPercentage,
  currentLevel,
  totalXP,
  earnedBadges,
  showCelebration,
  setShowCelebration
}: FlashCardsProps) {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [completedCards, setCompletedCards] = useState<number[]>([]);

  const currentCard = cards[currentCardIndex];
  const isLastCard = currentCardIndex === cards.length - 1;
  const progress = (completedCards.length / cards.length) * 100;

  const handleNextCard = () => {
    if (isLastCard) {
      onComplete();
    } else {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
      setUserInput('');
      setShowHint(false);
      setAttempts(0);
    }
    setCompletedCards(prev => [...prev, currentCardIndex]);
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmitAnswer = () => {
    if (currentCard.questDetails) {
      if (userInput.trim() === currentCard.questDetails.correctInput.trim()) {
        onUpdateStatus(currentCard.id, { 
          isKnown: true, 
          needsReview: false,
          questCompleted: true,
          xpEarned: currentCard.questDetails.rewards.xp
        });
        handleNextCard();
      } else {
        setAttempts(prev => prev + 1);
        if (attempts >= 1) {
          setShowHint(true);
        }
      }
    }
  };

  if (showCelebration) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <SimsCard className="max-w-2xl w-full space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-sims-gradient opacity-10" />
          <div className="relative space-y-4 text-center">
            <h2 className="text-3xl font-bold text-accent">🎉 Quest Complete!</h2>
            <div className="space-y-2">
              <p className="text-xl text-primary">Total XP Earned: {totalXP}</p>
              {earnedBadges.length > 0 && (
                <div className="space-y-2">
                  <p className="text-lg font-medium">Badges Unlocked:</p>
                  <div className="flex justify-center gap-2">
                    {earnedBadges.map((badge, index) => (
                      <div 
                        key={index}
                        className="px-3 py-1.5 bg-primary/10 rounded-full text-primary animate-bounce-subtle"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <SimsButton 
              variant="primary"
              onClick={() => setShowCelebration(false)}
              className="mt-4"
            >
              🎮 Continue to Next Mission
            </SimsButton>
          </div>
        </SimsCard>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <SimsCard className="max-w-3xl w-full space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-accent">
            {currentCard.questDetails?.title || `Level ${currentLevel} Review!`}
          </h2>
          <p className="text-muted-foreground">
            {currentCard.questDetails?.story || "Test your knowledge with these flash cards"}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="text-sm text-primary">
              Mastery: {Math.round(masteryPercentage)}%
            </div>
            <div className="h-2 w-24 bg-sims-ui rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${masteryPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="progress-indicator">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        <div 
          className={`min-h-[200px] p-6 rounded-xl bg-sims-pattern cursor-pointer transition-all duration-300 transform ${
            isFlipped ? 'scale-[0.98]' : ''
          }`}
          onClick={handleFlipCard}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4">
              {isFlipped ? (
                <>
                  <div className="text-sm text-primary font-medium">Answer:</div>
                  <div className="text-xl">{currentCard.answer}</div>
                </>
              ) : (
                <>
                  <div className="text-sm text-primary font-medium">
                    Question {currentCardIndex + 1} of {cards.length}:
                  </div>
                  <div className="text-xl">{currentCard.question}</div>
                </>
              )}
            </div>
          </div>
        </div>

        {currentCard.questDetails && (
          <div className="space-y-4">
            <div className="p-4 bg-sims-ui rounded-lg">
              <h3 className="font-medium mb-2">🎯 Your Quest:</h3>
              <p className="text-muted-foreground mb-4">{currentCard.questDetails.task}</p>
              <div className="space-y-2">
                <textarea
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Write your code here..."
                  className="w-full h-24 p-3 rounded-lg bg-white/50 border border-sims-ui-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {showHint && (
                  <div className="text-sm text-primary">
                    💡 Hint: Try something like {currentCard.questDetails.correctInput}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Potential Reward: {currentCard.questDetails.rewards.xp} XP
              </div>
              <SimsButton 
                variant="primary"
                onClick={handleSubmitAnswer}
              >
                Submit Answer
              </SimsButton>
            </div>
          </div>
        )}

        {!currentCard.questDetails && (
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <SimsButton 
                variant="secondary"
                onClick={() => onUpdateStatus(currentCard.id, { needsReview: true })}
              >
                Review Later
              </SimsButton>
              <SimsButton 
                variant="accent"
                onClick={() => onUpdateStatus(currentCard.id, { isKnown: true })}
              >
                I Know This
              </SimsButton>
            </div>
            <SimsButton 
              variant="primary"
              onClick={handleNextCard}
            >
              {isLastCard ? 'Complete Review' : 'Next Card'}
            </SimsButton>
          </div>
        )}

        {cardStatuses[currentCard.id]?.needsReview && (
          <div className="text-sm text-destructive text-center">
            This card is marked for review
          </div>
        )}
      </SimsCard>
    </div>
  );
} 