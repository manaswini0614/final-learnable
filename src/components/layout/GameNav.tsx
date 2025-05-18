import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  BookOpen,
  Trophy,
  Users,
  Map,
  BarChart2,
  Library,
  User
} from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/courses', icon: BookOpen, label: 'Courses' },
  { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
  { path: '/hackbuddies', icon: Users, label: 'Hack Buddies' },
  { path: '/roadmap', icon: Map, label: 'Roadmap' },
  { path: '/skill-graph', icon: BarChart2, label: 'Skill Graph' },
  { path: '/resources', icon: Library, label: 'Resources' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export const GameNav = () => {
  const location = useLocation();

  return (
    <nav className="bg-background-secondary p-4 rounded-lg">
      <div className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="block"
            >
              <motion.div
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-colors duration-200
                  ${isActive 
                    ? 'bg-primary text-white' 
                    : 'text-text-secondary hover:bg-background-tertiary'
                  }
                `}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  initial={false}
                  animate={isActive ? {
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.2, 1.2, 1],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-text-muted'}`} />
                </motion.div>
                
                <span className="font-medium">{item.label}</span>
                
                {isActive && (
                  <motion.div
                    className="ml-auto w-2 h-2 rounded-full bg-secondary"
                    layoutId="nav-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}; 