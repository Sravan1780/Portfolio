import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Typed} from 'react-typed';
import profile from '../assets/me.jpg';

export const Home = () => {
  const typedElementRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, {
      strings: ['I am a Developer', 'I am a Data Scientist', 'I am a DevOps Engineer', 'I am a Software Engineer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    // Canvas animation setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle system
    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx = -particle.dx;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy = -particle.dy;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      typed.destroy();
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center py-12 sm:px-6 lg:px-8">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <motion.div
        className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="order-2 md:order-1" variants={itemVariants}>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Panchakoti Sravan kumar
          </h2>
          <div className="mt-4 text-2xl text-gray-600">
            <span ref={typedElementRef}></span>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            We shape and activate brands through insight, vision, and execution.
          </p>
          <div className="mt-4">
            <motion.button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              variants={buttonVariants}
              whileHover="hover"
            >
              Resume/CV
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="order-1 md:order-2 flex-shrink-0" variants={itemVariants}>
          <img
            className="mx-auto h-72 w-72 md:h-96 md:w-96 rounded-full"
            src={profile}
            alt="Panchakoti Sravan kumar"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
