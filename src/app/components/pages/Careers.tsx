import { motion } from "motion/react";
import { Rocket, TrendingUp, Scale } from "lucide-react";
import ApplyForm from "./ApplyForm";

export function Career() {
  // const [position, setPosition] = useState("");
  return (
    <>
      <div className="min-h-screen bg-[#000000] text-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Void Particle */}
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full mix-blend-difference"
          animate={{
            scale: [1, 20, 1],
            opacity: [1, 0.1, 1],
            filter: ["blur(0px)", "blur(10px)", "blur(0px)"]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle lines */}
        <motion.div
          className="absolute top-0 left-[20%] w-[1px] h-[30vh] bg-gradient-to-b from-white/10 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 3, ease: "circOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[20%] w-[1px] h-[30vh] bg-gradient-to-t from-white/10 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "circOut" }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-8 mix-blend-difference">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="font-['JetBrains_Mono'] text-[10px] text-white/30 tracking-[0.5em] uppercase mb-16"
          >
            SYS.04 — The Career
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 3, delay: 1 }}
            className="font-['Inter'] font-extralight text-5xl md:text-8xl text-white tracking-tighter interactive"
          >
            Join Our Career
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
            className="font-['JetBrains_Mono'] text-sm tracking-[0.3em] text-white/40 uppercase max-w-2xl leading-loose mt-16"
          >
            Explore the Void of Opportunities.
          </motion.p>
        </div>
      </div>
      <WhyChooseUs />
      <JobsSection />
      <ApplyForm />
    </>
  );
}



const features = [
  {
    icon: Rocket,
    title: "Innovation First",
    desc: "Work with cutting-edge technologies and contribute to groundbreaking projects that shape the future."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Continuous learning opportunities, mentorship programs, and clear career advancement paths."
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    desc: "Flexible working hours, remote work options, and comprehensive wellness programs."
  }
];

export function WhyChooseUs() {
  return (
    <section className="w-full bg-[#030305] text-white pt-10 pb-24 px-6">
      {/* ─── Heading ─── */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <p className="text-white/40 font-medium tracking-[0.3em] text-xs mb-4">
          WHY CHOOSE US
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Why Work At Axiora Global Solutions
        </h2>

        <p className="text-white/50 text-lg leading-relaxed">
          Join a company that values innovation, growth, and work-life balance
        </p>
      </div>

      {/* ─── Cards ─── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl p-10 border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5 blur-2xl" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="mb-6">
                  <Icon className="w-7 h-7 text-white/60 group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 leading-relaxed text-[15px]">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          );
        })}

      </div>

      {/* ─── Bottom spacing ─── */}
      <div className="h-15" />
    </section>
  );
}

const jobs = [
  {
    title: "Software Engineer – Trainee",
    desc: "Kickstart your career by working on real-time development projects and learning modern software engineering practices.",
    req: [
      "Assist in application development and testing",
      "Write clean and maintainable code",
      "Support debugging and issue resolution",
      "Collaborate with senior engineers"
    ]
  },
  {
    title: "Software Engineer",
    desc: "Build scalable applications and contribute to product development across enterprise and SaaS platforms.",
    req: [
      "Debug technical issues",
      "Maintain and optimize applications",
      "Understand UI/UX principles",
      "Develop new features"
    ]
  },
  {
    title: "Frontend Developer",
    desc: "Create beautiful and responsive interfaces for modern web applications.",
    req: [
      "Build UI components",
      "Optimize performance",
      "Work with React",
      "Collaborate with designers"
    ]
  },
  {
    title: "Backend Developer",
    desc: "Develop robust APIs and scalable backend systems.",
    req: [
      "Design APIs",
      "Work with databases",
      "Ensure performance",
      "Handle server logic"
    ]
  },
  {
    title: "AI Engineer",
    desc: "Work on cutting-edge AI models and intelligent systems.",
    req: [
      "Build ML models",
      "Data processing",
      "Deploy AI systems",
      "Optimize accuracy"
    ]
  },
  {
    title: "DevOps Engineer",
    desc: "Manage infrastructure, CI/CD pipelines, and deployments.",
    req: [
      "Automate deployments",
      "Manage cloud systems",
      "Monitor performance",
      "Ensure security"
    ]
  }
];

export function JobsSection() {
  return (
    <section className="w-full bg-[#030305] text-white py-24 px-6">

      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-white/40 tracking-[0.3em] text-xs mb-4">
          OPEN POSITIONS
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Current Job Openings
        </h2>

        <p className="text-white/50">
          Find your perfect role and start your journey with us
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl"
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">
              {job.title}
            </h3>

            {/* Description */}
            <p className="text-white/50 mb-6">
              {job.desc}
            </p>

            {/* Requirements */}
            <p className="font-semibold mb-3 text-white/80">
              Requirements:
            </p>

            <ul className="space-y-2 mb-6 text-white/50">
              {job.req.map((r, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-[6px] w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                  {r}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="border border-white/20 px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
              Apply Now →
            </button>
          </motion.div>
        ))}

      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </section>
  );
}


