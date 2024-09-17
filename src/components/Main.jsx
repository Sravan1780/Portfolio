import React from 'react';
import { Home } from './Home';
import { About } from './About';
import Projects from './Projects';
import { Contact } from './Contact';
import { Space } from './Space';

export const Main = () => {
  return (
    <div>
      <Home /> {/* Include Home section */}
      <Space />
      <About /> {/* Include About section */}
      <Space />
      <Projects /> {/* Include Projects section */}
      <Space />
      <Contact /> {/* Include Contact section */}
    </div>
  );
};
