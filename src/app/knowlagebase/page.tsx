import {getArticles} from "@/app/lib/data";
import Card from "@/app/ui/knolagebase/card";

export default async function Page(){
    const articles = await getArticles();
    return(
      <div>

          {articles.map((article)=>{
              return(
                  <>
                      <h2>{article.title}</h2>

                      <Card data={article}/>
                  </>

              )
          })}
      </div>
    );
}