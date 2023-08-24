import { Episode, PodcastDetails } from "../types/mapped"

export function mapXMLtoPodcastDetails(xmlDoc: Document): PodcastDetails {
    const podcast = {
        title: xmlDoc.getElementsByTagName("title")[0].textContent || "",
        author: xmlDoc.getElementsByTagName("itunes:author")[0].textContent || "",
        image: {
            url: xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("url")[0].textContent,
            title: xmlDoc.getElementsByTagName("image")[0].getElementsByTagName("title")[0].textContent || ""
        },
        description: xmlDoc.getElementsByTagName("description")[0].textContent || "", // take innerHTML
        episodes: mapItemsToEpisodes(xmlDoc.getElementsByTagName("item"))
    }
    return podcast

}

function mapItemsToEpisodes(elements: HTMLCollectionOf<Element>): Episode[] {
    return Array.from(elements).map(element => ({
        id: element.getElementsByTagName("guid")[0].textContent || "",
        title: element.getElementsByTagName("title")[0].textContent || "",
        duration: parseDuration(element.getElementsByTagName("itunes:duration")[0]?.textContent || null), // in seconds,
        date: parseDate(element.getElementsByTagName("pubDate")[0].textContent),
        audioUrl: element.getElementsByTagName("enclosure")[0]?.getAttribute("url") || null,
        description: element.getElementsByTagName("description")[0].innerHTML
    }))
}

function parseDuration(duration: string | null) {
    if (duration === null) {
        return "";
    }
    if (duration.includes(":")) {
        return duration
    }
    const durationInSecondsInteger = parseInt(duration)
    const minutes = Math.floor(durationInSecondsInteger / 60);
    const seconds = durationInSecondsInteger - (minutes * 60)
    return minutes + ":" + seconds
}

function parseDate(dateText: string | null) {
    if (dateText === null) {
        return ""
    }
    return new Date(dateText).toLocaleDateString("es-es")
}
