// get data from the server
export async function fetchNumberOfRows() {
    const response = await fetch('hei/number-of-rows')
    const data = await response.json()
    return data;
}

// post data to the server
export async function postRow(exampleEntity) {
    return await fetch('hei', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exampleEntity)
    });
}