export async function getStatistics(url) {
    const response = await fetch(`${url}/statistics`);
    return response.json();
}