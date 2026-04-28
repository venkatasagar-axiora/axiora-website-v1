import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- JOB DATA ---------------- */
export const Jobs = [
  { title: "Software Engineer – Trainee" },
  { title: "Software Engineer" },
  { title: "Frontend Developer" },
  { title: "Backend Developer" },
  { title: "AI Engineer" },
  { title: "DevOps Engineer" }
];

/* ---------------- CUSTOM DROPDOWN ---------------- */
interface CustomDropdownProps {
  value: string;
  onChange: (val: string) => void;
  error?: string;
}

function CustomDropdown({ value, onChange, error }: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative w-full">

      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className={`border-b p-3 cursor-pointer flex justify-between items-center transition
        ${error ? "border-red-500" : "border-white/20"}
        text-white/70 hover:text-white`}
      >
        <span>{value || "Select Position"}</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-0 w-full mt-2 bg-[#0a0a0c] border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {Jobs.map((job, i) => (
              <div
                key={i}
                onClick={() => {
                  onChange(job.title);
                  setOpen(false);
                }}
                className="px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white cursor-pointer transition"
              >
                {job.title}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* ---------------- MAIN FORM ---------------- */
export default function ApplyForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    cover: ""
  });

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    position?: string;
    resume?: string;
    cover?: string;
  }>({});

  /* ---------- HANDLE INPUT ---------- */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value
    });
  };

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    let err = {};

    if (!form.firstName) err.firstName = "Required";
    if (!form.lastName) err.lastName = "Required";

    if (!form.email) err.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = "Invalid email";

    if (!form.phone) err.phone = "Required";
    if (!form.position) err.position = "Select a position";
    if (!form.resume) err.resume = "Upload resume";

    return err;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);

    if (Object.keys(v).length === 0) {
      console.log(form);
      alert("Application Submitted 🚀");
    }
  };

  return (
    <section className="bg-[#030305] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-white/40 text-xs tracking-[0.3em] mb-4">
            APPLY NOW
          </p>
          <h2 className="text-4xl font-semibold mb-4">
            Submit Your Application
          </h2>
          <p className="text-white/50">
            Fill out the form and we’ll get back to you.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-2 outline-none"
              />
              {errors.firstName && <p className="text-red-400 text-xs">{errors.firstName}</p>}
            </div>

            <div>
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-2 outline-none"
              />
              {errors.lastName && <p className="text-red-400 text-xs">{errors.lastName}</p>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-2 outline-none"
              />
              {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
            </div>

            <div>
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 p-2 outline-none"
              />
              {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
            </div>
          </div>

          {/* 🔥 CUSTOM DROPDOWN */}
          <CustomDropdown
            value={form.position}
            onChange={(val) => setForm({ ...form, position: val })}
            error={errors.position}
          />

          {/* File */}
          <div>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="text-white/60"
            />
            {errors.resume && <p className="text-red-400 text-xs">{errors.resume}</p>}
          </div>

          {/* Cover */}
          <textarea
            name="cover"
            placeholder="Cover Letter"
            rows={5}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/20 p-3 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Submit →
          </button>

        </form>
      </div>
    </section>
  );
}