import { useState } from 'react';
import { Shield, Star, Trophy, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  earned: boolean;
}

const SAMPLE_ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first course',
    icon: <Star className="w-6 h-6" />,
    earned: true,
  },
  {
    id: '2',
    title: 'Knowledge Seeker',
    description: 'Complete 5 courses',
    icon: <Trophy className="w-6 h-6" />,
    earned: false,
  },
  {
    id: '3',
    title: 'Code Warrior',
    description: 'Submit 10 exercises',
    icon: <Shield className="w-6 h-6" />,
    earned: true,
  },
  {
    id: '4',
    title: 'Master Learner',
    description: 'Achieve 1000 XP',
    icon: <Award className="w-6 h-6" />,
    earned: false,
  },
];

export const UserProgress = () => {
  const [currentXP] = useState(450);
  const [level] = useState(3);
  const xpForNextLevel = 1000;
  const progress = (currentXP / xpForNextLevel) * 100;

  return (
    <div className="space-y-6">
      <div className="game-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Level {level}</h2>
          <span className="xp-text text-xl">{currentXP} XP</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to Level {level + 1}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="progress-indicator">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </Progress>
        </div>
      </div>

      <div className="game-card">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SAMPLE_ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                achievement.earned
                  ? 'bg-primary/10 dark:bg-primary/20'
                  : 'bg-muted/50 opacity-50'
              }`}
            >
              <div className={`achievement-badge ${achievement.earned ? 'floating' : ''}`}>
                {achievement.icon}
              </div>
              <div>
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="game-card">
        <h2 className="text-xl font-bold mb-4">Daily Streak</h2>
        <div className="flex items-center space-x-4">
          <div className="achievement-badge floating">
            <span className="text-xl font-bold">7</span>
          </div>
          <div>
            <p className="font-semibold">7 Day Streak! 🔥</p>
            <p className="text-sm text-muted-foreground">Keep learning daily to maintain your streak!</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 