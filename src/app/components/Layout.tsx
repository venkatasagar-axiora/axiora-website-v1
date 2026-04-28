import { useState, useEffect } from "react";
import { Outlet, To, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Cursor, useMousePosition, SystemMap } from "./shared";

function ProgressText({ springProgress }: { springProgress: any }) {
  const [text, setText] = useState("SCROLL / 00.00%");
  useEffect(() => {
    return springProgress.on("change", (v: number) => {
      setText(`SCROLL / ${(v * 100).toFixed(2).padStart(5, '0')}%`);
    });
  }, [springProgress]);

  return (
    <div className="font-['JetBrains_Mono'] text-xs text-white/50 tracking-[0.2em] mb-1 pb-1 uppercase">
      {text}
    </div>
  );
}



export function Layout() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const { x, y, isHovering } = useMousePosition();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  // Use scroll progress globally without triggering state updates
  const { scrollYProgress } = useScroll();
  const springProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });
  const handleClose = () => {
    setIsMapOpen(false);
  };
  const handleCloseAndGoHome = () => {
    setIsMapOpen(false);
    navigate("/"); // 👈 redirect to home
  };
  const handleMenuNavigate = (path: To) => {
    setIsMapOpen(false);
    navigate(path); // go to selected page
  };
  return (
    <div className="bg-[#030305] min-h-screen text-white selection:bg-white/20 selection:text-white cursor-none overflow-x-hidden relative font-['Inter']">
      <Cursor x={x} y={y} isHovering={isHovering} />

      {/* Global Ambient Noise/Grain */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[100] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Global HUD UI */}
      <div className="fixed inset-0 pointer-events-none z-[80] p-8 flex flex-col justify-between mix-blend-difference">
        {/* Top HUD */}
        <div className="flex justify-between items-start w-full">
          <div className="font-['JetBrains_Mono'] text-[10px] text-white/30 tracking-[0.2em] leading-relaxed">
            [ ORIGIN UNKNOWN ]<br />
            SYS.OP.MODE: AUTONOMOUS<br />
            LAT: 34.0522 N / LNG: 118.2437 W
          </div>

          {!isMapOpen && (
            <button
              onClick={() => setIsMapOpen(true)}
              className="pointer-events-auto font-['JetBrains_Mono'] text-xs tracking-[0.3em] text-white/60 hover:text-white transition-colors duration-500 interactive px-4 py-2 border border-white/10 hover:border-white/40 bg-black/20 backdrop-blur-md rounded-none uppercase
     before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:to-white/20 before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500"
            >
              [ MENU ]
            </button>
          )}
        </div>

        {/* Bottom HUD */}
        <div className="flex justify-between items-end w-full">
          <div className="flex items-end gap-4">
            {/* Progress Bar (Only meaningful on home, but keep visual consistency) */}
            {isHome && (
              <>
                <div className="w-[2px] h-24 bg-white/10 relative">
                  <motion.div
                    className="absolute bottom-0 left-0 w-full bg-white origin-bottom"
                    style={{ scaleY: springProgress }}
                  />
                </div>
                <ProgressText springProgress={springProgress} />
              </>
            )}
            {!isHome && (
              <div className="font-['JetBrains_Mono'] text-xs text-white/30 tracking-[0.2em] mb-1 pb-1 uppercase">
                NODE / {location.pathname.replace("/", "") || "ROOT"}
              </div>
            )}
          </div>

          <div className="absolute bottom-6 right-6 font-['JetBrains_Mono'] text-[10px] text-white/30 tracking-[0.2em] text-right  uppercase">
            Axiora KERNEL v9.4.1<br />
            SECURE CONNECTION
          </div>
        </div>
      </div>

      <SystemMap isOpen={isMapOpen} onClose={handleClose} onNavigate={handleMenuNavigate} onCloseHome={handleCloseAndGoHome} />
      {/* Page Content */}
      <Outlet />

    </div>
  );
}
