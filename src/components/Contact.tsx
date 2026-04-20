import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "../constants/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const details = [
    {
      icon: <Mail className="text-primary" />,
      label: t.contact.email,
      value: "alejandrozapt152@gmail.com",
      href: "mailto:alejandrozapt152@gmail.com"
    },
    {
      icon: <Phone className="text-secondary" />,
      label: "WhatsApp",
      value: "+57 (304) 220-2913",
      href: "https://wa.me/573042202913"
    },
    {
      icon: <MapPin className="text-primary" />,
      label: t.contact.loc,
      value: "Medellín, Colombia",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-10 md:space-y-12">
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary/60 mb-6 flex items-center gap-2">
                <span className="text-secondary font-bold">@</span> {t.contact.label}
              </h2>
              <h3 className="text-4xl md:text-7xl font-display font-black leading-[0.9] md:leading-[0.8] mb-8">
                {t.contact.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">
                  {t.contact.title2}
                </span>
              </h3>
            </div>

            <div className="space-y-4">
              {details.map((detail, idx) => (
                <motion.a
                  key={idx}
                  href={detail.href}
                  className="flex items-center gap-4 md:gap-6 p-4 md:p-6 glass rounded-2xl md:rounded-3xl hover:bg-surface transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    {detail.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-ink/30 mb-1">{detail.label}</p>
                    <p className="text-sm md:text-base font-bold text-ink truncate underline underline-offset-4 decoration-primary/20 group-hover:decoration-primary transition-all">
                      {detail.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <div className="p-6 md:p-8 bg-primary/5 border border-primary/20 rounded-2xl md:rounded-[2rem]">
               <div className="flex items-center gap-3 text-primary font-mono text-[9px] md:text-[10px] uppercase tracking-widest mb-3 md:mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  {t.contact.statusLabel}
               </div>
               <p className="text-[11px] md:text-xs text-ink/40 leading-relaxed font-mono">
                  {t.contact.statusDesc}
               </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-12 glass border-white/5 rounded-2xl md:rounded-[3rem] relative overflow-hidden h-full">
              {/* Background Geometric Grid */}
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <div className="absolute top-0 right-0 p-8 font-mono text-[80px] md:text-[100px] leading-none opacity-5 font-black select-none pointer-events-none">
                INPUT
              </div>

              <form className="space-y-6 md:space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                   <div className="space-y-2">
                     <label className="text-[9px] md:text-[10px] font-mono tracking-widest text-ink/30 uppercase pl-1">{t.contact.formName}</label>
                     <input
                       type="text"
                       placeholder={t.contact.placeholderName}
                       className="w-full bg-white/5 border border-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary/50 transition-colors font-mono text-xs"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[9px] md:text-[10px] font-mono tracking-widest text-ink/30 uppercase pl-1">{t.contact.formEmail}</label>
                     <input
                       type="email"
                       placeholder={t.contact.placeholderEmail}
                       className="w-full bg-white/5 border border-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl focus:outline-none focus:border-primary/50 transition-colors font-mono text-xs"
                     />
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] md:text-[10px] font-mono tracking-widest text-ink/30 uppercase pl-1">{t.contact.formMessage}</label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full bg-white/5 border border-white/5 p-5 md:p-6 rounded-2xl md:rounded-3xl focus:outline-none focus:border-primary/50 transition-colors resize-none font-mono text-xs"
                  ></textarea>
                </div>

                <button className="w-full py-5 md:py-6 bg-primary text-dark-bg font-mono font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl md:rounded-2xl hover:bg-secondary hover:translate-y-[-2px] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-4">
                  {t.contact.submit}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
