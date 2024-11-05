import { URLS} from "@/app/lib/urls";

export async function getArticles(parent?:string, category?:string){
   // await new Promise((resolve) => setTimeout(resolve, 5000));
    let url;
    if(parent){
        url = URLS.CATEGORY + `/${parent}`;
    }else if(category){
        url = URLS.CATEGORY + `/${category}`;
    }
    else{
        url = URLS.KNOWLEDGE_BASE;
    }
    const res = await fetch(url);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch Articles');
    }

    return res.json();
}


interface Article{
    id: string
    title: string
    type: string
    content: string
}
export async function getArticle(slag:string){

    let res = await fetch(URLS.KNOWLEDGE_BASE + `/${slag}`);
    if(!res.ok){
        console.log('Failed to fetch the Article');

        throw new Error('Failed to fetch the Article');
    }

    const initial_data = await res.json();
    const article: Article = initial_data[0];
    return article;

}

export async function getCategories(){
    const res = await fetch(URLS.CATEGORIES);
    if(!res.ok){
        throw new Error('Failed to get Categories');
    }
    return res.json();
}