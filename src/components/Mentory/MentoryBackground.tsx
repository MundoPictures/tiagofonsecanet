import { motion } from "framer-motion";

export const MentoryBackground = () => {
  return (
    <>
      {/* Dark gradient backdrop */}
      <div className="fixed inset-0 bg-gradient-radial from-emerald-950 via-gray-900 to-black" />

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="fixed w-1 h-1 rounded-full bg-emerald-400/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.5, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 7,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Larger animated stars/particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="fixed w-1.5 h-1.5 rounded-full bg-emerald-300/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Glowing orbs with mentorship-themed colors */}
      <motion.div
        className="fixed top-[25%] left-[15%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-600/10 to-emerald-400/5 blur-[100px] z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="fixed bottom-[15%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-purple-700/10 to-emerald-300/5 blur-[120px] z-0"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />

      <motion.div
        className="fixed top-[60%] right-[25%] w-[250px] h-[250px] rounded-full bg-gradient-to-tl from-emerald-700/10 to-cyan-300/5 blur-[100px] z-0"
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 8,
        }}
      />

      {/* Light streaks */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen overflow-hidden opacity-10 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, transparent 65%, rgba(22, 163, 74, 0.8) 100%)",
        }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Subtle geometric shapes - mentorship theme */}
      <motion.div
        className="fixed top-[10%] right-[20%] w-24 h-24 border-2 border-emerald-500/10 rounded-lg z-0"
        animate={{
          rotate: [0, 180],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="fixed bottom-[20%] left-[15%] w-16 h-16 border-2 border-emerald-500/10 rounded-full z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </>
  );
};
