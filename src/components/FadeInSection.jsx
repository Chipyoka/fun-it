// FadeInSection.jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
