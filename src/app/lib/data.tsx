import { URLS} from "@/app/lib/urls";

export async function getArticles(){
   // await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(URLS.KNOWLEDGE_BASE);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch Articles');
    }

    return res.json();
}

export async function getArticle(id:string){

    const res = await fetch(URLS.KNOWLEDGE_BASE + '/' + id);
    if(!res.ok){
        throw new Error('Failed to fetch the Article');
    }

    return res.json();
}

export async function getCategories(){
    const res = await fetch(URLS.CATEGORIES);
    if(!res.ok){
        throw new Error('Failed to get Categories');
    }
    return res.json();
}