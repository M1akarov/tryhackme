import React from 'react';
import { getDifficultyColor } from '../mock/tryhackmeData';

const ContentCard = ({ content, index }) => {
  const difficultyStyles = getDifficultyColor(content.difficulty);

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 transition-all duration-500 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] hover:transform hover:scale-[1.02] interactive"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'slideInFromBottom 0.8s ease-out forwards',
        opacity: 0,
        transform: 'translateY(50px)',
      }}
    >
      {content.isNew && (
        <div className="absolute -top-2 -right-2 bg-green-400 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse">
          NEW
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyStyles}`}>
            {content.difficulty}
          </span>
          <span className="text-gray-400 text-sm">
            {content.estimatedTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
          {content.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed">
          {content.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {content.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs px-2 py-1 bg-gray-800/50 text-green-300 rounded border border-gray-600/30"
            >
              #{tag}
            </span>
          ))}
          {content.tags.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded border border-gray-600/30">
              +{content.tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400 font-medium">
            {content.category}
          </span>
          
          <a
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive inline-flex items-center px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 hover:border-green-400 text-green-400 font-medium rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] group-hover:animate-pulse"
          >
            <span>Access Room</span>
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
    </div>
  );
};

export default ContentCard;