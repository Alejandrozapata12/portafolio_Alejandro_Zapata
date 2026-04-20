import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../constants/LanguageContext";
import { ExternalLink, X, FileCheck } from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const [activeCert, setActiveCert] = useState<{title: string, url: string} | null>(null);

  // Mock certificate URLs - replaced with actual URLs later
  const certs = {
    edu1: "https://picsum.photos/seed/sena/1200/800",
    edu2: "https://picsum.photos/seed/alura/1200/800"
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Heading & Visuals */}
        <div className="lg:col-span-5">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="top-32"
           >
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60 mb-6 flex items-center gap-2">
                <span className="text-secondary tracking-normal font-bold">//</span> {t.about.label}
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[0.9] text-glow mb-12">
                {t.about.title}
              </h3>

              {/* Photo Space & Code Card */}
              <div className="space-y-8">
                <div className="relative group max-w-sm">
                  <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="aspect-[4/5] bg-surface rounded-3xl border border-white/10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src="https://picsum.photos/seed/alejandro/800/1000" 
                      alt="Alejandro Zapata" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 p-4 glass rounded-2xl border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[10px] font-mono font-bold text-primary">ALEJANDRO_ZAPATA.SYS</p>
                  </div>
                </div>

                <div className="p-1 glass border-white/5 rounded-2xl hidden lg:block overflow-hidden max-w-sm">
                  <div className="bg-dark-bg p-4 rounded-xl border border-white/5 font-mono text-[10px] space-y-1">
                    <div className="text-primary/40 italic">/* Local Config Environment */</div>
                    <div><span className="text-secondary">const</span> <span className="text-ink">location</span> = <span className="text-primary">"Medellín, CO"</span>;</div>
                    <div><span className="text-secondary">const</span> <span className="text-ink">dev</span> = <span className="text-primary">"AlejoDev"</span>;</div>
                    <div><span className="text-secondary">const</span> <span className="text-ink">status</span> = <span className="text-primary">"Architecting..."</span>;</div>
                  </div>
                </div>
              </div>
           </motion.div>
        </div>

        {/* Right Column: Bio & Education */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-ink font-medium leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-base md:text-lg text-ink/50 font-light leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-white/5">
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold">
                {t.about.eduLabel}
              </h4>
              <div className="space-y-6">
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-primary/20 group">
                  <p className="text-[10px] font-mono text-primary/60 mb-1">~ SENA</p>
                  <p className="text-sm text-ink/80 font-bold mb-3">{t.about.edu1}</p>
                  <button 
                    onClick={() => setActiveCert({ title: t.about.edu1, url: certs.edu1 })}
                    className="inline-flex items-center gap-2 text-[10px] font-mono text-primary hover:text-white transition-colors group"
                  >
                    <FileCheck size={12} /> {t.about.viewCert}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-secondary/20 group">
                  <p className="text-[10px] font-mono text-secondary/60 mb-1">~ ALURA LATAM | ONE</p>
                  <p className="text-sm text-ink/80 font-bold mb-3">{t.about.edu2}</p>
                  <button 
                    onClick={() => setActiveCert({ title: t.about.edu2, url: certs.edu2 })}
                    className="inline-flex items-center gap-2 text-[10px] font-mono text-secondary hover:text-white transition-colors group"
                  >
                    <FileCheck size={12} /> {t.about.viewCert}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-primary font-bold mb-6">{t.about.principleLabel}</h4>
              <div className="p-6 glass border-white/5 rounded-3xl relative">
                <div className="absolute top-4 right-6 text-primary/10 select-none font-mono text-4xl">"</div>
                <p className="text-sm text-ink/60 font-medium italic leading-relaxed relative z-10">
                  "{t.about.philosophy}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-surface border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-dark-bg shrink-0">
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <FileCheck size={16} />
                  </div>
                  <h4 className="text-sm md:text-base font-display font-bold truncate">{activeCert.title}</h4>
                </div>
                <button 
                  onClick={() => setActiveCert(null)}
                  className="p-2 hover:bg-white/5 rounded-full text-ink/40 hover:text-white transition-all shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto bg-dark-bg p-2 md:p-4 custom-scrollbar">
                <img 
                  src={activeCert.url} 
                  alt={activeCert.title} 
                  className="w-full h-auto rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 md:p-4 text-center bg-dark-bg/80 border-t border-white/5 shrink-0">
                <p className="text-[9px] md:text-[10px] font-mono text-ink/40 uppercase tracking-widest italic">
                  Digital Credential • Verified Archive • {new Date().toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
