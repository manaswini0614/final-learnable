import { Card } from "@/components/ui/card";
import { Quest, SkillTreeNode } from "@/components/ui/GameElements";

export const LearningQuests = () => {
  const quests = [
    {
      title: "Problem-Solving Challenge",
      description: "Apply your knowledge to solve real-world coding problems. Each solution unlocks new perspectives!",
      difficulty: "Medium" as const,
      timeEstimate: "45 mins",
      xpReward: 300,
      skillsGained: ["Critical Thinking", "Code Organization", "Debugging"],
      progress: 2,
      total: 5
    },
    {
      title: "Team Collaboration Sprint",
      description: "Work with peers to build a mini-project. Learn from others while sharing your expertise!",
      difficulty: "Hard" as const,
      timeEstimate: "2 hours",
      xpReward: 500,
      skillsGained: ["Team Work", "Communication", "Project Planning"],
      progress: 1,
      total: 3
    },
    {
      title: "Code Review Master",
      description: "Review and improve existing code. Train your eye for quality and best practices!",
      difficulty: "Easy" as const,
      timeEstimate: "30 mins",
      xpReward: 200,
      skillsGained: ["Code Quality", "Best Practices", "Attention to Detail"],
      progress: 3,
      total: 5
    }
  ];

  const skillTree = [
    {
      title: "Foundations",
      level: 1,
      isUnlocked: true,
      isCompleted: true,
      xpRequired: 100
    },
    {
      title: "Advanced Concepts",
      level: 2,
      isUnlocked: true,
      isCompleted: false,
      xpRequired: 300
    },
    {
      title: "Expert Techniques",
      level: 3,
      isUnlocked: false,
      isCompleted: false,
      xpRequired: 500
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-game bg-clip-text text-transparent bg-candy-gradient">
            Learning Adventures
          </h2>
          <p className="text-gray-600">
            Choose your next challenge and level up your skills! 🚀
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quests.map((quest, index) => (
            <Quest
              key={index}
              {...quest}
            />
          ))}
        </div>
      </section>

      <section>
        <Card className="p-8 bg-white/50 backdrop-blur-sm border-2 border-primary/10 shadow-candy">
          <h2 className="text-3xl font-game bg-clip-text text-transparent bg-candy-gradient mb-6">
            Your Learning Path
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-600">
              Track your progress and unlock new skills as you advance. Each level builds upon your previous achievements!
            </p>
            
            <div className="grid gap-4 md:grid-cols-3">
              {skillTree.map((node, index) => (
                <SkillTreeNode
                  key={index}
                  {...node}
                />
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}; 