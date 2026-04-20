import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../constants/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Inventrack",
      category: "fullstack / inventory / auth",
      description: t.portfolio.inventrack,
      image: "https://picsum.photos/seed/inventory/800/600",
      stats: ["API REST / Auth", "Real-time Metrics"],
      link: "https://alejandrozapt-portfolio.vercel.app/",
      github: "#"
    },
    {
      title: "PlannerTime",
      category: "medical portal / scheduling",
      description: t.portfolio.plannertime,
      image: "https://picsum.photos/seed/medical/800/600",
      stats: ["Multi-role Portal", "External Integration"],
      link: "#",
      github: "#"
    },
    {
      title: "AppointmentPro",
      category: "healthcare / landing",
      description: t.portfolio.appointmentpro,
      image: "https://picsum.photos/seed/clinics/800/600",
      stats: ["Responsive UI", "Modern Design"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60 mb-2 flex items-center gap-2">
              <span className="text-secondary font-bold">*</span> {t.portfolio.label}
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-black leading-[0.8]">{t.portfolio.title}</h3>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-ink/30 uppercase">
             <span>{t.portfolio.archive} (2020-2026)</span>
             <div className="w-12 h-[1px] bg-white/10 hidden sm:block" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface relative rounded-2xl md:rounded-3xl border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h5 className="text-2xl md:text-3xl font-display font-black mb-2 text-glow">{project.title}</h5>
                    <div className="flex gap-4 border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        <a href={project.github} className="text-primary hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href={project.link} className="text-primary hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 text-primary">
                    <ArrowUpRight size={20} md:size={24} />
                  </div>
                </div>
              </div>

              <div className="py-6 md:py-8">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                   <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60">{project.category}</h4>
                </div>
                
                <p className="text-sm text-ink/40 font-light mb-5 md:mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.stats.map(stat => (
                    <span key={stat} className="text-[8px] md:text-[9px] uppercase font-mono tracking-widest text-primary/40 border border-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
           whileHover={{ scale: 1.01 }}
           className="mt-16 md:mt-24 p-8 md:p-12 glass rounded-[1.5rem] md:rounded-[2.5rem] text-center relative group overflow-hidden border-primary/20"
        >
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <h4 className="relative text-2xl md:text-3xl font-display font-black mb-4 italic">{t.portfolio.challenge}</h4>
          <p className="relative text-[10px] font-mono tracking-[0.3em] uppercase text-primary font-bold">{t.portfolio.discuss}</p>
          <a href="#contact" className="absolute inset-0 z-10" aria-label="Go to contact" />
        </motion.div>
      </div>
    </section>
  );
}
