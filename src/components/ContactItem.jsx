import React from 'react';

export const ContactItem = ({ icon, title, description, contactInfo, actionText, actionUrl }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-gray-700 p-4 rounded-lg mb-3">
      {icon}
    </div>
    <h3 className="text-gray-600 text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-3 text-sm">{description}</p>
    {contactInfo && (
      <a href={actionUrl} className="text-blue-400 hover:text-blue-300 mb-2">
        {contactInfo}
      </a>
    )}
    {actionText && (
      <a
        href={actionUrl}
        className="text-blue-400 hover:text-blue-300 border border-blue-400 rounded px-4 py-2 text-sm transition-colors duration-300"
      >
        {actionText}
      </a>
    )}
  </div>
);

