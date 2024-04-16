import React, { useState } from "react";
import { apiGetAllClubs } from "../api/ApiClub";

export const GetAllClubs = () => {
    const [clubs, setClubs] = useState([]);

    const handleClick = () => {
        apiGetAllClubs()
            .then(data => setClubs(data["$values"]))
            .catch(error => console.error("Error fetching clubs:", error));
    };

    return (
        <div>
            <button onClick={handleClick}>Get Clubs</button>
            <ul>
                {clubs.map(club => (
                    <li key={club.id}>
                        <p>Name: {club.clubName}</p>
                        <p>Address: {club.address}</p>
                        <p>Postal Code: {club.postalCode}</p>
                        <p>City: {club.city}</p>
                        <p>Email: {club.eMail}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


