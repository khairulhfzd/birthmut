import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../landingpage.css';

const LandingPage = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 20; 
      const y = ((e.clientY / innerHeight) - 0.5) * -20;
      setTilt({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="landing-container">
      {/* Amplop */}
      <motion.div
        className="envelope-image-wrapper "
        style={{
          transform: `perspective(400px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.1s ease-out",
          cursor: "pointer",
          zIndex: isOpen ? 0 : 2, // agar amplop di belakang ketika surat terbuka
        }}
        onClick={toggleOpen}
      >
        <img
          src="/amplop.png"
          alt="Envelope"
          className="envelope-image"
        />
      </motion.div>

      {/* Surat muncul saat amplop diklik */}
      <AnimatePresence>
        {isOpen && (
          <motion.img
            src="/surat.png"
            alt="Letter"
            className="letter-image"
            onClick={toggleOpen} // klik surat buat close
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -100, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ cursor: "pointer" }}
          />
        )}
      </AnimatePresence>

      {/* Text */}
      <motion.h2
        className="landing-text animate__animated animate__fadeInUp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        To my beautiful girlfriend, who somehow still puts up with me.
      </motion.h2>

      {/* Button */}
      <motion.a
        href="/cake"
        className="landing-btn animate__animated animate__pulse animate__infinite"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Next
      </motion.a>
    </div>
  );
};

export default LandingPage;
