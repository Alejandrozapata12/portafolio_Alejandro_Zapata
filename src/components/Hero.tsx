import { motion } from "motion/react";
import { ArrowDownRight, Terminal, Cpu, Brackets } from "lucide-react";
import { useLanguage } from "../constants/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-8 flex items-center gap-4"
        >
          <div className="p-2 glass border-primary/20 rounded-lg">
            <Terminal size={16} className="text-primary" />
          </div>
          <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-primary font-bold">
            {t.hero.role}
          </span>
          <div className="flex-1 h-[1px] bg-white/5" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.8vw] font-display leading-[0.9] md:leading-[0.82] tracking-tighter mb-12"
        >
          {t.hero.title1} <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary italic">
            {t.hero.title2}
          </span>{" "}
          <br className="hidden sm:block" />
          {t.hero.title3}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="text-[10px] md:text-xs font-mono text-comment italic mb-2">
              // {t.hero.description}
            </div>
            <p className="text-base md:text-xl text-ink font-medium leading-relaxed max-w-sm">
              {t.hero.description}
            </p>
            <motion.a
               href="#portfolio"
               whileHover={{ x: 5 }}
               className="inline-flex items-center gap-4 group"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono font-black text-primary underline underline-offset-8 decoration-2">
                {t.hero.cta}
              </span>
              <ArrowDownRight className="text-primary group-hover:translate-x-2 transition-transform shrink-0" size={20} />
            </motion.a>
          </motion.div>

          <div className="hidden lg:block">
            <div className="p-6 glass border-white/5 rounded-3xl space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-primary/40 uppercase tracking-widest">
                <span>Infrastructure</span>
                <Cpu size={12} />
              </div>
              <div className="font-mono text-[11px] text-ink/40 space-y-3 leading-loose">
                <div className="flex gap-4"><span className="text-primary/60">01</span> {t.hero.lat}: 6.2442° N</div>
                <div className="flex gap-4"><span className="text-primary/60">02</span> {t.hero.long}: 75.5812° W</div>
                <div className="flex gap-4"><span className="text-secondary/60">03</span> {t.hero.craft}</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-row lg:flex-col items-center lg:items-end gap-6 lg:gap-3 text-left lg:text-right"
          >
            <div className="flex flex-col lg:items-end gap-1">
              <Brackets className="text-primary/20 mb-2 hidden lg:block" size={48} />
              <div className="text-5xl md:text-6xl font-display font-black text-primary leading-none">07+</div>
              <div className="text-[10px] uppercase font-mono tracking-[0.15em] text-ink/40 leading-relaxed max-w-[120px] lg:max-w-none">
                {t.hero.exp}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image / Placeholder */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="absolute bottom-0 right-0 w-full h-[60%] -z-20 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-t from-dark-bg via-transparent to-transparent absolute inset-0 z-10" />
        <img 
          src="https://picsum.photos/seed/code/1920/1080?grayscale" 
          alt="Technical background"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
          loading="eager"
          fetchpriority="high"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}

