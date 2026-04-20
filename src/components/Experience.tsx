import { motion } from "motion/react";
import { useLanguage } from "../constants/LanguageContext";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-surface/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60 mb-2 flex items-center gap-2">
            <span className="text-secondary tracking-normal font-bold">#</span> {t.experience.label}
          </h2>
          <h3 className="text-5xl font-display font-black">{t.experience.title}</h3>
        </div>

        <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:w-[2px] before:h-full before:bg-white/5 before:-translate-x-1/2 hidden md:block">
          {t.experience.roles.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`flex items-center justify-between w-full mb-8 ${
                idx % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-5/12" />
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-10 h-10 rounded-full justify-center">
                <Briefcase size={18} className="text-dark-bg" />
              </div>
              <div className={`order-1 glass rounded-3xl shadow-xl w-5/12 px-8 py-10 transition-transform duration-500 hover:scale-[1.02] border-primary/5`}>
                <p className="text-[10px] font-mono text-primary/60 mb-2 uppercase tracking-widest">{exp.period}</p>
                <h4 className="text-xl font-display font-black mb-1">{exp.role}</h4>
                <p className="text-sm font-bold text-secondary mb-4 italic">{exp.company}</p>
                <p className="text-sm text-ink/40 leading-relaxed font-light">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Experience View */}
        <div className="md:hidden space-y-10">
          {t.experience.roles.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-primary/20"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
              <p className="text-[10px] font-mono text-primary/60 mb-2 uppercase tracking-widest">{exp.period}</p>
              <h4 className="text-xl font-display font-black mb-1">{exp.role}</h4>
              <p className="text-sm font-bold text-secondary mb-4 italic">{exp.company}</p>
              <p className="text-sm text-ink/50 leading-relaxed font-light">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
