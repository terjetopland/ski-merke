import React, {useEffect, useState} from "react";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {getUserInformation, updateUserInformation} from "./user-information.api";

export const UserInformation = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        gender: "Other",
        dateOfBirth: new Date().toISOString().split('T')[0]
    });
    useEffect(() => {
        getUserInformation().then((userInformation) => {
            console.log(userInformation);
            if (userInformation) {
                newUserInformationDataHandler(userInformation);
            }
        });
    }, []);
    
    const newUserInformationDataHandler = (userInformation) => {
        const newUserInformation = {
            firstName: userInformation.firstName ?? "",
            lastName: userInformation.lastName ?? "",
            gender: userInformation.gender ?? "Other",
            dateOfBirth: userInformation.dateOfBirth
        }
        console.log(newUserInformation);
        setFormValues(newUserInformation)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await updateUserInformation(formValues);
        } catch (error) {
            console.error("Error adding person:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <FormGroup floating>
                        <Input
                            id="formPersonFirstName"
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={formValues.firstName}
                            onChange={handleInputChange}
                        />
                        <Label for="formPersonFirstName">
                            First Name
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup floating>
                        <Input
                            id="formPersonLastName"
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={formValues.lastName}
                            onChange={handleInputChange}
                        />
                        <Label for="formPersonLastName">
                            First Name
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup floating>
                        <Input
                            id="formPersonDOB"
                            name="dateOfBirth"
                            placeholder="First Name"
                            type="date"
                            value={formValues.dateOfBirth}
                            onChange={handleInputChange}
                        />
                        <Label for="formPersonDOB">
                            Date of Birth
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup floating>
                        <Input
                            id="formPersonGender"
                            name="gender"
                            placeholder="Last Name"
                            type="select"
                            value={formValues.gender}
                            onChange={handleInputChange}
                        >
                            <option>
                                Other
                            </option>
                            <option>
                                Male
                            </option>
                            <option>
                                Female
                            </option>
                        </Input>
                        <Label for="formPersonGender">
                            Gender
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center pt-4">
                    <Button className="btn btn-primary modal-btn" type="submit">Legg til</Button>
                </Col>
            </Row>

        </Form>
    );
};
