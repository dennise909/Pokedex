import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  //const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className="modal display-block">
      <section className="modal-main">
        {children}
        <button type="button" className="close" onClick={handleClose}></button>
      </section>
    </div>
  );
};

export default Modal