import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  total: number;
  className?: string;
}

export const ProgressBar = ({ progress, total, className }: ProgressBarProps) => {
  const percentage = Math.min((progress / total) * 100, 100);
  
  return (
    <div className={cn("w-full h-6 bg-slate-100 rounded-full overflow-hidden shadow-inner", className)}>
      <div
        style={{ width: `${percentage}%` }}
        className="h-full bg-candy-gradient animate-pulse-soft relative"
      >
        <div className="absolute inset-0 bg-sparkle-pattern opacity-50 animate-sparkle"></div>
      </div>
    </div>
  );
};

interface AchievementBadgeProps {
  icon: string;
  name: string;
  description: string;
  unlocked?: boolean;
  className?: string;
}

export const AchievementBadge = ({ 
  icon, 
  name, 
  description, 
  unlocked = false,
  className 
}: AchievementBadgeProps) => {
  return (
    <div 
      className={cn(
        "relative group cursor-pointer transition-all duration-300",
        unlocked ? "animate-float" : "opacity-50 grayscale",
        className
      )}
    >
      <div className={cn(
        "w-20 h-20 rounded-full flex items-center justify-center text-3xl transform transition-transform group-hover:scale-110",
        unlocked ? "bg-candy-gradient shadow-candy animate-rotate-candy" : "bg-slate-200"
      )}>
        <span className="animate-bounce-subtle">{icon}</span>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-sm text-white text-sm rounded-xl py-2 px-4 text-center min-w-[180px] shadow-glow-sm">
        <p className="font-game">{name}</p>
        <p className="text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

interface XPBadgeProps {
  xp: number;
  className?: string;
}

export const XPBadge = ({ xp, className }: XPBadgeProps) => {
  return (
    <div className={cn(
      "inline-flex items-center px-4 py-2 rounded-full bg-candy-gradient text-white font-game shadow-candy animate-pulse-soft",
      className
    )}>
      <span className="mr-2 animate-sparkle">✨</span>
      <span className="text-lg">{xp} XP</span>
    </div>
  );
};

interface LevelIndicatorProps {
  level: number;
  className?: string;
}

export const LevelIndicator = ({ level, className }: LevelIndicatorProps) => {
  return (
    <div className={cn(
      "inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-candy-gradient text-white font-game shadow-candy animate-glow",
      className
    )}>
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center animate-rotate-candy">
        <span className="text-2xl">🍬</span>
      </div>
      <div>
        <p className="text-xs opacity-90 uppercase tracking-wider">Sweet Level</p>
        <p className="text-2xl font-bold">{level}</p>
      </div>
    </div>
  );
};

interface RewardCardProps {
  title: string;
  description: string;
  xpReward: number;
  icon: string;
  className?: string;
}

export const RewardCard = ({ 
  title, 
  description, 
  xpReward, 
  icon,
  className 
}: RewardCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl bg-white border-2 border-primary/20 shadow-candy hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-xl bg-candy-gradient flex items-center justify-center text-3xl shadow-glow-sm group-hover:animate-bounce-subtle">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-game text-xl bg-clip-text text-transparent bg-candy-gradient">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="mt-4 flex items-center gap-2">
            <XPBadge xp={xpReward} />
            <span className="text-primary animate-bounce-subtle">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface QuestProps {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeEstimate: string;
  xpReward: number;
  skillsGained: string[];
  progress: number;
  total: number;
  className?: string;
}

export const Quest = ({
  title,
  description,
  difficulty,
  timeEstimate,
  xpReward,
  skillsGained,
  progress,
  total,
  className
}: QuestProps) => {
  const difficultyColors = {
    Easy: 'bg-success/20 text-success-dark',
    Medium: 'bg-warning/20 text-warning-dark',
    Hard: 'bg-destructive/20 text-destructive-dark'
  };

  return (
    <div className={cn(
      "p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-primary/10 shadow-candy hover:shadow-glow-lg transition-all duration-300 group",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={cn(
              "px-3 py-1 rounded-full text-sm font-game",
              difficultyColors[difficulty]
            )}>
              {difficulty}
            </span>
            <span className="text-sm text-gray-500">⏱️ {timeEstimate}</span>
          </div>
          <h3 className="font-game text-xl bg-clip-text text-transparent bg-candy-gradient mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-game text-primary">{progress}/{total}</span>
              </div>
              <ProgressBar progress={progress} total={total} />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700">Skills you'll gain:</p>
              <div className="flex flex-wrap gap-2">
                {skillsGained.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <XPBadge xp={xpReward} />
              <button className="font-game text-primary hover:text-primary-dark transition-colors">
                Start Quest →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SkillTreeNodeProps {
  title: string;
  level: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  dependsOn?: string[];
  xpRequired: number;
  className?: string;
}

export const SkillTreeNode = ({
  title,
  level,
  isUnlocked,
  isCompleted,
  xpRequired,
  className
}: SkillTreeNodeProps) => {
  return (
    <div 
      className={cn(
        "relative p-4 rounded-xl transition-all duration-300",
        isCompleted ? "bg-candy-gradient text-white shadow-glow-lg" :
        isUnlocked ? "bg-white/80 border-2 border-primary/20 shadow-candy hover:shadow-glow-lg" :
        "bg-gray-100 opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center text-lg",
          isCompleted ? "bg-white/20" : "bg-primary/10"
        )}>
          {level}
        </div>
        <div>
          <h4 className={cn(
            "font-game text-lg",
            !isCompleted && "bg-clip-text text-transparent bg-candy-gradient"
          )}>{title}</h4>
          <p className="text-sm opacity-80">
            {isCompleted ? "Completed" : `${xpRequired} XP required`}
          </p>
        </div>
      </div>
    </div>
  );
}; 