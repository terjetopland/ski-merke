export async const addPersonToAppUser = (person) => {
    fetch('person', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(person)
    });
}