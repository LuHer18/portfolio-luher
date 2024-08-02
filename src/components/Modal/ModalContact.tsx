
import Modal from 'react-modal';

import styleForm from './ModalContact.module.css';
import { useControlForm } from '../../hooks/useControlForm';

Modal.setAppElement('#root');

type PropsModal = {
  closeModal: () => void;
  modalIsOpen: boolean;
};

export const ModalContact = ({ closeModal, modalIsOpen }: PropsModal) => {
  const { form, errors, statusMessage, statusType, showForm, sendEmail } = useControlForm()

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-fondo'
      >
        {showForm ? (
          <>
            <h2 className='title2'>Envíame un email</h2>
            <form className={styleForm.form} ref={form} onSubmit={sendEmail}>
              <div className={styleForm.formInputs}>
                <label className={`${styleForm.formLabel} ${errors.name ? styleForm.error : ''}`}>
                  <input
                    className={`paragraph ${styleForm.formInput} ${errors.name ? styleForm.error : ''}`}
                    type="text"
                    name="user_name"
                    placeholder=' '
                  />
                  <span className={`paragraph ${styleForm.formText} ${errors.name ? styleForm.error : ''}`}>
                    Name
                  </span>
                  {errors.name && <span className={styleForm.formError}>{errors.name}</span>}
                </label>

                <label className={`${styleForm.formLabel} ${errors.email ? styleForm.error : ''}`}>
                  <input
                    className={`paragraph ${styleForm.formInput} ${errors.email ? styleForm.error : ''}`}
                    type="email"
                    name="user_email"
                    placeholder=' '
                  />
                  <span className={`paragraph ${styleForm.formText} ${errors.email ? styleForm.error : ''}`}>
                    Email
                  </span>
                  {errors.email && <span className={styleForm.formError}>{errors.email}</span>}
                </label>

                <label className={`${styleForm.formLabel} ${errors.message ? styleForm.error : ''}`}>
                  <textarea
                    className={`paragraph ${styleForm.formInput} ${styleForm.textArea} ${errors.message ? styleForm.error : ''}`}
                    name="message"
                    placeholder=' '
                  />
                  <span className={`paragraph ${styleForm.formText} ${errors.message ? styleForm.error : ''}`}>
                    Message
                  </span>
                  {errors.message && <span className={styleForm.formError}>{errors.message}</span>}
                </label>
              </div>

              <input
                type="submit"
                value="Send"
                className={`button-text button-style ${styleForm.formSubmit}`}
              />
            </form>
          </>
        ) : (
          statusMessage && (
            <div className={` ${styleForm.statusMessage} ${statusType === 'success' ? styleForm.statusSuccess : styleForm.statusError}`}>
              {statusMessage}
            </div>
          )
        )}
      </Modal>
    </div>
  );
};

