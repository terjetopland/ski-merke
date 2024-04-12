import {SkimerkeModal} from "./SkimerkeModal";
import {useState} from "react";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";


export const TestModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="btn btn-primary" onClick={() => setOpen(true)}>Open modal</button>
            <SkimerkeModal
                open={open}
                toggle={() => setOpen(!open)}
                headerChildren=
                    {
                        <div>This is the TestModal</div>
                    }
                bodyChildren=
                    {
                        <Form>
                            <Row>
                                <Col>
                                    <FormGroup floating>
                                        <Input
                                            id="exampleName"
                                            name="name"
                                            placeholder="Name"
                                            type="text"
                                        />
                                        <Label for="exampleName">
                                            Name
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
                footerChildren=
                    {
                        <div className="d-flex flex-column justify-content-center modal-btn">
                            <button className="btn btn-primary mb-2">Ok</button>
                        <button className="btn btn-secondary" onClick={() => setOpen(!open)}>Avbryt</button>
                        </div>
                    }
            />
        </div>
    )
}