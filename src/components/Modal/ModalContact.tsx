import { useRef } from 'react';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import styleForm from './ModalContact.module.css'



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
        <form className={styleForm.form} ref={form} onSubmit={sendEmail}>
          <div className={styleForm.formInputs} >

            <label className={styleForm.formLabel}>
              <input className={`paragraph ${styleForm.formInput}`} type="text" name="user_name" placeholder=' ' />
              <span className={`paragraph ${styleForm.formText}`}>Name</span>
            </label>

            <label className={styleForm.formLabel}>
              <input className={`paragraph ${styleForm.formInput}`} type="email" name="user_email" placeholder=' ' />
              <span className={`paragraph ${styleForm.formText}`}>Email</span>
            </label>

            <label className={styleForm.formLabel}>
              <textarea className={`paragraph ${styleForm.formInput} ${styleForm.textArea}`} name="message" placeholder=' ' />
              <span className={`paragraph ${styleForm.formText}`}>Message</span>
            </label>

          </div>



          <input  type="submit" value="Send" className={`button-text button-style ${styleForm.formSubmit}`} />
        </form>

      </Modal>
    </div>
  );
}