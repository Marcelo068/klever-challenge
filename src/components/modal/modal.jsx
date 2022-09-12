import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

/* STYLES */
import './modal.scss'

function ModalComponent({ state, setState, onCloseConditional }) {

  const onCloseModal = () => setState(false);

  return (
    <Modal open={state} onClose={onCloseModal} center>
      <p className='title'>Do you want to remove <br /> this item?</p>
      <div className='d-flex justify-content-between'>
        <div className="button button-blue" onClick={() => onCloseConditional()}>Sim</div>
        <div className='px-2'></div>
        <div className="button button-red" onClick={() => onCloseModal()}>Não</div>
      </div>
    </Modal>
  );
}

export default ModalComponent;

