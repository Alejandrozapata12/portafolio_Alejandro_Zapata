import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Twitter, ArrowUpRight, Globe, Terminal } from "lucide-react";
import { useLanguage } from "../constants/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang, t } = useLanguage();
  
  return (
    <footer className="pt-20 md:pt-32 pb-12 md:pb-20 px-6 border-t border-white/5 bg-dark-bg relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 glass border-primary/20 rounded-xl flex items-center justify-center">
                <Terminal className="text-secondary" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-display font-black tracking-tighter">
                AlejoDev<span className="text-primary">.</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-ink/30 font-light leading-relaxed max-w-xs font-mono">
               // {lang === 'es' 
                  ? 'Construyendo ecosistemas digitales de alto rendimiento con precisión industrial.' 
                  : 'Crafting high-performance digital ecosystems with industrial precision.'
               }
            </p>
            
            <div className="flex items-center gap-4">
              {[
                { icon: <Github size={18} />, href: "https://github.com" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
                { icon: <Twitter size={18} />, href: "https://twitter.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, color: '#10b981' }}
                  className="text-ink/40 hover:text-white transition-colors p-3 glass rounded-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">Protocol</h4>
            <ul className="space-y-4">
              {[
                { name: t.nav.home, id: 'home' },
                { name: t.nav.about, id: 'about' },
                { name: t.nav.experience, id: 'experience' },
                { name: t.nav.skills, id: 'expertise' },
                { name: t.nav.portfolio, id: 'portfolio' },
                { name: t.nav.contact, id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-ink/40 hover:text-primary transition-all inline-block hover:translate-x-2 duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Meta Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">Environment</h4>
            <div className="space-y-4">
               <div className="flex items-center gap-3 group cursor-default">
                  <div className="text-ink/30 translate-y-[1px]"><Globe size={14} /></div>
                  <span className="text-[10px] md:text-[11px] text-ink/40 font-mono">6.2442° N, 75.5812° W</span>
               </div>
               <div className="p-5 md:p-6 bg-white/5 border border-white/5 rounded-2xl">
                  <p className="text-[8px] md:text-[9px] font-mono text-primary mb-1 uppercase tracking-widest font-black">Status_Report</p>
                  <p className="text-[10px] md:text-[11px] text-ink/40 leading-relaxed font-mono italic">
                    {lang === 'es' ? 'Disponible para consultoría técnica compleja.' : 'Open for complex technical consulting.'}
                  </p>
               </div>
            </div>
          </div>

          {/* Big CTA Column */}
          <div className="md:col-span-3">
             <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-primary/10 relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h4 className="relative z-10 text-lg md:text-xl font-display font-black mb-4">
                    {lang === 'es' ? 'Inicia tu próximo hito.' : 'Start your next milestone.'}
                </h4>
                <a 
                  href="#contact" 
                  className="relative z-10 inline-flex items-center gap-2 text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] text-primary hover:text-white transition-colors font-black"
                >
                  Dispatch Request <ArrowUpRight size={14} />
                </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[8px] md:text-[9px] font-mono text-ink/20 uppercase tracking-[0.3em] text-center md:text-left">
            © {currentYear} ALEJANDRO ZAPATA [v2.1.0] • Medellín // 127.0.0.1
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[8px] md:text-[9px] font-mono text-ink/20 uppercase tracking-[0.3em]">
             <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-ink/40 tracking-normal">SSL_PROTOCOL_ENGAGED</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
