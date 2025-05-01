import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import assTiago from "../assets/foto-circulo-tiagolink.jpg";
import mentoriaLegacyImg from "../assets/mentoria legacy.png";
import negocioViralImg from "../assets/negocio viral 2.png";
import conselheiroImg from "../assets/conselheiro.png";
import contratePalestraImg from "../assets/contrate palestra.png";
import publicidadeImg from "../assets/publicidade e parcerias.png";

function Home() {
  const links = [
    {
      id: 1,
      title: "Mentoria Legacy",
      url: "/mentoria-legacy",
      image: mentoriaLegacyImg,
    },
    {
      id: 2,
      title: "Negócio Viral",
      url: "https://www.tiagofonseca.net/negocio-viral?source=bio",
      image: negocioViralImg,
    },
    {
      id: 3,
      title: "Conselheiro",
      url: "/conselheiro",
      image: conselheiroImg,
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram size={22} />,
      url: "https://instagram.com/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaYoutube size={22} />,
      url: "https://youtube.com/",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      icon: <FaLinkedin size={22} />,
      url: "https://linkedin.com/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaTiktok size={22} />,
      url: "https://tiktok.com/",
      label: "TikTok",
      color: "hover:text-gray-200",
    },
    {
      icon: <FaWhatsapp size={22} />,
      url: "https://wa.me/",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
  ];

  const contactInfo = [
    { 
      id: 5,
      title: "Contrate palestra", 
      url: "mailto:assessoria@mundopictures.com.br",
      image: contratePalestraImg
    },
    {
      id: 6,
      title: "Publicidade e parcerias",
      url: "mailto:assessoria@mundopictures.com.br",
      image: publicidadeImg
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white font-sans overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-amber-500 blur-[120px]" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 rounded-full bg-blue-600 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-purple-600 blur-[100px]" />
      </div>

      <motion.div
        className="w-full max-w-md mx-auto flex flex-col items-center py-10 px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={profileVariants}
        >
          <motion.div
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-6 shadow-2xl ring-2 ring-amber-500/40"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
              },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src={assTiago}
              alt="Tiago Fonseca"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            className="text-center text-lg font-bold text-amber-500 mb-1"
            variants={itemVariants}
          >
            @TIAGOFONSECA
          </motion.p>
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-2 text-center"
            variants={itemVariants}
          >
            Tiago Fonseca
          </motion.h1>
          <motion.p
            className="text-gray-300 text-center mb-8 max-w-xs font-medium px-4"
            variants={itemVariants}
          >
            Especialista em Marketing Digital & Crescimento de Negócios
          </motion.p>
        </motion.div>

        {/* Links Section - Full Image Cards */}
        <motion.div className="w-full space-y-4 mb-10" variants={itemVariants}>
          {links.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              className="block w-full rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.1,
                  duration: 0.3,
                },
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <img
                src={link.image}
                alt={link.title}
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.a>
          ))}
          
          {/* Contact Cards */}
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.url}
              className="block w-full rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: (index + links.length) * 0.1,
                  duration: 0.3,
                },
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              <img
                src={contact.image}
                alt={contact.title}
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-5 mb-10 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full border border-white/10 shadow-lg"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className={`p-3 rounded-full text-white ${social.color} transition-all bg-black/30`}
              aria-label={social.label}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Information - Removed and replaced with cards above */}
        {/* <motion.div className="w-full mb-10 space-y-3" variants={itemVariants}>
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2 + index * 0.1,
                  duration: 0.3,
                },
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href={`mailto:${contact.email}`}
                className="flex flex-col sm:flex-row items-center justify-between p-3.5 text-gray-200 hover:text-white"
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <FaEnvelope className="mr-3 text-amber-500/80" />
                  <span className="font-medium">{contact.title}</span>
                </div>
                <span className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                  {contact.email}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Footer */}
        <motion.div
          className="text-center text-sm text-gray-400 border-t border-white/10 pt-6 w-full"
          variants={itemVariants}
        >
          <p>
            {new Date().getFullYear()} Tiago Fonseca - Todos os direitos
            reservados
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
