import {Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Input, Label, Row, Col} from "reactstrap";
import {useState} from "react";
import "./SkimerkeModal.css"

// https://reactstrap.github.io/?path=/docs/components-modal--modal
// floating label: https://reactstrap.github.io/?path=/docs/components-forms--floating-labels
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
                    <ModalHeader className="d-flex flex-column p-5">
                        {headerChildren ? headerChildren : <div>Legg til dine opplysninger</div>}
                        <div>{externalCloseBtn}</div>
                    </ModalHeader>
                    <ModalBody className="d-flex justify-content-center p-5">
                        {bodyChildren ? {bodyChildren} :
                            <Form>
                                <Row>
                                    <Col>
                                        <FormGroup floating>
                                            <Input
                                                id="firstName"
                                                name="firstNmae"
                                                placeholder="First name"
                                                type="text"
                                            />
                                            <Label for="firstName">
                                                First name
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup floating>
                                            <Input
                                                id="exampleEmail"
                                                name="email"
                                                placeholder="Email"
                                                type="email"
                                            />
                                            <Label for="exampleEmail">
                                                Email
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        }
                    </ModalBody>
                    <ModalFooter className="d-flex flex-column pb-5">
                        <button className="btn btn-primary modal-btn" onClick={toggle}>Fortsett</button>
                        <button className="btn btn-secondary modal-btn" onClick={toggle}>Avbryt</button>
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    )
}