
export async function apiGetAllClubs() {
    const response = await fetch('club');
    return await response.json();
}