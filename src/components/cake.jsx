import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../cake.css";

const Cake = () => {
    const [candles, setCandles] = useState(0);
    const [videoEnded, setVideoEnded] = useState(false);
    const videoRef = useRef(null);

    // Animasi masuk halaman
    const pageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const handleCakeClick = () => {
        if (candles < 5) {
            const newCount = candles + 1;
            setCandles(newCount);

            // Jika sudah 5 lilin, putar video dan masuk fullscreen
            if (newCount === 5 && videoRef.current) {
                videoRef.current.play();
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                }
            }
        }
    };

    const handleVideoEnd = () => {
        setVideoEnded(true);
        if (document.fullscreenElement) {
            document.exitFullscreen(); // keluar dari fullscreen setelah selesai
        }
    };

    return (
        <motion.div
            className="cake-container"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
        >
            {/* Kue */}
            <motion.div
                className="cake"
                onClick={handleCakeClick}
                whileTap={{ scale: 0.95 }} // animasi klik
            >
                <div className="cake-top"></div>
                <div className="cake-middle"></div>
                <div className="cake-bottom"></div>

                {/* Lilin */}
                {[...Array(candles)].map((_, i) => (
                    <div key={i} className="candle" style={{ left: `${40 + i * 20}px` }}>
                        {!videoEnded ? (
                            <div className="flame"></div>
                        ) : (
                            <div className="smoke"></div>
                        )}
                    </div>
                ))}
            </motion.div>

            {/* Teks */}
            <motion.h2
                className="birthday-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                {candles < 5
                    ? "Click the cake to add candles!"
                    : "Watch the video to blow them out!"}
            </motion.h2>

            {/* Video */}
            <motion.div
                className="video-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <video
                    ref={videoRef}
                    controls
                    className="video-player"
                    onEnded={handleVideoEnd}
                >
                    <source src="/p.mov" type="video/mp4" />
                </video>
            </motion.div>

            {/* Button */}
            <motion.a
                href="/main"
                className="landing-btn animate__animated animate__pulse animate__infinite"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Next
            </motion.a>
        </motion.div>
    );
};

export default Cake;