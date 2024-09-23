import { useState, useEffect } from "react";
import { Content, Hero } from "../components";
import { ModalContact } from "../components/Modal/ModalContact";
import { Layout } from "../Layout";
import { motion } from "framer-motion";
import styleHome from "./Home.module.css";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  // Detectamos si estamos en un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Cambia a true si el ancho de la ventana es menor a 768px (tamaño típico de móvil)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Ejecutamos inicialmente para ver el tamaño actual
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      {/* Animamos el Hero, cambiando la animación si es mobile */}
      <motion.div
        className={styleHome.heroContainer}
        initial={{ opacity: 0, y: isMobile ? 0 : -50 }}  
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: isMobile ? 50 : 70, duration: 0.8 }} 
      >
        <Hero />
      </motion.div>

      {/* Animamos el Content con un desplazamiento más leve en móviles */}
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 20 : 50 }}  
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: isMobile ? 50 : 70, delay: 0.3, duration: 0.8 }}
      >
        <Content openModal={openModal} />
      </motion.div>

      {/* Modal con la misma lógica */}
      <ModalContact closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </Layout>
  );
};

