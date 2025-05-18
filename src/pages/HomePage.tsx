import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses, currentUser } from "@/data/mockData";
import StreakPointsCard from "@/components/user/StreakPointsCard";
import { motion } from 'framer-motion';
import { RewardsPanel } from '@/components/gamification/RewardsPanel';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Rocket,
  Target,
  Zap,
  Trophy,
  Calendar
} from 'lucide-react';

const HomePage = () => {
  const featuredCourses = courses.filter(course => course.isRecommended).slice(0, 3);
  
  const dailyGoals = [
    { id: 1, name: 'Complete 2 Lessons', progress: 50, icon: <Rocket className="w-5 h-5" /> },
    { id: 2, name: 'Earn 100 XP', progress: 75, icon: <Zap className="w-5 h-5" /> },
    { id: 3, name: 'Help a Peer', progress: 0, icon: <Target className="w-5 h-5" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">Welcome Back, Learner! 👋</h1>
        <p className="text-text-secondary">Ready to continue your learning journey?</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Goals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold">Daily Goals</h2>
            </div>

            <div className="space-y-4">
              {dailyGoals.map((goal) => (
                <motion.div
                  key={goal.id}
                  variants={itemVariants}
                  className="p-4 rounded-lg bg-background-tertiary"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {goal.icon}
                    </div>
                    <span className="font-medium">{goal.name}</span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <RewardsPanel />
        </motion.div>
      </div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { label: 'Current Streak', value: '7 Days', icon: <Zap className="w-5 h-5" /> },
          { label: 'Total XP', value: '1,600', icon: <Trophy className="w-5 h-5" /> },
          { label: 'Global Rank', value: '#256', icon: <Target className="w-5 h-5" /> },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="bg-background-secondary p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-text-secondary">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Recommended for You</h2>
          <Button variant="ghost" asChild size="sm">
            <Link to="/courses" className="flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded bg-primary/10 text-primary font-medium">
                  {course.icon}
                </div>
                <span className="skill-level-badge lowercase first-letter:uppercase">
                  {course.level}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-gray-600 mt-2 mb-4">{course.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="progress-indicator">
                  <div 
                    className="progress-bar bg-primary" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-500">
                  {course.totalHours} hours
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary/5 rounded-lg p-6 mt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Ready to challenge yourself?</h2>
            <p className="text-gray-600 mt-1">
              Join a hackathon and apply your skills to real-world problems.
            </p>
          </div>
          <Button asChild>
            <Link to="/hackbuddies">Find Hackathons</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
