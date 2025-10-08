import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../main.css";

const App = () => {
    const [step, setStep] = useState(0);
    const [showGame, setShowGame] = useState(false);
    const loveSectionRef = useRef(null);

    const pageVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    const loveCards = [
        "You are hardworking. You work hard to make the world you dream of.",
        "You have the cutest smile! It makes my day ♡",
        "You know how to comfort me. Your hugs mean everything.",
        "You make every day a little brighter. I don’t know how you do it.",
        "You are so smart. UNDIP GIRL.",
        "You are cute (as I’ve always said ♡).",
        "You make the world a better place ♡",
        "You love traveling. I love our walks together ♡",
        "You have good taste. The best movies, music, and bf choice ♡",
    ];

    const moments = [
        { img: "/1.jpg", text: "pulang sekolah date ♡" },
        { img: "/2.jpg", text: "babi ♡" },
        { img: "/3.jpg", text: "Cute selfies ♡" },
        { img: "/4.jpg", text: "Dimsum date ♡" },
        { img: "/5.jpg", text: "Before prom ♡" },
        { img: "/6.jpg", text: "the other Cute selfies ♡" },
        { img: "/7.jpg", text: "monday in smanda ♡" },
        { img: "/8.jpg", text: "first flower i give to her ♡" },
        { img: "/9.jpg", text: "panda ♡" },
        { img: "/10.jpg", text: "study date ♡" },
        { img: "/11.jpg", text: "the something beautiful ♡" },
        { img: "/12.jpg", text: "Iceskate date ♡" },
        { img: "/13.jpg", text: "the otherrrrrr cute ♡" },
        { img: "/14.jpg", text: "peace sign ♡" },
        { img: "/15.jpg", text: "with brotherhood" },
    ];

    const handleStart = () => {
        alert("Welcome babe ♡ Let’s start this journey!");
        setStep(1);
    };

    const handleRead = () => {
        setStep(2);
    };

    // 🔥 Gunakan useEffect supaya scroll setelah render
    useEffect(() => {
        if (step === 2 && loveSectionRef.current) {
            loveSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [step]);

    return (
        <motion.div
            className="app-container"
            initial="hidden"
            animate="visible"
            variants={pageVariants}
        >
            {/* Notice Section */}
            <section className="notice">
                <p>📌 HAPPY BIRTHDAY SAYANGG 📌</p>
                <p>
                    To: The most beautiful gf  <br />
                    From: Your loving bf
                </p>
                <button onClick={handleStart}>Start here!</button>
                <button onClick={handleRead}>❤ next ❤</button>
            </section>
            {/* 🔥 Modal Game */}


            {/* Main Photo */}
            {step >= 1 && (
                <motion.section
                    className="main-photo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/anjay.png"
                        alt="Her"
                    />

                    {/* 🎵 Music Player */}
                    <div className="music-card">
                        <img src="/17.jpg" alt="Album Cover" className="cover" />
                        <div className="info">
                            <h4>Nothing</h4>
                            <p>- Bruno Major -</p>
                            <audio autoPlay loop controls>
                                <source src="/nothing.mp3" type="audio/mpeg" />
                                Browser kamu tidak mendukung audio tag.
                            </audio>
                        </div>
                    </div>

                </motion.section>
            )}

            {/* Things I love about you */}
            {step >= 2 && (
                <motion.section
                    className="love-section"
                    id="loveSection"
                    ref={loveSectionRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2>- Things I love about you -</h2>
                    <div className="love-cards">
                        {loveCards.map((text, i) => (
                            <motion.div
                                key={i}
                                className="card"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {text}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Favorite moments */}
            {step >= 2 && (
                <motion.section
                    className="moments"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h2>- Favorite moments together ♡ -</h2>
                    <div className="moment-cards">
                        {moments.map((m, i) => (
                            <motion.div
                                key={i}
                                className="moment"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={m.img} alt={m.text} />
                                <p>{m.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}
        </motion.div>
    );
};

export default App;
