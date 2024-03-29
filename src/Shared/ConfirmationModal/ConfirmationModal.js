import React from 'react';

const ConfirmationModal = ({title, message, closeModal, successAction,successButtonName, modalData} ) => {
    return (
        <div>
        <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg text-red-600">{title}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
        <label onClick={()=>successAction(modalData)} htmlFor="confirmation-modal" className="btn">{successButtonName}</label>
        <button onClick={closeModal} htmlFor="confirmation-modal" className="btn">Cancel</button>
        </div>
    </div>
    </div>
        </div>
    );
};

export default ConfirmationModal;