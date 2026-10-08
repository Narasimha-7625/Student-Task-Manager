import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto py-6">
      <div className="max-w-5xl mx-auto px-4 text-center sm:flex sm:justify-between sm:items-center text-xs text-gray-500">
        <p>
          Full Stack Web Development &bull; <span className="font-semibold text-gray-700">Tutorial 2 (Unit 2)</span>
        </p>
        <p className="mt-2 sm:mt-0">
          Built with React &bull; React Router &bull; Pure Client-Side State &bull; {currentYear}
        </p>
      </div>
    </footer>
  );
};
