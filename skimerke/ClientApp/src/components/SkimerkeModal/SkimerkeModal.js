import {Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Input, Label, Row, Col} from "reactstrap";
import {useState} from "react";
import "./SkimerkeModal.css"

// https://reactstrap.github.io/?path=/docs/components-modal--modal
// floating label: https://reactstrap.github.io/?path=/docs/components-forms--floating-labels

/*  To use the Modal create a component that has a usestate for handling "open" argument.
    "toggle" should handle the state like: toggle={() => setOpen(!open)}
    See the component TestModal for how to use it :-) 
 */
export const SkimerkeModal = ({headerChildren, bodyChildren, footerChildren, open = false, toggle}) => {

    const externalCloseBtn =
        (
            <button type="button" className="close-outside-modal" onClick={toggle}><p
                className="close-outside-modal-text">&times;</p></button>
        )

    return (
        <div>
            <Modal isOpen={open} toggle={toggle} className="pt-4">
                <div className="modal-background-color modal-content">
                    <div>{externalCloseBtn}</div>
                    
                    {headerChildren ?
                        <ModalHeader className="d-flex flex-column p-5">
                            {headerChildren}
                        </ModalHeader>
                        :
                        null}
                    
                    <ModalBody className="d-flex justify-content-center p-5">
                        {bodyChildren}
                    </ModalBody>
                    
                    {footerChildren ?
                        <ModalFooter className="d-flex flex-column pb-5 justify-content-center">
                            {footerChildren}
                        </ModalFooter>
                        :
                        null}
                    
                </div>
            </Modal>
        </div>
    )
}