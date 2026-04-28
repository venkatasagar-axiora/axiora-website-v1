import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useSpring } from "framer-motion";
import aboutimg from "../assests/aboutus.png";
/* =========================
   🔥 3D TITLE COMPONENT
========================= */
function TiltTitle({ children }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [8, -8]);
    const rotateY = useTransform(x, [-100, 100], [-8, 8]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="will-change-transform"
        >
            {children}
        </motion.div>
    );
}

/* =========================
   🔥 3D CARD COMPONENT
========================= */
function AnimatedCard({ title, desc }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative p-10 border border-white/10 bg-white/[0.02] overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="absolute w-40 h-40 bg-white/10 blur-3xl rounded-full top-[-20%] left-[-20%]" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <h3 className="text-xl font-medium mb-3 text-white">
                    {title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}

/* =========================
   🚀 MAIN COMPONENT
========================= */
export default function AboutUs() {
    return (
        <div className="bg-[#030305] font-['Inter'] text-white">

            {/* SECTION 1 */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="font-['JetBrains_Mono'] text-[10px] md:text-xs text-white/40 tracking-[0.5em] uppercase border-l border-white/20 pl-4 mb-8">
                            SYS.01 — ABOUT US
                        </p>
                    </motion.div>
                    <TiltTitle>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-light leading-[1.2] tracking-tight"
                        >
                            Crafting Our Unique Story <br />
                            Journey Beyond{" "}
                            <span className="relative inline-block">
                                Limits
                                <span className="absolute left-0 bottom-1 w-full h-[4px] bg-white/30 rounded-full"></span>
                            </span>
                        </motion.h1>
                    </TiltTitle>

                    {/* FEATURES */}
                    <div className="mt-10 grid grid-cols-2 gap-6">
                        {[
                            "AI-Driven Solutions",
                            "Scalable SaaS Platform",
                            "Enterprise Automation Experts",
                            "Business-Focused Technology",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm">
                                    ✓
                                </div>
                                <p className="text-white/70">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT */}
                <div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-white/50 text-lg leading-relaxed max-w-xl"
                    >
                        Axiora Global Solutions Pvt. Ltd. is an AI-driven product and IT
                        services company focused on building intelligent platforms, SaaS
                        products, and enterprise automation systems. With over five years of
                        experience, we help organizations modernize legacy systems, automate
                        workflows, and deploy scalable digital platforms.
                    </motion.p>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <TiltTitle>
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-light leading-tight"
                        >
                            Building a Bold and Exciting Future <br />
                            <span className="relative inline-block">
                                Ignited by Innovation
                                <span className="absolute left-0 bottom-1 w-full h-[4px] bg-white/30 rounded-full"></span>
                            </span>
                        </motion.h2>
                    </TiltTitle>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-white/50 max-w-3xl mx-auto text-lg"
                    >
                        Axiora Global Solutions empowers businesses to scale, innovate, and
                        lead with confidence. We combine strategic IT consulting, advanced
                        engineering, and automation to transform ideas into impactful
                        digital solutions.
                    </motion.p>
                </div>

                {/* CARDS */}
                <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-0 border border-white/10 rounded-xl overflow-hidden">

                    {[
                        {
                            title: "Our Vision",
                            desc: "To become a trusted global technology leader and partner that drives innovation, accelerates digital transformation, and shapes a smarter, more connected future for businesses worldwide.",
                        },
                        {
                            title: "Our Approach",
                            desc: "We partner with organizations to understand their goals, challenges, and growth vision. We deliver technology solutions that create measurable business value and long-term success.",
                        },
                        {
                            title: "Our Impact",
                            desc: "We help businesses streamline operations, enhance digital capabilities, and unlock new opportunities through intelligent technology adoption, enabling them to compete and thrive in evolving world.",
                        },
                        {
                            title: "Our Mission",
                            desc: "To deliver reliable, scalable, and future-ready technology solutions through expertise, innovation, and a client-first mindset that ensures measurable outcomes and sustainable growth.",
                        },
                    ].map((card, i) => (
                        <AnimatedCard key={i} {...card} />
                    ))}
                </div>
            </section>
            {/* about session-03 */}
            <PremiumStatsSection />
        </div>

    );


    function Counter({ value }) {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const end = parseInt(value);
            const duration = 1200;
            const step = Math.max(Math.floor(duration / end), 20);

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start >= end) clearInterval(timer);
            }, step);

            return () => clearInterval(timer);
        }, [value]);

        return <>{count}</>;
    }

    function FlickerText({ children }) {
        return <span className="animate-pulse">{children}</span>;
    }

    function PremiumStatsSection() {

        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
        const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

        const y = useTransform(springY, [0, 800], [-20, 20]);

        return (
            <section
                onMouseMove={(e) => {
                    mouseX.set(e.clientX);
                    mouseY.set(e.clientY);
                }}
                className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center overflow-hidden"
            >

                {/* Mouse Glow */}
                <motion.div
                    className="pointer-events-none fixed w-72 h-72 rounded-full bg-white/10 blur-[120px]"
                    style={{ translateX: springX, translateY: springY }}
                />

                {/* LEFT */}
                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-light"
                    >
                        Unveiling the Success of Our <br />
                        Startup Venture{" "}
                        <FlickerText>
                            <span className="relative inline-block">
                                Expedition
                                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-white/40" />
                            </span>
                        </FlickerText>
                    </motion.h2>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        {[
                            { value: "120", suffix: "+", label: "Projects Delivered" },
                            { value: "25", suffix: "+", label: "Technology Experts" },
                            { value: "98", suffix: "%", label: "Client Satisfaction Rate" },
                            { value: "5", suffix: "+", label: "Years of Experience" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="relative p-8 border border-white/10 bg-white/[0.03] group"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                                    <div className="absolute w-40 h-40 bg-white/10 blur-3xl rounded-full top-[-30%] left-[-30%]" />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-semibold">
                                        <Counter value={stat.value} />
                                        {stat.suffix}
                                    </h3>
                                    <p className="text-white/50 mt-2 text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div style={{ y }} className="relative w-full h-full">
                    <div className="relative overflow-hidden mt-10 w-full max-w-[420px] ml-auto mr-10">
                        <img
                            src={aboutimg}
                            className="w-full h-[500px] object-cover "
                            
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                </motion.div>
            </section>
        );
    }
}