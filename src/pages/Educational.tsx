import React, { useState } from 'react';
import { BookOpen, Play, Award, Clock, Users, Star, ChevronRight, Languages, Globe, Brain } from 'lucide-react';

const Educational: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'language', name: 'Languages', icon: Languages },
    { id: 'history', name: 'History', icon: Globe },
    { id: 'culture', name: 'Culture', icon: Brain },
  ];

  const courses = [
    {
      id: 1,
      title: 'Learn Amharic - Beginner',
      description: 'Master the basics of Ethiopia\'s official language with interactive lessons',
      category: 'language',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '6 weeks',
      lessons: 24,
      students: '2.1k',
      rating: 4.8,
      level: 'Beginner',
      progress: 0
    },
    {
      id: 2,
      title: 'Ancient Ethiopian History',
      description: 'Explore 3000 years of Ethiopian civilization from Axum to modern times',
      category: 'history',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '4 weeks',
      lessons: 16,
      students: '1.8k',
      rating: 4.9,
      level: 'Intermediate',
      progress: 0
    },
    {
      id: 3,
      title: 'Ethiopian Coffee Culture',
      description: 'Discover the birthplace of coffee and traditional ceremony practices',
      category: 'culture',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '2 weeks',
      lessons: 8,
      students: '3.2k',
      rating: 4.7,
      level: 'Beginner',
      progress: 0
    },
    {
      id: 4,
      title: 'Ge\'ez Script & Manuscripts',
      description: 'Learn to read ancient Ethiopian script and understand historical texts',
      category: 'language',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '8 weeks',
      lessons: 32,
      students: '892',
      rating: 4.9,
      level: 'Advanced',
      progress: 0
    },
    {
      id: 5,
      title: 'Traditional Ethiopian Music',
      description: 'Explore the rich musical heritage and traditional instruments',
      category: 'culture',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '3 weeks',
      lessons: 12,
      students: '1.5k',
      rating: 4.6,
      level: 'Beginner',
      progress: 0
    },
    {
      id: 6,
      title: 'Ethiopian Orthodox Christianity',
      description: 'Understanding the unique traditions and practices of Ethiopian Christianity',
      category: 'history',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '5 weeks',
      lessons: 20,
      students: '1.2k',
      rating: 4.8,
      level: 'Intermediate',
      progress: 0
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Ethiopian Geography Quiz',
      description: 'Test your knowledge of Ethiopia\'s regions and landmarks',
      questions: 10,
      difficulty: 'Easy',
      completions: '5.2k'
    },
    {
      id: 2,
      title: 'Ancient Kingdoms Challenge',
      description: 'How well do you know Ethiopian historical kingdoms?',
      questions: 15,
      difficulty: 'Medium',
      completions: '3.1k'
    },
    {
      id: 3,
      title: 'Cultural Traditions Expert',
      description: 'Master level quiz on Ethiopian customs and traditions',
      questions: 20,
      difficulty: 'Hard',
      completions: '1.8k'
    }
  ];

  const filteredCourses = courses.filter(course => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'Hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="px-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Educational Portal
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn about Ethiopian heritage and culture
        </p>
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4 text-center">Learning Statistics</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">25+</div>
            <div className="text-xs text-white/80">Courses</div>
          </div>
          <div>
            <div className="text-2xl font-bold">12k+</div>
            <div className="text-xs text-white/80">Students</div>
          </div>
          <div>
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-xs text-white/80">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <Icon size={16} />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Course */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={filteredCourses[0]?.image}
            alt={filteredCourses[0]?.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-ethiopian-green text-white px-3 py-1 rounded-full text-xs font-medium">
              ⭐ FEATURED
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {filteredCourses[0]?.title}
            </h2>
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {filteredCourses[0]?.rating}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {filteredCourses[0]?.description}
          </p>
          
          <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>{filteredCourses[0]?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen size={16} />
              <span>{filteredCourses[0]?.lessons} lessons</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users size={16} />
              <span>{filteredCourses[0]?.students} students</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(filteredCourses[0]?.level || '')}`}>
              {filteredCourses[0]?.level}
            </span>
            <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline flex items-center space-x-1">
              <Play size={16} />
              <span>Start Learning</span>
            </button>
          </div>
          
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-medium transition-colors">
            Enroll Now - Free
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          All Courses
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCourses.slice(1).map((course, index) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {course.rating}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {course.title}
                </h4>
                
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center space-x-1">
                    <Clock size={10} />
                    <span>{course.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <BookOpen size={10} />
                    <span>{course.lessons} lessons</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users size={10} />
                    <span>{course.students}</span>
                  </span>
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Quizzes */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Test Your Knowledge
        </h3>
        
        <div className="space-y-4">
          {quizzes.map((quiz, index) => (
            <div
              key={quiz.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {quiz.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    {quiz.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <span>{quiz.questions} questions</span>
                    <span>{quiz.completions} completed</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setActiveQuiz(activeQuiz === quiz.id ? null : quiz.id)}
                  className="ml-4 bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors"
                >
                  <ChevronRight size={16} className={`transform transition-transform ${activeQuiz === quiz.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
              
              {activeQuiz === quiz.id && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-slide-up">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h5 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">
                      Sample Question:
                    </h5>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Which ancient Ethiopian kingdom was known for its towering obelisks?
                    </p>
                    <div className="space-y-2">
                      {['Axum', 'Lalibela', 'Gondar', 'Harar'].map((option, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-sm"
                        >
                          {String.fromCharCode(65 + idx)}. {option}
                        </button>
                      ))}
                    </div>
                    <button className="w-full mt-3 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                      Start Full Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Section */}
      <div className="bg-gradient-to-r from-ethiopian-yellow to-ethiopian-gold rounded-2xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Award size={24} />
          <h3 className="text-lg font-bold">Your Learning Journey</h3>
        </div>
        <p className="text-sm text-white/90 mb-4">
          Complete courses and quizzes to earn certificates and badges
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <div className="text-xl font-bold">0</div>
            <div className="text-xs text-white/80">Courses Completed</div>
          </div>
          <div className="bg-white/20 rounded-xl p-3 text-center">
            <div className="text-xl font-bold">0</div>
            <div className="text-xs text-white/80">Certificates Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educational;