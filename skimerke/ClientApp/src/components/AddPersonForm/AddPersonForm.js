import {useState} from "react";


export const AddPersonForm = () => {
    const person = {
        firstName: "",
        lastName: "",
        gender: "Other",
        dateOfBirth: new Date(),
    }

    const [formValues, setFormValues] = useState(person);
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        console.log(value)
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <form action="">
            <label htmlFor="firstName">First name</label>yt
            <input id="firstName" type="text" value={formValues.firstName}
                   onChange={handleOnChange}/>
        </form>
    )
}