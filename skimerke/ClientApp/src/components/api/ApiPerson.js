// ApiAddPersonToAppUser.js

export async function apiPerson(person, token) {
    return await fetch('person', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(person)
    });
}

export async function apiGetPersonDateOfBirth(token) {
    const response = await fetch(`person/dateOfBirth`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return await response.json();
}