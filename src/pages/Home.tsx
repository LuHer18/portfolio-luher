import { useState } from "react";
import { Content, Hero } from "../components"
import { ModalContact } from "../components/Modal/ModalContact"
import { Layout } from "../Layout"


export const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <Hero/>
      <Content openModal={openModal}/>
      <ModalContact closeModal= {closeModal} modalIsOpen={modalIsOpen}/>
    </Layout>
      
    
  )
}
