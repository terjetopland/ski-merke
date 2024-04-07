// ApiAddPersonToAppUser.js

export async function apiAddPersonToAppUser(person, token) {
    return await fetch('person', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(person)
    });
}

