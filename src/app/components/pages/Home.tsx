import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Activity, Fingerprint } from "lucide-react";
import { CinematicText } from "../shared";
import { useState } from "react";
import { Cursor, useMousePosition, SystemMap } from "../shared";

function Layer1_Gateway({ progress }: { progress: any }) {
  const z = useTransform(progress, [0.8, 0.95], [-3000, 0]);
  const rotateX = useTransform(progress, [0.8, 0.95], [60, 0]);
  const opacity = useTransform(progress, [0.85, 0.95], [0, 1]);
  const [isMapOpen, setIsMapOpen] = useState(false);


  return (
    <motion.div style={{ z, opacity, rotateX }} className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4 origin-center">
      <motion.p
        className="font-['JetBrains_Mono'] text-xs tracking-[0.4em] text-white/30 mb-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 2 }}
      >
        [ AXIORA DEPLOYED ]
      </motion.p>

      <h1 className="font-['Inter'] font-thin text-5xl md:text-8xl lg:text-9xl tracking-tighter text-white uppercase leading-[0.9] interactive pointer-events-auto ">
        The<br />Future
      </h1>

      <motion.div
        className="mt-16 w-[1px] h-32 bg-gradient-to-b from-white/30 to-transparent"
        style={{ scaleY: useTransform(progress, [0, 0.05], [1, 0]), transformOrigin: "top" }}
      />


      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <button onClick={() => setIsMapOpen(true)} type="submit" className="group relative interactive px-12 py-5 overflow-hidden flex items-center justify-center min-w-[240px] bg-white text-black">
          <div className="absolute inset-0 bg-black/10 scale-x-0 origin-right transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
          <span className="font-['JetBrains_Mono'] text-sm tracking-[0.2em] uppercase font-semibold relative z-10">
            Access Intelligence
          </span>
        </button>

        <button onClick={() => setIsMapOpen(true)} className="group relative interactive px-12 py-5 overflow-hidden flex items-center justify-center min-w-[240px]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-700 group-hover:bg-white" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-700 group-hover:bg-white" />
          <span className="font-['JetBrains_Mono'] text-sm tracking-[0.2em] uppercase text-white/60 transition-colors duration-700 group-hover:text-white relative z-10">
            Explore Architecture
          </span>
        </button>
        <SystemMap isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />

      </div>
    </motion.div>
  );
}

