import React from 'react';

const Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={props.className}
    {...props}
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 3.25 2.3 6.24 6 8.83 3.7-2.59 6-5.58 6-8.83 0-3.87-3.13-7-7-7zM3.5 19.5C5.1 17.5 7.64 16 12 16s6.9 1.5 8.5 3.5c0-2-1.5-4.5-5.5-6.5C15.36 12.23 13.7 11 12 11s-3.36 1.23-4.5 2C4 15 2.5 17.5 2.5 19.5 3.5 19.5 3.5 19.5 3.5 19.5z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
