import { motion } from "motion/react";
import { Code, Cloud, Cpu, Database, Shield, Settings, Layers, Briefcase, BarChart, Wrench } from "lucide-react";
import { Check, X, ArrowRight, Anchor } from "lucide-react";
import { MessageCircle, MapPin, Rocket, Hourglass, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ServicesImages from "../assests/mobile.jpg";

const services = [
  {
    title: "IT Services & Consulting",
    desc: "Strategic IT consulting aligned with business goals. We assess current systems, define target architectures, and create practical technology roadmaps that reduce complexity and improve performance.",
    icon: <Briefcase size={20} />
  },
  {
    title: "Software & Product Development",
    desc: "Custom web, mobile, SaaS, and enterprise applications engineered for scalability, security, and performance. We build robust digital products that support innovation and growth.",
    icon: <Code size={20} />
  },
  {
    title: "AI & Automation Solutions",
    desc: "Intelligent systems that automate workflows and enhance decision-making. We implement AI-powered platforms that improve speed, accuracy, and operational efficiency.",
    icon: <Cpu size={20} />
  },
  {
    title: "Digital Transformation",
    desc: "End-to-end modernization of legacy environments and business processes. We help organizations adopt cloud-first models and redesign workflows for agility and efficiency.",
    icon: <Layers size={20} />
  },
  {
    title: "SaaS & Platform Engineering",
    desc: "Design and development of scalable, multi-tenant SaaS platforms built for global deployment. Our platforms are engineered for reliability, extensibility, and continuous innovation.",
    icon: <Settings size={20} />
  },
  {
    title: "Cloud & DevOps Services",
    desc: "Cloud-native infrastructure and automated delivery pipelines that accelerate releases and enhance system resilience across AWS, Azure, and GCP.",
    icon: <Cloud size={20} />
  },
  {
    title: "Data Engineering & Analytics",
    desc: "Modern data infrastructure that converts raw data into actionable insights. We design pipelines, analytics platforms, and dashboards for data-driven decision-making.",
    icon: <Database size={20} />
  },
  {
    title: "QA & Test Automation",
    desc: "Comprehensive quality assurance that ensures reliability, performance, and scalability across applications and platforms.",
    icon: <Shield size={20} />
  },
  {
    title: "IT Staffing & Dedicated Teams",
    desc: "Flexible talent solutions to extend your engineering capabilities and accelerate project delivery.",
    icon: <BarChart size={20} />
  },
  {
    title: "Managed IT & Support Services",
    desc: "Proactive monitoring and continuous support to maintain system stability, security, and performance.",
    icon: <Wrench size={20} />
  },
];



export function Services() {
  return (
    <>
      <div className="min-h-screen bg-[#030305] text-white px-6 py-24" id="StartingPage">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-light tracking-tight"
          >
            Our Services{" "}
            <span className="relative inline-block">
              Catalog
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-white/40" />
            </span>
          </motion.h1>

          <p className="text-white/40 mt-6 text-lg">
            Axiora Global Solutions delivers integrated technology services that help organizations modernize systems, automate operations, and scale with confidence.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-8 border border-white/10 bg-white/[0.03] backdrop-blur-md group overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute w-60 h-60 bg-white/10 blur-3xl rounded-full -top-20 -left-20" />
              </div>

              <div className="relative z-10 flex items-start gap-4">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 group-hover:bg-white group-hover:text-black transition duration-500">
                  <div className="w-15 h-15 flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <DeliveryTimeline />
      <CircularProcess />
      <CTASection />
    </>
  );
}

const steps = [
  {
    title: "Consult",
    desc: "Understand business goals, systems, and challenges.",
    icon: <ArrowRight />,
  },
  {
    title: "Architect",
    desc: "Design secure, scalable system blueprints.",
    icon: <X />,
  },
  {
    title: "Engineer",
    desc: "Build high-performance applications and platforms.",
    icon: <Anchor />,
  },
  {
    title: "Automate",
    desc: "Implement AI-driven workflows and optimization.",
    icon: <Check />,
  },
  {
    title: "Scale",
    desc: "Enhance performance and enable long-term growth.",
    icon: <Check />,
  },
];

export function DeliveryTimeline() {
  return (
    <section className="pt-32 pb-0 px-6 bg-[#030305] text-white">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight">
          Our Delivery{" "}
          <span className="relative inline-block">
            Approach
            <span className="absolute left-0 bottom-1 w-full h-[3px] bg-white/40" />
          </span>
        </h2>

        <p className="text-white/40 mt-6 text-lg">
          We follow a structured methodology to ensure every solution aligns
          with business objectives and delivers sustainable value.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-3xl mx-auto">

        {/* CENTER LINE */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />

        {/* STEPS */}
        <div className="flex flex-col gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative flex items-start gap-6 group"
            >

              {/* ICON CIRCLE */}
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 group-hover:bg-white group-hover:text-black transition duration-500">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 rounded-full blur-xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-medium">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const circle = [
  { label: "Consult", icon: <Leaf /> },
  { label: "Architect", icon: <MessageCircle /> },
  { label: "Engineer", icon: <MapPin /> },
  { label: "Automate", icon: <Rocket /> },
  { label: "Scale", icon: <Hourglass /> },
];

export function CircularProcess() {
  const radius = 170; // 👈 slightly reduced so nodes sit ON ring

  return (
    <section className="pt-0 pb-32 bg-[#030305] text-white flex flex-col items-center justify-center mt-25">
      {/* ROTATION */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="relative w-[350px] h-[350px] flex items-center justify-center"
      >
        {/* 🔥 THICK OUTER RING */}
        <div className="absolute w-full h-full rounded-full border-2 border-white/20" />

        {/* INNER SOFT GLOW */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-white/5 blur-[1px]" />

        {/* NODES */}
        {circle.map((step, i) => {
          const angle = (i / circle.length) * 360;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-${radius}px)
                  rotate(-${angle}deg)
                `,
              }}
            >
              {/* KEEP ICON UPRIGHT */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {/* 🔥 NODE */}
                <div
                  className="
                  w-20 h-20 rounded-full 
                  bg-[#0a0a0c] 
                  border border-white/15
                  flex flex-col items-center justify-center
                  backdrop-blur-md
                  shadow-[0_0_20px_rgba(255,255,255,0.05)]
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                  hover:bg-white hover:text-black
                  transition duration-500
                "
                >
                  {/* ICON */}
                  <div className="w-5 h-5 mb-1">
                    {step.icon}
                  </div>

                  {/* TEXT */}
                  <span className="text-[10px] leading-tight text-center">
                    {step.label}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}



export function CTASection() {
  const navigate = useNavigate();

  // function navigateservice() {
  //   navigate('/illusion')
  // }
  return (
    <section className="bg-[#030305] py-10 px-6 flex justify-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl rounded-2xl border border-white/10 
                   bg-gradient-to-br from-[#0a0a0c] to-[#111114] 
                   p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden"
      >

        {/* 🔥 GLOW BACKGROUND */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 blur-3xl rounded-full" />

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-light leading-tight tracking-tight">
            Ready to modernize your <br />
            technology and scale <br />
            with confidence?
          </h2>

          <p className="text-white/50 mt-6 text-sm md:text-base max-w-md">
            Partner with Nexora to implement intelligent platforms, optimize operations, and accelerate digital growth.
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-white text-black text-sm font-medium rounded-md 
                       hover:bg-white/90 transition duration-300"
            onClick={() => {
              const el = document.getElementById("StartingPage");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </motion.button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 group">

            <img
              src={ServicesImages}
              className="w-full h-[260px] md:h-[300px] object-cover 
                         group-hover:scale-105 transition duration-700"
              alt="image"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}