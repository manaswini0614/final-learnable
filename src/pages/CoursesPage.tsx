import { UserProgress } from '@/components/user/UserProgress';
import { CourseCard } from '@/components/courses/CourseCard';

const SAMPLE_COURSES = [
  {
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
    duration: '6 hours',
    level: 'beginner',
    progress: 75,
    xpReward: 500,
    achievements: ['HTML Master', 'CSS Wizard', 'JS Explorer'],
    image: 'https://placehold.co/600x400/3730a3/ffffff?text=Web+Dev',
  },
  {
    title: 'React Fundamentals',
    description: 'Master the basics of React and build interactive user interfaces.',
    duration: '8 hours',
    level: 'intermediate',
    progress: 30,
    xpReward: 750,
    achievements: ['Component Creator', 'Hook Hero', 'State Sage'],
    image: 'https://placehold.co/600x400/3730a3/ffffff?text=React',
  },
  {
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript features and advanced type system concepts.',
    duration: '10 hours',
    level: 'advanced',
    xpReward: 1000,
    achievements: ['Type Master', 'Generic Guru', 'Interface Innovator'],
    image: 'https://placehold.co/600x400/3730a3/ffffff?text=TypeScript',
  },
  {
    title: 'Node.js Backend Development',
    description: 'Build scalable backend services with Node.js and Express.',
    duration: '12 hours',
    level: 'intermediate',
    xpReward: 800,
    achievements: ['API Architect', 'Database Pro', 'Security Specialist'],
    image: 'https://placehold.co/600x400/3730a3/ffffff?text=Node.js',
  },
];

const CoursesPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Your Learning Journey</h1>
            <p className="text-muted-foreground">
              Continue your path to becoming a coding master. Each course completed brings you closer to your goals!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAMPLE_COURSES.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                duration={course.duration}
                level={course.level as 'beginner' | 'intermediate' | 'advanced'}
                progress={course.progress}
                xpReward={course.xpReward}
                achievements={course.achievements}
                image={course.image}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <UserProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
