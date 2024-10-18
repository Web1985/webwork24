import {getArticle} from "@/app/lib/data";
import {notFound} from "next/navigation";

export default async function Page({params} :{params: {id : string}}){
  const id = params.id;
    const article = await getArticle(id);
    console.log('ddd');
    if(!article){
        notFound();
    }
    return (
        <article>
            <h1>ARTICLE</h1>
            <div>
              
            </div>

        </article>

    )
}