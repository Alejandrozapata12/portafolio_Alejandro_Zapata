/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";
import { motion, useScroll, useSpring } from "motion/react";
import { LanguageProvider } from "./constants/LanguageContext";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <LanguageProvider>
      <div className="relative selection:bg-primary/30 grid-pattern min-h-screen overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
          style={{ scaleX }}
        />

        <Header />
        
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          
          {/* Section Divider */}
          <div className="relative h-24 flex items-center justify-center">
            <div className="w-[1px] h-full bg-gradient-to-b from-primary/20 to-transparent" />
          </div>
          
          <About />
          <Experience />
          <Expertise />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
        <AIChat />
      </div>
    </LanguageProvider>
  );
}