function Layer2_Illusion({ progress }: { progress: any }) {
  const z = useTransform(progress, [0.05, 0.25, 0.4], [-3000, 0, 2000]);
  const x = useTransform(progress, [0.05, 0.25, 0.4], [1000, 0, -1000]);
  const rotateY = useTransform(progress, [0.05, 0.25, 0.4], [45, 0, -45]);
  const opacity = useTransform(progress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <motion.div style={{ z, x, rotateY, opacity }} className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4 origin-center">
      <div className="max-w-5xl w-full flex flex-col items-start gap-12">
        <p className="font-['JetBrains_Mono'] text-[10px] md:text-xs text-white/40 tracking-[0.5em] uppercase border-l border-white/20 pl-4">
          Observation 01
        </p>
        <h2 className="font-['Inter'] font-light text-4xl md:text-6xl lg:text-8xl text-white tracking-tighter leading-tight max-w-4xl interactive pointer-events-auto">
          Delivering Innovative IT Solutions <br />
          <span className="text-white/30">for`a Digital Future.</span>
        </h2>
        <div className="w-full flex justify-end">
          <p className="font-['Inter'] font-light text-lg md:text-2xl text-white/50 max-w-xl text-right  ">
            Axiora Global Solutions established in 2021, builds AI platforms,
            SaaS systems,  and enterprise software that help businesses
            automate operations, improve hiring accuracy, optimize payments,
            and scale through intelligent, cloud-native technology
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Layer3_AxioraCore({ progress }: { progress: any }) {
  const z = useTransform(progress, [0.25, 0.45, 0.6], [-3000, 0, 2000]);
  const y = useTransform(progress, [0.25, 0.45, 0.6], [1000, 0, -1000]);
  const rotateX = useTransform(progress, [0.25, 0.45, 0.6], [-45, 0, 45]);
  const opacity = useTransform(progress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);

  return (
    <motion.div style={{ z, y, rotateX, opacity }} className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none origin-center">
      <motion.div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-white/5 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] animate-[spin_100s_linear_infinite]" />
        <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full border border-white/10 shadow-[0_0_120px_rgba(255,255,255,0.05)] animate-[spin_60s_linear_infinite_reverse]" />
        <div className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,1)] animate-pulse" />
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl px-4 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-8">
          {/* <Activity className="w-3 h-3 text-white/70" /> */}
          <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-white/70">Who We Are</span>
        </div>

        <h2 className="font-['Inter'] font-thin text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-none mb-12 interactive pointer-events-auto">
          <CinematicText text="Technology That Drives Real Business Growth" progress={progress} range={[0.4, 0.43]} />
        </h2>

        <div className="h-32">
          <motion.p
            className="font-['Inter'] font-light text-2xl md:text-4xl text-white/50 tracking-tight max-w-3xl leading-snug"
            style={{ opacity: useTransform(progress, [0.44, 0.46], [0, 1]) }}
          >
            We build intelligent, scalable technology that transforms how businesses operate and grow.          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function Layer4_Void({ progress }: { progress: any }) {
  const z = useTransform(progress, [0.45, 0.65, 0.8], [-3000, 0, 2000]);
  const rotateZ = useTransform(progress, [0.45, 0.65, 0.8], [-90, 0, 90]);
  const opacity = useTransform(progress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);

  return (
    <motion.div style={{ z, rotateZ, opacity }} className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none px-4 origin-center">
      <div className="relative w-full max-w-6xl h-[60vh] flex items-center justify-center">
        <motion.div className="absolute top-0 left-[10%] w-[1px] h-[200px] bg-gradient-to-b from-white/20 to-transparent" />
        <motion.div className="absolute bottom-0 right-[20%] w-[1px] h-[150px] bg-gradient-to-t from-white/20 to-transparent" />

        <div className="flex flex-col items-center text-center gap-8 mix-blend-difference">
          <h2 className="font-['Inter'] font-extralight text-5xl md:text-7xl text-white tracking-tighter interactive pointer-events-auto">
            End-to-end technology solutions tailored for modern businesses
          </h2>
          <p className="font-['JetBrains_Mono'] text-sm md:text-base tracking-[0.2em] text-white/40 uppercase max-w-lg leading-relaxed">
            We provide end-to-end technology solutions that empower organizations to adapt, innovate, and grow in a rapidly evolving digital landscape.          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Layer5_Temporal({ progress }: { progress: any }) {
  const z = useTransform(progress, [0.65, 0.85, 1], [-3000, 0, 2000]);
  const opacity = useTransform(progress, [0.7, 0.8, 0.9, 0.95], [0, 1, 1, 0]);

  const leftX = useTransform(progress, [0.65, 0.85, 1], [-500, 0, -500]);
  const rightX = useTransform(progress, [0.65, 0.85, 1], [500, 0, 500]);

  return (
    <motion.div style={{ z, opacity }} className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none px-4 origin-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div style={{ x: leftX }} className="flex-1 space-y-8">
          <p className="font-['JetBrains_Mono'] text-xs text-white/40 tracking-[0.4em] uppercase"> Axiora Intelligence</p>
          <h2 className="font-['Inter'] font-light text-5xl md:text-7xl text-white tracking-tighter leading-none interactive pointer-events-auto">
            Intelligence drives every decision.
          </h2>
        </motion.div>
        <motion.div style={{ x: rightX }} className="flex-1 flex justify-start md:justify-end">
          <h2 className="font-['Inter'] font-thin text-5xl md:text-7xl text-white/40 tracking-tighter leading-none italic interactive pointer-events-auto">
            Execution delivers every outcome.
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Layer6_Convergence({ progress }: { progress: any }) {
  const z = useTransform(progress, [0, 0.2], [0, 2000]);
  const opacity = useTransform(progress, [0, 0.1, 0.15], [1, 1, 0]);
  const filter = useTransform(progress, [0, 0.15], ["blur(0px)", "blur(30px)"]);


  return (
    <motion.div style={{ z, filter, opacity }} className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-[60] origin-center pointer-events-none">
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'bottom'
        }}
      />

      <div className="relative flex flex-col items-center text-center max-w-4xl px-6 z-10 pointer-events-auto">
        <Fingerprint className="w-12 h-12 text-white/30 mb-8" strokeWidth={1} />
        <h2 className="font-['JetBrains_Mono'] text-xs text-white/40 tracking-[0.4em] mb-6 uppercase">
          [ ENTERING AXIORA... ]
        </h2>
        <h1 className="font-['Inter'] font-thin text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-none mb-8 uppercase interactive">
          Axiora<br />Global
        </h1>
        <p className="font-['Inter'] font-light text-xl md:text-2xl text-white/50 tracking-tight mb-16 max-w-2xl">
          Building a Bold and Exciting. <br />Future Ignited by Innovation.
        </p>

        {/* <div className="flex flex-col sm:flex-row gap-6 items-center">
          <button className="group relative interactive px-12 py-5 overflow-hidden flex items-center justify-center min-w-[240px] bg-white text-black">
            <div className="absolute inset-0 bg-black/10 scale-x-0 origin-right transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            <span className="font-['JetBrains_Mono'] text-sm tracking-[0.2em] uppercase font-semibold relative z-10">
              Initialize Axiora
            </span>
          </button>

          <button className="group relative interactive px-12 py-5 overflow-hidden flex items-center justify-center min-w-[240px]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-700 group-hover:bg-white" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transition-colors duration-700 group-hover:bg-white" />
            <span className="font-['JetBrains_Mono'] text-sm tracking-[0.2em] uppercase text-white/60 transition-colors duration-700 group-hover:text-white relative z-10">
              Explore Architecture
            </span>
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}

export function Home() {
  const { scrollYProgress } = useScroll();
  const springProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });

  return (
    <div className="min-h-[1000vh]">
      <div
        className="fixed inset-0 pointer-events-none z-[40]"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        <Layer1_Gateway progress={springProgress} />
        <Layer2_Illusion progress={springProgress} />
        <Layer3_AxioraCore progress={springProgress} />
        <Layer4_Void progress={springProgress} />
        <Layer5_Temporal progress={springProgress} />
        <Layer6_Convergence progress={springProgress} />
      </div>
    </div>
  );
}
