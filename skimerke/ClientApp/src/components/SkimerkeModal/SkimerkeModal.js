import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useState} from "react";
import "./SkimerkeModal.css"

// https://reactstrap.github.io/?path=/docs/components-modal--modal
export const SkimerkeModal = ({headerChildren, bodyChildren, footerChildren}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn =
        (
            <button type="button" className="close-outside-modal" onClick={toggle}><p
                className="close-outside-modal-text">&times;</p></button>
        )

    return (
        <div>
            <button className="btn btn-primary" onClick={toggle}>Open modal</button>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-background-color modal-content">
                    <ModalHeader>
                        {headerChildren ? headerChildren : <div>Legg til dine opplysninger</div>}
                        <div>{externalCloseBtn}</div>
                    </ModalHeader>

                    <ModalBody>
                        {bodyChildren ? {bodyChildren} :
                            <form action="">
                                <label htmlFor="firstName">Test: </label>
                                <input type="text" name="firstName" id="firstName"/>
                            </form>
                        }
                    </ModalBody>
                    <ModalFooter className="d-flex flex-column">
                        <button className="btn btn-primary modal-btn" onClick={toggle}>Fortsett</button>
                        <button className="btn btn-secondary modal-btn" onClick={toggle}>Avbryt</button>
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    )
}