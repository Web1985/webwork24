import {getArticles} from "@/app/lib/data";
import Card from "@/app/ui/knolagebase/card";

export default async function Page(){
    const articles = await getArticles();
    return(
      <main>

          <h1>Knowlage Base</h1>
          {articles.map((article)=>{
              return(
                  <Card data={article}/>
              )
          })}
      </main>
    );
}