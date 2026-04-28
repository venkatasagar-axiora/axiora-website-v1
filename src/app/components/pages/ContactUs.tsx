import { motion } from "motion/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";


export function ContactUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    query: ""
  });

  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };




  return (
    <>
      <div className="min-h-screen bg-[#030305] text-white flex flex-col md:flex-row items-stretch justify-center relative overflow-hidden">

        {/* Glitching horizontal division line */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 z-0 hidden md:block"
          animate={{ opacity: [0.2, 0.8, 0.2], y: [-2, 2, -2] }}
          transition={{ duration: 0.1, repeat: Infinity, repeatType: "mirror" }}
        />

        <div className="flex-1 flex items-center justify-center p-8 md:p-20 relative z-10 border-b md:border-b-0 md:border-r border-white/10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <div className="flex-1 flex items-center justify-center p-10 border-r border-white/10">
              <div className="max-w-md">
                <h2 className="text-5xl font-light">
                  Connect with<br />Our Team
                </h2>
                <p className="text-white/50 mt-6">
                  Our team helps you build and scale with confidence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 md:p-20 relative z-10">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl w-full flex justify-start md:justify-end text-left md:text-right"
          >
            <div className="flex-1 flex items-center justify-center p-10">
              <form action={"https://forms.zohopublic.in/axioraglobalsolutions1/form/ContactUS/formperma/dF63x7OqlIrW6B5WmMKBcX7dKn2onhZlzsOphZnCcOw/htmlRecords/submit"} name='form' id='form' method='POST' accept-charset='UTF-8' encType='multipart/form-data'
                target="hidden_iframe"
                onSubmit={() => {
                  setTimeout(() => {
                    toast.success("Information submitted successfully");
                  }, 800);
                }}
                className="w-full max-w-md space-y-6">

                <div className="flex gap-4">

                  <div className="flex-1">
                    <input
                      name="Name_First"
                      placeholder="First Name"
                      className="w-full bg-transparent border-b border-white/20 p-2"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-xs">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="flex-1">
                    <input
                      name="Name_Last"
                      placeholder="Last Name"
                      className="w-full bg-transparent border-b border-white/20 p-2"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-xs">{errors.lastName}</p>
                    )}
                  </div>

                </div>

                <input
                  name="Email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-white/20 p-2"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

                <div className="flex gap-3">
                  {/* <div className="relative w-24"> */}
                  {/* <select
                      name="PhoneNumber_countrycode"
                      className="w-full bg-transparent border-b border-white/20 p-2 pr-6 outline-none text-white appearance-none"
                    >
                      <option value="+91" className="bg-black text-white">+91</option>
                      <option value="+1" className="bg-black text-white">+1</option>
                      <option value="+44" className="bg-black text-white">+44</option>
                      <option value="+61" className="bg-black text-white">+61</option>
                    </select> */}

                  {/* Arrow */}
                  {/* <span className="absolute right-1 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                      ▼
                    </span> */}
                  {/* </div> */}
                  <input
                    name="PhoneNumber_countrycode"
                    placeholder="Phone"
                    className="flex-1 bg-transparent border-b border-white/20 p-2"
                  />

                </div>
                {errors.phone && <p className="text-red-400 text-xs">{errors.phone}</p>}
                <textarea
                  name="MultiLine"
                  placeholder="Your Query / Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 p-2 resize-none"
                />
                {errors.query && <p className="text-red-400 text-xs">{errors.query}</p>}

                <button
                  disabled={loading}
                  className="border px-6 py-2 rounded-full hover:bg-white hover:text-black transition disabled:opacity-50"
                  type="submit"
                >
                  {loading ? "Submitting..." : "Submit →"}
                </button>

                {success && (
                  <div className="border border-green-500 text-green-400 p-3 text-sm">
                    {success}
                  </div>
                )}

              </form>
            </div>
          </motion.div>
        </div>

      </div>
      <ContactInfo />
    </>
  );
}

// Separate component for contact info cards and social media links
export function ContactInfo() {
  return (
    <div className="w-full bg-[#030305] text-white px-6 md:px-20 py-20">

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Address */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-white/60 text-sm mt-1">
              3rd Floor, The Business Park – Pranava Group, Beside Harsha Toyota Showroom,
              Landmark Residency, Kothaguda, Hyderabad, Telangana – 500084, India.
            </p>
          </div>
        </motion.div>

        {/* Mobile */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Mobile</h3>
            <p className="text-white/60 text-sm mt-1">+91 7386095518</p>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Availability</h3>
            <p className="text-white/60 text-sm mt-1">Daily 09 am – 06 pm</p>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex gap-4 p-6 rounded-xl border border-white/10 bg-white/5"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg shrink-0">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-white/60 text-sm mt-1">
              support@axioraglobalsolutions.com
            </p>
          </div>
        </motion.div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-12"></div>

      {/* Social Media */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">Social Media:</p>

        <div className="flex gap-4">

          {[FaInstagram, FaXTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-md cursor-pointer hover:bg-white/10 transition"
            >
              <Icon size={16} />
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
}