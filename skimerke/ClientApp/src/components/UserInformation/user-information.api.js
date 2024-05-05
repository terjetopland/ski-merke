import authService from "../api-authorization/AuthorizeService";

export async function getUserInformation() {
    const token = await authService.getAccessToken();
    const response = await fetch(`userInformation`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}

export async function updateUserInformation(userInformation) {
    const token = await authService.getAccessToken();
    return await fetch('userInformation', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(userInformation)
    }); 
}
