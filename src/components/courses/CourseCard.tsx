import { Book, Clock, Star, Trophy } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  progress?: number;
  xpReward: number;
  achievements: string[];
  image?: string;
}

export const CourseCard = ({
  title,
  description,
  duration,
  level,
  progress = 0,
  xpReward,
  achievements,
  image,
}: CourseCardProps) => {
  return (
    <div className="game-card group">
      {/* Course Image */}
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img
          src={image || 'https://placehold.co/600x400/3730a3/ffffff?text=Course+Image'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-2 left-4">
          <span className={`skill-level-badge ${level}`}>
            {level.charAt(0).toUpperCase() + level.slice(1)}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground mt-1 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="xp-text">{xpReward} XP</span>
          </div>
        </div>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="progress-indicator">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </Progress>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Achievements to Unlock</h4>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full"
                >
                  <Star className="w-3 h-3" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button className="game-button w-full">
          {progress > 0 ? 'Continue Learning' : 'Start Course'}
        </Button>
      </div>
    </div>
  );
}; 