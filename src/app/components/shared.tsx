import { motion, useTransform, AnimatePresence, useMotionValue, useSpring, MotionValue } from "motion/react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- HELPERS ---
export const useMousePosition = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let ticking = false;
    const updateMousePosition = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          x.set(e.clientX);
          y.set(e.clientY);
          const target = e.target as HTMLElement;
          setIsHovering(
            target.closest("button") !== null ||
            target.closest("a") !== null ||
            target.closest(".interactive") !== null
          );
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [x, y]);

  return { x, y, isHovering };
};

// --- CINEMATIC TEXT REVEAL ---
export function CinematicText({ text, progress, range, className = "" }: { text: string, progress: MotionValue<number>, range: [number, number], className?: string }) {
  const chars = text.split("");
  const step = (range[1] - range[0]) / chars.length;
  
  return (
    <span className={`inline-block ${className}`}>
      {chars.map((char, i) => {
        const start = range[0] + step * i;
        const end = start + step * 4; 
        
        const opacity = useTransform(progress, [start, end], [0, 1]);
        const filter = useTransform(progress, [start, end], ["blur(12px)", "blur(0px)"]);
        const y = useTransform(progress, [start, end], [20, 0]);
        
        return (
          <motion.span 
            key={i} 
            style={{ opacity, filter, y, display: "inline-block", whiteSpace: "pre-wrap" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        );
      })}
    </span>
  );
}

// --- CURSOR ---
export function Cursor({ x, y, isHovering }: { x: any, y: any, isHovering: boolean }) {
  // Smoothly track raw mouse coordinates without re-rendering component
  const springX = useSpring(x, { damping: 50, stiffness: 2000, mass: 0.1 });
  const springY = useSpring(y, { damping: 50, stiffness: 2000, mass: 0.1 });

  const haloSpringX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.5 });
  const haloSpringY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.5 });
  
  const cursorX = useTransform(springX, (latest: number) => latest - 3);
  const cursorY = useTransform(springY, (latest: number) => latest - 3);

  const haloX = useTransform(haloSpringX, (latest: number) => latest - (isHovering ? 36 : 16));
  const haloY = useTransform(haloSpringY, (latest: number) => latest - (isHovering ? 36 : 16));

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99] mix-blend-difference"
        style={{ x: haloX, y: haloY }}
        animate={{ 
          width: isHovering ? 72 : 32,
          height: isHovering ? 72 : 32,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
          filter: isHovering ? "blur(6px)" : "blur(0px)"
        }}
        transition={{ duration: 0.4 }}
      />
    </>
  );
}

// --- NAVIGATION MAP ---
export function SystemMap({
  isOpen,
  onClose,
  onNavigate,
  onCloseHome,
}: {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onCloseHome: () => void;
}) {
  const navigate = useNavigate();
  
  const nodes = [
    { id: "SYS.01", label: "ABOUT US", path: "/about-us" },
    { id: "SYS.02", label: "Services", path: "/services" },
    { id: "SYS.03", label: "Products", path: "/products" },
    { id: "SYS.04", label: "Career", path: "/career" },
    { id: "SYS.05", label: "Contact Us", path: "/contact-us" },
    // { id: "SYS.06", label: "CONVERGENCE", path: "/convergence" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(30px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center"
        >
          <div className="absolute top-12 left-12">
            <h3 className="font-['Inter'] font-extralight tracking-[0.2em] text-white/50 text-sm uppercase">[ IDENTITY OBFUSCATED ]</h3>
            <p className="font-['JetBrains_Mono'] text-[10px] text-white/20 mt-2">GLOBAL INTELLIGENCE NETWORK</p>
          </div>
          
          <button onClick={onCloseHome} className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors interactive">
            <X className="w-8 h-8" strokeWidth={1} />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.polyline
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                points="10,50 30,30 50,50 70,70 90,50"
                fill="none"
                stroke="white"
                strokeWidth="0.2"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.1 }}
                transition={{ duration: 1.5, delay: 1 }}
                x1="50" y1="50" x2="50" y2="90"
                stroke="white"
                strokeWidth="0.2"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-between px-[5%] md:px-[10%]">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center gap-4 interactive group cursor-pointer"
                  onClick={() => handleNavigate(node.path)}
                  style={{
                    transform: `translateY(${i % 2 === 0 ? '0' : i === 2 ? '40px' : '-40px'})`
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white group-hover:scale-150 transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.3em] text-white/30 group-hover:text-white transition-colors duration-500 absolute top-6 whitespace-nowrap text-center">
                    [{node.id}]<br/>{node.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
