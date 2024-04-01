
export const AddProfileImageAPI = async (formData) => {
    try {
        const response = await fetch('ApplicationUser', {
            method: 'POST',
            body: formData
        });
        
        return response.json(); // Assuming the backend returns JSON data
    } catch (error) {
        console.error('Error uploading profile image:', error);
        throw error; // Rethrow the error to handle it in the component
    }
}
