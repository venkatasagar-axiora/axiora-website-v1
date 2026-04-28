import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import aiinterview from "../../components/assests/futuristic-technology.jpg";
export default function Aiinterviewer() {
    const navigate = useNavigate();
    return (
        <>
            <div className="min-h-screen bg-[#030305] text-white flex items-center justify-center px-6 py-20">

                <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg p-4"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl" />

                        <img
                            src={aiinterview}
                            alt="AI Interviewer"
                            className="relative z-10 rounded-xl w-full object-cover"
                        />
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                            AI Interviewer
                        </h1>

                        {/* Description */}
                        <p className="text-white/60 text-lg leading-relaxed mb-6">
                            <span className="text-white font-medium">AI Interviewer</span> is a fully autonomous AI hiring system that conducts interviews, evaluates candidates, and recommends the best fit—eliminating manual screening, bias, and hiring delays.
                        </p>

                        <p className="text-white/50 text-base leading-relaxed mb-8">
                            It understands employer requirements, interviews candidates automatically, evaluates performance, and delivers data-driven hiring decisions.
                        </p>

                        {/* CTA */}
                        <button className="px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition" onClick={() => navigate("/contact-us")}>
                            Enquire Now
                        </button>
                    </motion.div>
                </div>
            </div>
            <FeaturesSection />
            <CTASection />
        </>
    );
}


const features = [
    {
        title: "Voice-Based AI Interviews",
        desc: "Conducts structured, role-specific interviews automatically."
    },
    {
        title: "Intelligent Resume Analysis",
        desc: "Evaluates experience, skills, and role alignment instantly."
    },
    {
        title: "Requirement-Based Questioning",
        desc: "Adapts questions dynamically based on employer needs."
    },
    {
        title: "Behavior & Communication Evaluation",
        desc: "Analyzes confidence, clarity, and response quality."
    }
];

export function FeaturesSection() {
    const navigate = useNavigate();
    return (
        <div className="w-full py-10 bg-[#030305] text-white flex flex-col items-center">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center max-w-3xl mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                    Key Features
                </h2>

                <p className="text-white/50 text-lg">
                    We provide end-to-end technology solutions that empower organizations to adapt, innovate, and grow.
                </p>
            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl px-6">

                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg overflow-hidden"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 to-purple-500/10 blur-xl" />

                        <div className="relative z-10 text-center">
                            <h3 className="text-lg font-semibold mb-3">
                                {f.title}
                            </h3>

                            <p className="text-sm text-white/50 leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-14">

                <button className="px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition" onClick={() => navigate("/services")}>
                    View All Services
                </button>

                <button className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white hover:text-black transition" onClick={() => navigate("/products")}>
                    Our Products
                </button>

            </div>

        </div>
    );
}


export function CTASection() {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-[#030305] py-10 flex justify-center px-6">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-12 text-center overflow-hidden"
            >
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl opacity-70" />

                {/* Subtle pattern effect */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent opacity-30 blur-xl" />

                {/* Content */}
                <div className="relative z-10">

                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                        Get in Touch for Further Assistance
                    </h2>

                    <button className="px-8 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition flex items-center gap-2 mx-auto" onClick={() => navigate("/contact-us")}>
                        Reach Us →
                    </button>

                </div>

            </motion.div>

        </div>
    );
}