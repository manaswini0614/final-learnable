import { motion } from 'framer-motion';
import { Star, Gift, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Reward {
  id: string;
  name: string;
  points: number;
  icon: JSX.Element;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const rewards: Reward[] = [
  {
    id: '1',
    name: 'Quick Learner',
    points: 100,
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    rarity: 'common',
  },
  {
    id: '2',
    name: 'Code Master',
    points: 500,
    icon: <Gift className="w-6 h-6 text-purple-500" />,
    rarity: 'rare',
  },
  {
    id: '3',
    name: 'Bug Hunter',
    points: 1000,
    icon: <Award className="w-6 h-6 text-blue-500" />,
    rarity: 'epic',
  },
];

const rarityColors = {
  common: 'border-gray-400 bg-gray-500/10',
  rare: 'border-purple-500 bg-purple-500/10',
  epic: 'border-blue-500 bg-blue-500/10',
  legendary: 'border-orange-500 bg-orange-500/10',
};

export const RewardsPanel = () => {
  return (
    <Card className="p-6 bg-background-secondary">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Award className="w-5 h-5 text-primary" />
        Rewards
      </h2>
      
      <div className="grid gap-4">
        {rewards.map((reward, index) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              p-4 rounded-lg border-2
              ${rarityColors[reward.rarity]}
              hover:scale-[1.02] transition-transform
            `}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {reward.icon}
              </motion.div>
              
              <div className="flex-1">
                <h3 className="font-medium">{reward.name}</h3>
                <p className="text-sm text-text-muted">
                  {reward.points} points
                </p>
              </div>

              <span className="text-xs uppercase font-semibold px-2 py-1 rounded-full bg-background-tertiary">
                {reward.rarity}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-6 p-4 rounded-lg bg-background-tertiary"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Total Points</h4>
            <p className="text-sm text-text-muted">Keep earning!</p>
          </div>
          <motion.span
            className="text-2xl font-bold text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            1,600
          </motion.span>
        </div>
      </motion.div>
    </Card>
  );
}; 