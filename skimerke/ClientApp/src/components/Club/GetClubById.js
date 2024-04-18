import {useState} from "react";
import {apiGetClubById} from "../api/ApiClub";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

export const GetClubById = () => {
    const [club, setClub] = useState();
    const [clubId, setClubId] = useState(1);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        apiGetClubById(clubId)
            .then(data => setClub(data["$values"]))
            .catch(error => console.error(`Error fetching club with id: ${clubId}`));
    };
    
    const handleInputChange = (e) => {
        setClubId(e.target.value)
    }
    
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="formClubId"
                        name="clubId"
                        placeholder="Enter a club id"
                        type="text"
                        value={clubId}
                        onChange={handleInputChange}
                    />
                    <Label for="formClubId">
                        Enter a club id
                    </Label>
                </FormGroup>
                <Button className="btn btn-success" type="submit">Søk etter klubb</Button>
            </Form>
        </div>
    )
}