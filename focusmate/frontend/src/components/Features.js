import React from 'react';
import { FaTasks, FaUsers, FaChartLine, FaCalendarCheck } from 'react-icons/fa'; // Importing icons

function VisualHighlights() {
  const highlights = [
    {
      icon: <FaTasks size={50} color="#007BFF" />,
      title: 'Task Management',
      description: 'Stay organized with our intuitive task manager.',
    },
    {
      icon: <FaUsers size={50} color="#007BFF" />,
      title: 'Team Collaboration',
      description: 'Collaborate seamlessly with your team members.',
    },
    {
      icon: <FaChartLine size={50} color="#007BFF" />,
      title: 'Productivity Tracking',
      description: 'Track your progress and productivity effectively.',
    },
    {
      icon: <FaCalendarCheck size={50} color="#007BFF" />,
      title: 'Goal Setting',
      description: 'Set clear goals and achieve them with ease.',
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-r from-purple-200 to-blue-200">
      <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
        Why Choose FocusMate?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform transform hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisualHighlights;
