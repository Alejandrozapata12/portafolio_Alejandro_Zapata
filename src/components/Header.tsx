import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Linkedin, Languages, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../constants/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#expertise" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-3 glass border-b border-primary/20 shadow-lg shadow-black/20" : "py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-lg md:text-xl font-mono font-bold"
          >
            <Terminal className="text-primary hidden sm:block" size={24} />
            <span className="tracking-tighter">
              <span className="text-primary">&lt;</span>
              AlejoDev
              <span className="text-primary"> /&gt;</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-[10px] uppercase tracking-widest text-ink/50 hover:text-primary transition-colors font-mono font-bold"
              >
                {item.name}
              </motion.a>
            ))}

            <div className="flex items-center gap-4 border-l border-white/10 pl-6 ml-2">
              <button
                onClick={() => setLang(lang === "es" ? "en" : "es")}
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-primary font-bold hover:scale-110 transition-transform"
              >
                <Languages size={14} />
                {lang === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="p-2 text-primary"
            >
              <Languages size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 glass rounded-lg"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* Side Navigation (Sidebar) for Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[280px] bg-dark-bg border-l border-primary/20 z-[70] p-8 flex flex-col lg:hidden shadow-2xl"
              >
              <div className="flex justify-between items-center mb-12">
                <div className="text-lg font-mono font-bold">
                  <span className="text-primary">&lt;</span>
                  Menu
                  <span className="text-primary"> /&gt;</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-primary p-2">
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-display font-medium text-ink/80 hover:text-primary flex items-center gap-4"
                  >
                    <span className="text-xs font-mono text-primary/40 italic">0{idx + 1}.</span>
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <div className="h-[1px] bg-white/5" />
                <div className="flex justify-center gap-8">
                  <a href="#" className="p-3 glass rounded-full text-ink/60 hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="p-3 glass rounded-full text-ink/60 hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
                <p className="text-[10px] font-mono text-center text-ink/20 uppercase tracking-[0.2em]">
                  Medellín, Colombia // 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

