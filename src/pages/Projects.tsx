import { useContext } from "react";
import { Layout } from "../Layout";
import { LanguageContext } from "../context/LanguageContext";
import { CardProject } from "../components";
import styleProjects from "./Projects.module.css";
import { motion } from "framer-motion";

export const Projects = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return null;
  }
  const title = context.titleLanguage;
  const data = context.data;

  const isMobile = window.innerWidth < 768;

  return (
    <Layout>
      <motion.h1
        className={styleProjects.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, delay: 0.1, duration: isMobile ? 0.4 : 0.8 }}
      >
        {title.project}
      </motion.h1>

      <motion.main
        className={styleProjects.cardMain}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: isMobile ? 0.4 : 0.8 }}
      >
        {data?.projects.map((project, index) => (
          <CardProject key={project.name} {...project} index={index} />
        ))}
      </motion.main>
    </Layout>
  );
};

