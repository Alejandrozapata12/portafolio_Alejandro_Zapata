import { motion } from "motion/react";
import { Code2, Database, Globe, Cpu } from "lucide-react";
import { useLanguage } from "../constants/LanguageContext";

export default function Expertise() {
  const { t } = useLanguage();

  const skills = [
    {
      category: t.expertise.frontend,
      icon: <Code2 className="text-primary" />,
      items: [
        { name: "React / Vite", level: 95 },
        { name: "JavaScript ES6+", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5 / CSS3", level: 99 },
      ],
    },
    {
      category: t.expertise.backend,
      icon: <Globe className="text-primary" />,
      items: [
        { name: "Node.js / Express", level: 94 },
        { name: "MySQL / Relational", level: 90 },
        { name: "API REST Design", level: 96 },
        { name: "Auth / Roles", level: 88 },
      ],
    },
    {
      category: t.expertise.systems,
      icon: <Database className="text-primary" />,
      items: [
        { name: "Database Migrations", level: 85 },
        { name: "Query Optimization", level: 82 },
        { name: "Data Analytics", level: 80 },
        { name: "Scalable Logic", level: 92 },
      ],
    },
    {
      category: t.expertise.services,
      icon: <Cpu className="text-primary" />,
      items: [
        { name: "Responsive Design", level: 98 },
        { name: "Full-Stack Dev", level: 95 },
        { name: "UI/UX Neon Style", level: 90 },
        { name: "Deployment", level: 85 },
      ],
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-surface/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none font-mono text-[100px] md:text-[200px] leading-none select-none">
        CODE
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60 mb-2 flex items-center gap-2">
            <span className="text-secondary font-bold">#</span> {t.expertise.label}
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">{t.expertise.title}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 md:p-8 hover:bg-surface transition-all duration-500 flex flex-col h-full rounded-2xl md:rounded-3xl border-primary/5 group"
            >
              <div className="mb-6 md:mb-8 flex items-center justify-between">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="font-mono text-[8px] md:text-[10px] text-primary/30 font-bold italic tracking-tighter">MODULE_0{idx + 1}</span>
              </div>
              
              <h4 className="text-lg md:text-xl font-display font-bold mb-6 md:mb-8 pr-2 group-hover:text-primary transition-colors">{skill.category}</h4>
              
              <div className="mt-auto space-y-4 md:space-y-6">
                {skill.items.map((item) => (
                  <div key={item.name} className="space-y-2 md:space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-ink/40 font-bold">{item.name}</span>
                      <span className="text-[9px] md:text-[10px] font-mono text-primary font-bold">{item.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.2 + idx * 0.1 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary origin-left"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
