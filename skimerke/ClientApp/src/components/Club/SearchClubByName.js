import React, { useState, useEffect } from "react";
import { apiGetAllClubs } from "../api/ApiClub";
import { FormGroup, Input, Label } from "reactstrap";

export const SearchClubByName = () => {
    const [input, setInput] = useState("");
    const [clubs, setClubs] = useState([]);
    const [filteredClubs, setFilteredClubs] = useState([]);
    const [typing, setTyping] = useState(false); // State to indicate whether the user is typing

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = () => {
        apiGetAllClubs()
            .then((data) => {
                setClubs(data["$values"]);
            })
            .catch(error => console.error("Error fetching clubs:", error));
    };

    const handleInputChange = (value) => {
        setInput(value);
        setTyping(true);
        filterClubs(value);
    };

    const filterClubs = (value) => {
        const searchResult = clubs.filter((club) => {
            return club.clubName.toLowerCase().includes(value.trim().toLowerCase());
        }).slice(0, 5);
        setFilteredClubs(searchResult); 
    };

    return (
        <div>
            <FormGroup floating>
                <Input
                    id="formClubId"
                    name="clubId"
                    placeholder="Search for club name"
                    type="text"
                    value={input}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <Label for="formClubId">
                    Search for club name
                </Label>
            </FormGroup>
            {input !== "" && typing && filteredClubs.length > 0 && ( // Display the list of clubs only when the user starts typing and there are clubs in the filtered result
                <ul>
                    {filteredClubs.map(club => (
                        <li key={club.id}>
                            <p>Name: {club.clubName}</p>
                            <p>Address: {club.address}</p>
                            <p>Postal Code: {club.postalCode}</p>
                            <p>City: {club.city}</p>
                            <p>Email: {club.eMail}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
