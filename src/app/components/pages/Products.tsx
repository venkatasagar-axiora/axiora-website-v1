import { motion } from "motion/react";
import { Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ───────────────── PRODUCT DATA ───────────────── */
const productCards = [
  {
    id: "sales-crm",
    title: "Sales & Employee Performance CRM",
    desc: "An intelligent, unified CRM that automates marketing, sales execution, and employee performance tracking—eliminating tools, monitoring, and inefficiencies"
  },
  {
    id: "autonomous-hiring",
    title: "Autonomous Hiring Intelligence Platform",
    desc: "An AI-powered system that interviews, evaluates, and recommends candidates automatically—removing manual interviews, bias, and hiring delays."
  },
  {
    id: "paywithease",
    title: "PayWithEase",
    desc: "PayWithEase is an AI-enabled Business Payment Operating System designed to help SMEs manage collections, commitments, installments, expenses, and profit visibility in one unified platform."
  },
  {
    id: "udyogaa-ai",
    title: "Udyogaa AI",
    desc: "India’s first AI-driven hiring automation platform that eliminates vendors, fake profiles, and backouts—creating a transparent and reliable hiring ecosystem."
  },
  {
    id: "upadi-ai",
    title: "Upadi AI",
    desc: "India’s zero-unemployment ecosystem enabling daily income through micro-jobs and selling,—powered by AI trust and matching systems, reliable hiring ecosystem."
  },
  {
    id: "ai-personal-assistant",
    title: "AI Personal Assistant",
    desc: "A human-like AI companion that supports, guides, and understands you emotionally—providing calm, clarity, and assistance in everyday life."
  },
  {
    id: "hologram-ai",
    title: "Hologram AI",
    desc: "Life-sized 3D holographic projection technology with real-time interaction and gesture tracking—designed to redefine communication, learning, and collaboration"
  },
  {
    id: "imagine-ai",
    title: "Imagine AI",
    desc: "A powerful generative AI platform that transforms thoughts and creative ideas into high-quality videos, images, audio, and scripts—instantly, securely, and effortlessly."
  }
];

/* ───────────────── SINGLE CARD ───────────────── */
function ProductCard({ id, title, desc }: { id: string; title: string; desc: string }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg overflow-hidden cursor-pointer"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-xl" />

      <div className="relative z-10">
        <Activity className="w-5 h-5 text-white/60 mb-4" />

        <h3 className="text-lg font-semibold mb-2">{title}</h3>

        <p className="text-sm text-white/50 mb-6">{desc}</p>

        <button className="opacity-0 group-hover:opacity-100 transition text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black " onClick={() => navigate(`/products/${id}`)}>
          Enquire →
        </button>
      </div>
    </motion.div>
  );
}

/* ───────────────── GRID COMPONENT ───────────────── */
function ProductGrid() {
  return (
    <div className="w-full max-w-7xl px-6 mt-20">

      {/* Top 6 cards (3 per row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCards.slice(0, 6).map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>

      {/* Bottom 2 cards centered */}
      <div className="flex justify-center gap-8 mt-10 flex-wrap">
        {productCards.slice(6, 8).map((p, i) => (
          <div key={i} className="w-full md:w-[45%] lg:w-[30%]">
            <ProductCard {...p} />
          </div>
        ))}
      </div>

    </div>
  );
}

/* ───────────────── MAIN COMPONENT ───────────────── */
export function Products() {
  return (
    <div className="min-h-screen bg-[#030305] text-white flex flex-col items-center justify-center relative overflow-hidden pb-32">
      {/* Massive Neural Core Elements */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          className="w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border border-white/5 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 150, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-white/10 shadow-[0_0_120px_rgba(255,255,255,0.05)]"
          animate={{ rotate: -360, scale: [1, 0.95, 1] }}
          transition={{ rotate: { duration: 100, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        />
        <div className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,1)] animate-pulse" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center max-w-5xl px-8 flex flex-col items-center mt-5">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md mb-12"
        >
          <Activity className="w-3 h-3 text-white/70 " />
          <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-white/70 uppercase ">
            SYS.03 — Our Products
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="font-['Inter'] font-thin text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-none mb-12"
        >
          The Feature's for <br /> Future.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="max-w-2xl text-center"
        >
          <p className="font-['Inter'] font-light text-xl md:text-3xl text-white/50 tracking-tight leading-snug mb-8">
            Innovative Platforms Built for Modern Businesses
          </p>
          <p className="font-['JetBrains_Mono'] text-xs text-white/30 tracking-[0.2em] leading-loose">
            Enterprise-grade technology products built to streamline workflows, enhance productivity, and deliver measurable business outcomes.
          </p>
        </motion.div>
      </div>

      {/* 🔥 PRODUCT CARDS */}
      <ProductGrid />

    </div>
  );
}