import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ messageModal, setMessageModal }) => {
  const navigate = useNavigate();
  return (
    <div id="pageFiller">
      <div id="modalMessage" className="text-center cardArea gameModal">
        <h1 className="pt-1">{messageModal.msg}</h1>
        {messageModal.btnAlt
        && (
          <button
            className="modalBtn"
            type="button"
            name="modal"
            onClick={() => {
              // goToPartsPage();
              setMessageModal(null);
              navigate('/userHome/parts');
            }}
          >
            {messageModal.btnAlt}
          </button>
        )}
        <button
          className="modalBtn ml-3 mb-4"
          type="button"
          name="modal"
          onClick={() => setMessageModal(null)}
        >
          {messageModal.btn}
        </button>
      </div>
    </div>
  );
};

export default Modal;
