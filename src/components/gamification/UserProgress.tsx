import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

export const UserProgress = () => {
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  
  const xpNeeded = level * 1000; // Each level requires more XP
  const progress = (xp / xpNeeded) * 100;

  const achievements: Achievement[] = [
    {
      id: "first-course",
      name: "Course Pioneer",
      icon: "🎓",
      description: "Complete your first course",
      unlocked: true,
    },
    {
      id: "streak-7",
      name: "Week Warrior",
      icon: "🔥",
      description: "Maintain a 7-day streak",
      unlocked: true,
    },
    {
      id: "helper",
      name: "Helpful Hero",
      icon: "🦸‍♂️",
      description: "Help 5 other learners",
      unlocked: false,
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Level and XP Display */}
      <div className="flex items-center gap-4">
        <motion.div
          className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-2xl font-bold text-white">
            {level}
          </span>
          <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs px-2 py-1 rounded-full">
            LVL
          </span>
        </motion.div>
        
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-text-secondary">Experience</span>
            <span className="text-sm font-medium text-text-primary">{xp}/{xpNeeded} XP</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Achievements */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className={`p-3 rounded-lg border ${
                achievement.unlocked
                  ? "border-primary bg-background-secondary"
                  : "border-gray-700 bg-background-tertiary opacity-50"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <h4 className="font-medium text-sm">{achievement.name}</h4>
                  <p className="text-xs text-text-muted">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Level Up Animation */}
      <AnimatePresence>
        {showLevelUp && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          >
            <div className="bg-background-secondary p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">Level Up! 🎉</h2>
              <p className="text-xl">You reached level {level}!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 