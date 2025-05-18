import { SimsCard } from "@/components/ui/SimsCard";
import { AchievementBadge, LevelIndicator, ProgressBar, RewardCard, XPBadge } from "@/components/ui/GameElements";
import { PlumbobLoader } from "@/components/ui/PlumbobLoader";

export const GameDemo = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-sims-pattern opacity-5 animate-plumbob-glow"></div>
        <h1 className="text-5xl font-sims bg-clip-text text-transparent bg-sims-gradient mb-4 animate-bounce-subtle">
          Your Sim's Journey
        </h1>
        <p className="text-gray-600 text-lg">Level up your skills and unlock new abilities! 🎮</p>
      </div>

      {/* Level and XP Section */}
      <SimsCard
        showPlumbob
        active
        className="flex items-center justify-between mb-8"
      >
        <LevelIndicator level={5} />
        <XPBadge xp={1250} />
      </SimsCard>

      {/* Progress Section */}
      <SimsCard
        title="Skill Progress"
        icon="📊"
        className="mb-8"
      >
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-lg font-sims text-sims-green">React Development</span>
              <span className="text-lg font-sims text-sims-green">75%</span>
            </div>
            <ProgressBar progress={75} total={100} />
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-lg font-sims text-sims-green">TypeScript Mastery</span>
              <span className="text-lg font-sims text-sims-green">40%</span>
            </div>
            <ProgressBar progress={40} total={100} />
          </div>
        </div>
      </SimsCard>

      {/* Achievements Section */}
      <SimsCard
        title="Life Achievements"
        icon="🏆"
        className="mb-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AchievementBadge
            icon="💻"
            name="Code Novice"
            description="Complete your first coding challenge"
            unlocked={true}
          />
          <AchievementBadge
            icon="⚡"
            name="Quick Learner"
            description="Complete a course in record time"
            unlocked={true}
          />
          <AchievementBadge
            icon="🎯"
            name="Problem Solver"
            description="Solve 10 coding challenges"
            unlocked={false}
          />
          <AchievementBadge
            icon="🌟"
            name="Code Master"
            description="Achieve perfect score"
            unlocked={false}
          />
        </div>
      </SimsCard>

      {/* Available Rewards */}
      <SimsCard
        title="Career Opportunities"
        icon="💼"
        showPlumbob
      >
        <div className="grid gap-6 md:grid-cols-2">
          <RewardCard
            icon="🚀"
            title="Frontend Developer"
            description="Master React and modern web development"
            xpReward={500}
          />
          <RewardCard
            icon="🎨"
            title="UI/UX Designer"
            description="Create beautiful and functional interfaces"
            xpReward={300}
          />
          <RewardCard
            icon="🤝"
            title="Team Leader"
            description="Lead a development team to success"
            xpReward={200}
          />
          <RewardCard
            icon="📱"
            title="Mobile Developer"
            description="Build cross-platform mobile apps"
            xpReward={400}
          />
        </div>
      </SimsCard>

      {/* Loading Demo */}
      <div className="flex justify-center pt-8">
        <PlumbobLoader size="lg" />
      </div>
    </div>
  );
}; 