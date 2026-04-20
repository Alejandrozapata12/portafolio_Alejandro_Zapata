import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, User, Loader2, Minimize2, Maximize2, Terminal } from "lucide-react";
import { generateChatResponse, ChatMessage } from "../services/geminiService";
import { useLanguage } from "../constants/LanguageContext";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await generateChatResponse([...messages, userMessage]);
      setMessages((prev) => [...prev, { role: "model", content: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: lang === 'es' ? "Lo siento, tuve un error de conexión. ¿Podrías intentar de nuevo?" : "Sorry, I encountered a connection error. Could you try again?" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-dark-bg rounded-2xl shadow-2xl shadow-primary/30 flex items-center justify-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary scale-0 group-hover:scale-100 transition-transform origin-center duration-500 rounded-full opacity-20" />
            <MessageSquare size={24} className="relative z-10" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-dark-bg rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "64px" : "min(600px, 80vh)",
            }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className={`w-[calc(100vw-32px)] sm:w-[400px] glass border-primary/20 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
              isMinimized ? "bg-surface" : "bg-dark-bg"
            }`}
          >
            {/* Header */}
            <div className="p-3 sm:p-4 bg-surface border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Terminal size={14} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-[12px] sm:text-sm font-display font-black tracking-tight">{t.aiChat.persona}</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] sm:text-[10px] font-mono text-ink/30 uppercase tracking-widest">Active_Node</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 sm:p-2 hover:bg-white/5 rounded-lg text-ink/40"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 sm:p-2 hover:bg-red-500/20 rounded-lg text-red-500/60"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20"
                >
                  {messages.length === 0 && (
                    <div className="text-center py-6 px-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Bot size={20} className="text-primary" />
                      </div>
                      <p className="text-[11px] sm:text-xs text-ink/40 leading-relaxed font-mono italic">
                        // {t.aiChat.welcome}
                      </p>
                    </div>
                  )}

                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex gap-2 sm:gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        msg.role === "user" ? "bg-surface border border-white/5" : "bg-primary/10"
                      }`}>
                        {msg.role === "user" ? <User size={12} /> : <Bot size={12} className="text-primary" />}
                      </div>
                      <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl max-w-[85%] text-[12px] sm:text-sm leading-relaxed ${
                        msg.role === "user" 
                          ? "bg-primary text-dark-bg font-medium" 
                          : "bg-surface border border-white/5 text-ink/80 font-light"
                      }`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Loader2 size={14} className="text-primary animate-spin" />
                      </div>
                      <div className="p-3 sm:p-4 bg-surface rounded-xl sm:rounded-2xl border border-white/5">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce" />
                          <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-3 sm:p-4 border-t border-white/5 bg-surface/30">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={t.aiChat.placeholder}
                      className="flex-1 bg-dark-bg border border-white/5 p-2.5 sm:p-3 rounded-xl text-[12px] sm:text-sm focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all font-mono"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="w-10 h-10 sm:w-11 sm:h-11 bg-primary text-dark-bg rounded-xl flex items-center justify-center disabled:opacity-50 disabled:grayscale hover:bg-secondary transition-colors"
                    >
                      <Send size={16} />
                    </button>
                  </form>
                  <p className="text-[8px] font-mono text-center text-ink/20 mt-3 uppercase tracking-widest">
                    Gemini 1.5 Protocol • Medellín
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
