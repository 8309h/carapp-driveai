import { motion } from "framer-motion";

const Hero = () => {
      return (
            <div className="section" style={{ textAlign: "center" }}>
                  <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                  >
                        DriveAI Experience
                  </motion.h1>

                  <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                  >
                        Explore cars with AI-powered navigation
                  </motion.p>
            </div>
      );
};

export default Hero;

