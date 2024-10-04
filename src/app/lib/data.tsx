import { URLS} from "@/app/lib/urls";

export async function getArticles(){
    const res = await fetch(URLS.KNOWLEDGE_BASE);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}