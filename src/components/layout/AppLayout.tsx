import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { GameNav } from './GameNav';
import { UserProgress } from '../gamification/UserProgress';

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <motion.div 
            className="col-span-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-8 space-y-6">
              <GameNav />
              <UserProgress />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.main 
            className="col-span-9"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-background-secondary rounded-lg p-6 shadow-lg border border-background-tertiary">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
};
