import React, {useState} from "react";
import {CardContainer} from "../Card/Card";
import defaultProfileImg from "../../images/landingPage.png"
import "./AddProfileImage.css"
import {AddProfileImageAPI} from "./AddProfileImageAPI";

// Followed this video to make the file upload.
const DefaultProfileImageSrc = defaultProfileImg;

const initialValues = {
    applicationUserId: " ",
    profileImageSrc: DefaultProfileImageSrc,
    profileImageFile: null
};
export const AddProfileImage = () => {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    };

    const imagePreview = e => {
        // Check if there is any files
        if (e.target.files && e.target.files[0]) {
            const imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    profileImageFile: imageFile,
                    profileImageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                profileImageFile: null,
                profileImageSrc: DefaultProfileImageSrc
            })
        }
    }
    
    const resetForm = () => {
        setValues(initialValues);
        document.getElementById('image-upload').value = null;
    }
    
    const validateImg = () => {
        return values.profileImageSrc !== DefaultProfileImageSrc;
    }
    
    const handleFormSubmit = async e => {
        // Prevent reload of page after submit
        e.preventDefault();
        try {
            if(values.profileImageFile) {
                const formData = new FormData();
                formData.append('fileImage', values.profileImageFile);
                await AddProfileImageAPI(formData);
                // Optionally, you can perform additional actions after successful upload
                console.log('Profile image uploaded successfully');
            }
        } catch (error) {
            console.error('Error uploading profile image:', error);
            // Handle error if needed
        }
    };
    
    

    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <CardContainer>
                    <div className="mx-auto">
                        <div className="form-group pb-2 mx-auto text-center">
                            <label htmlFor="image-upload" className="btn btn-primary">Velg bildefil</label>
                            <input id="image-upload" type="file" accept="image/*" className="form-control-file"
                                   onChange={imagePreview}/>
                        </div>
                        <div className="text-center">
                            <img src={values.profileImageSrc} alt="Profile image comes here" className="profile-img"/>
                        </div>
                        <div className="form-group text-center pt-2">
                            <label className="btn btn-outline-primary" htmlFor="submit-profile-img-file">Legg til valgt bilde</label>
                            <input id="submit-profile-img-file" type="submit"/>
                        </div>
                    </div>
                </CardContainer>
            </form>
        </div>
    )
}