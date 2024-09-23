import { useContext } from "react";
import { Layout } from "../Layout";
import { LanguageContext } from "../context/LanguageContext";
import styleAbout from "./About.module.css";
import { motion } from "framer-motion";

export const About = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const title = context.titleLanguage;
  const paragraphs = context.aboutLanguage;

  
  const isMobile = window.innerWidth < 768;

  
  const duration = isMobile ? 0.4 : 0.8;

  return (
    <Layout>
      <motion.h1
        className={styleAbout.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.1, duration }}
      >
        {title.about}
      </motion.h1>

      <motion.article
        className={styleAbout.containerAbout}
        initial={{ opacity: 0, x: isMobile ? 0 : "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2, duration }}
      >
        <motion.img
          className={styleAbout.imgMe}
          src="./assets/me.webp"
          alt="me"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.3, duration }}
        />

        <motion.div className={styleAbout.contentText} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration }}>
          {paragraphs.map((p, index) => (
            <motion.p className={styleAbout.text} key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration }}>
              {p}
            </motion.p>
          ))}
        </motion.div>
      </motion.article>
    </Layout>
  );
};
