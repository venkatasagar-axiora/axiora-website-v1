import { motion } from "motion/react";
import { Fingerprint } from "lucide-react";

export function Convergence() {
  return (
    <div className="min-h-screen bg-[#000] text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
             backgroundSize: '4rem 4rem',
             transform: 'perspective(1000px) rotateX(60deg) scale(2)',
             transformOrigin: 'bottom'
           }}
      />

      <div className="relative flex flex-col items-center text-center max-w-4xl px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Fingerprint className="w-16 h-16 text-white/30 mb-8 mx-auto" strokeWidth={1} />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-['JetBrains_Mono'] text-xs text-white/40 tracking-[0.4em] mb-6 uppercase"
        >
          [ Identity Confirmed ]
        </motion.h2>

        <motion.h1 
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 3, delay: 1.5 }}
          className="font-['Inter'] font-thin text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none mb-8 uppercase interactive"
        >
          Axiora<br/>Global
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="font-['Inter'] font-light text-xl md:text-3xl text-white/50 tracking-tight mb-16 max-w-2xl leading-snug"
        >
          The architecture is invisible.<br/>The impact is absolute.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <button className="group relative interactive px-12 py-5 overflow-hidden flex items-center justify-center min-w-[240px] bg-white text-black">
            <div className="absolute inset-0 bg-black/10 scale-x-0 origin-right transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            <span className="font-['JetBrains_Mono'] text-sm tracking-[0.2em] uppercase font-semibold relative z-10">
              Initialize Nexora
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
