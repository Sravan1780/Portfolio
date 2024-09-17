import React from 'react';
import Card from './Card'; // Adjust the path as necessary

export const ProjectsAndInternships = () => {
  const cards = [
    {
      title: 'Project 1',
      description: 'Description of Project 1, showcasing features and technologies used.',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2, highlighting key learnings and outcomes.',
    },
    {
      title: 'Internship 1',
      description: 'Description of Internship 1, detailing responsibilities and achievements.',
    },
    {
      title: 'Internship 2',
      description: 'Description of Internship 2, focusing on skills developed and contributions.',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3, explaining the project scope and impact.',
    },
    {
      title: 'Internship 3',
      description: 'Description of Internship 3, summarizing the experience and skills gained.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndInternships;
