import {useEffect, useState} from "react";
import {apiGetPersonDateOfBirth, apiPerson} from "../api/ApiPerson";
import authService from "../api-authorization/AuthorizeService";

// use the Date() : https://www.shecodes.io/athena/7466-how-to-get-current-date-in-react
export const GetPersonDateOfBirth = () => {
    const [personDateOfBirth, setPersonDateOfBirth] = useState( new Date())
    const [age, setAge] = useState("")
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const isAuthenticated = await authService.isAuthenticated();
                if (isAuthenticated) {
                    const userToken = await authService.getAccessToken();
                    const response = await apiGetPersonDateOfBirth(userToken);
                    if (response){
                        setPersonDateOfBirth(response);
                    }                    
                } else {
                    console.log("Couldn't authenticate the user")
                }
            } catch (error) {
                console.error("Error getting date of birth", error)
            }
        }
        fetchData().then(() => console.log("Jadda"));
    }, [])
   
    

    useEffect(() => {
        const currentDate = new Date();
        const dob = new Date(personDateOfBirth);
        const years = (currentDate.getFullYear() - dob.getFullYear()).toString();
        setAge(years)
    }, [personDateOfBirth]);
    
    return (
        <div>Test is {age} years old</div>
    )
}