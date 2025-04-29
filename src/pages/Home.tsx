import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import assTiago from "../assets/assTiago.png";

function Home() {
  const links = [
    {
      id: 1,
      title: "Mentoria Legacy",
      image: "https://placehold.co/800x450/1a1a1a/1a1a1a",
      url: "#",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      id: 2,
      title: "Negócio Viral",
      image: "https://placehold.co/800x450/1a1a1a/1a1a1a",
      url: "https://www.tiagofonseca.net/negocio-viral?source=bio",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 3,
      title: "Conselheiro",
      image: "https://placehold.co/800x450/1a1a1a/1a1a1a",
      url: "#",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com/",
      label: "Instagram",
    },
    {
      icon: <FaYoutube size={24} />,
      url: "https://youtube.com/",
      label: "YouTube",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaTiktok size={24} />,
      url: "https://tiktok.com/",
      label: "TikTok",
    },
    {
      icon: <FaWhatsapp size={24} />,
      url: "https://wa.me/",
      label: "WhatsApp",
    },
  ];

  const contactInfo = [
    { title: "Contato", email: "contato@mundopictures.com.br" },
    { title: "Contrate palestra", email: "contato@mundopictures.com.br" },
    { title: "Publicidade e parcerias", email: "contato@mundopictures.com.br" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <motion.div
        className="w-full max-w-md mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center mb-8"
          variants={itemVariants}
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white mb-4 shadow-lg">
            <img
              src={assTiago}
              alt="Tiago Fonseca"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">Tiago Fonseca</h1>
          <p className="text-gray-300 text-center mb-4 max-w-xs">
            Especialista em Marketing Digital & Crescimento de Negócios
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-5 mb-8">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              className="w-full block rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative aspect-[16/9] w-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${link.gradient}`}
                ></div>
                <img
                  src={link.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg sm:text-xl text-center">
                    {link.title}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-8"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label={social.label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div className="w-full mb-8" variants={itemVariants}>
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center mb-4 text-center sm:text-left px-3"
              whileHover={{ scale: 1.02 }}
            >
              <a
                href={`mailto:${contact.email}`}
                className="flex flex-col sm:flex-row items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="flex items-center mb-1 sm:mb-0">
                  <FaEnvelope className="mr-2" />
                  <span className="font-medium">{contact.title}</span>
                </div>
                <span className="text-gray-400 hover:text-gray-200 transition-colors text-sm sm:ml-2 break-all">
                  {contact.email}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          <p>
            © {new Date().getFullYear()} Tiago Fonseca - Todos os direitos
            reservados
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
