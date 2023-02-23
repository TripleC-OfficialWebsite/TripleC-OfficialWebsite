import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Links from './Links.js';
import Body from './Body.js';
import './ModalWindow.css';


function ModalWindow() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button className="btn btn-primary tab" onClick={handleShow}>
            CONTACT US
        </button>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                    <div className = "contactUsTitle">
                    <h3 >Contact us</h3>
                    <h6>Let's make progress together</h6>
                    </div>
            </Modal.Header>

            <Modal.Body>
                <Body/>
            </Modal.Body>

            <Modal.Footer className="justify-content-center">
                <Links/>
            </Modal.Footer>
            
        </Modal>
    </>
  );
};
export default ModalWindow;