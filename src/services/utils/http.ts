export async function getJSON<TResponse>(
    url: string,
    config?: RequestInit,
): Promise<TResponse> {
    try {
        const response = await fetch(url, config)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
        throw (error);
    }
}
