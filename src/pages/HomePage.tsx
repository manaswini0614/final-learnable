import React from 'react';
import { Link } from 'react-router-dom';
import { SimsButton } from '@/components/ui/sims-button';
import { SimsCard } from '@/components/ui/sims-card';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-accent">Welcome to SkillSprint</h1>
        <p className="text-lg text-muted-foreground">
          Accelerate your growth with interactive courses, skill tracking, and a supportive community. Learn, practice, 
          and compete on your journey to mastery.
        </p>
        <div className="flex flex-wrap gap-4">
          <SimsButton variant="primary" size="lg" asChild>
            <Link to="/courses">Explore Courses</Link>
          </SimsButton>
          <SimsButton variant="secondary" size="lg" asChild>
            <Link to="/progress">View Your Progress</Link>
          </SimsButton>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <span role="img" aria-label="trophy" className="text-2xl">🏆</span>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">45</div>
            <div className="text-sm text-muted-foreground">Points</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-destructive/10 rounded-lg">
            <span role="img" aria-label="fire" className="text-2xl">🔥</span>
          </div>
          <div>
            <div className="text-2xl font-bold text-destructive">3</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-accent">Recommended for You</h2>
          <Link to="/courses" className="text-primary hover:text-primary-light transition-colors">
            View All →
          </Link>
        </div>

        <SimsCard variant="interactive" className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <span className="text-xl">UX</span>
            </div>
            <span className="skill-level-badge beginner">Beginner</span>
          </div>
          
          <h3 className="text-xl font-bold">UX Design Foundations</h3>
          <p className="text-muted-foreground">Master the fundamentals of UX design.</p>
          
          <div className="space-y-2">
            <div className="progress-indicator">
              <div className="progress-bar" style={{ width: '19%' }} />
            </div>
            <div className="text-sm text-muted-foreground">5 hours</div>
          </div>
        </SimsCard>
      </div>

      {/* Challenge Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-accent">Ready to challenge yourself?</h2>
        <p className="text-muted-foreground">
          Join a hackathon and apply your skills to real-world problems.
        </p>
        <SimsButton variant="accent">
          Find Hackathons
        </SimsButton>
      </div>
    </div>
  );
}
