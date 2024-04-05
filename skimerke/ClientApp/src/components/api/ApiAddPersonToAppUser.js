// ApiAddPersonToAppUser.js

export async function apiAddPersonToAppUser(person) {
    return await fetch('person', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    });
}

export async function postRow(exampleEntity) {
    return await fetch('hei', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exampleEntity)
    });
}