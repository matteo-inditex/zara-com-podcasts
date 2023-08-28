
export function getAllCorsUrl(url: string) {
    return `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
}

export interface AllCorsResponse {
    contents: string,
    status: Status
}


interface Status {
    url: string,
    content_type: string,
    http_code: string,
    response_time: number,
    content_length: number
}