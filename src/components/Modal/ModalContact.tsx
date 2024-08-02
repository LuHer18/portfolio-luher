import { useRef } from 'react';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';



Modal.setAppElement('#root');

type PropsModal = {
  closeModal: () => void;
  modalIsOpen: boolean;
}
export const ModalContact = ({ closeModal, modalIsOpen }: PropsModal) => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_iD, import.meta.env.VITE_TEMPLATE_ID, form.current as HTMLFormElement, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-fondo'
      >
        <h2 className='title2'>Envíame un email</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>

      </Modal>
    </div>
  );
}