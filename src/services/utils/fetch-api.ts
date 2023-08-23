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

export async function getXML(
    url: string,
    config?: RequestInit,
): Promise<Document> {
    try {
        const response = await fetch(url, config)
        const text = await response.text()
        return new window.DOMParser().parseFromString(text, "text/xml")
    } catch (error) {
        console.error(error);
        throw (error);
    }
}