import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";
import Card from "./Card";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <h1>welcome to daily trojan games</h1>
      <h2>just like the new york times, but with a trojan twist</h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          scale: { type: "spring", visualDuration: 0.5, bounce: 0.4 },
        }}
      >
        <div className="cards">
          <Card />
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
