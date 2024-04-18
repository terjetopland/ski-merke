
export async function apiGetAllClubs() {
    const response = await fetch('club');
    return await response.json();
}

export async function apiGetClubById(id) {
    const response = await fetch(`club/${id}`, {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch club with ID ${id}`);
    }

    return await response.json();
}