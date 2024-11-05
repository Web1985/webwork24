import {getArticle, getArticles, getCategories} from "@/app/lib/data";
import {notFound} from "next/navigation";
import {Suspense} from "react";
import {RevenueChartSkeleton} from "@/app/ui/skeletons";
import Card from "@/app/ui/knowlagebase/card";
import Category from "@/app/ui/categories/category";

export default async function Page({params}:{params:{slug?: string[]}}){

    const slug = params.slug;
    let articles;
    let article;
    if(!slug){
         articles = await getArticles();

    }
    if( slug!== undefined){

       const endSlug = slug.reverse();
        endSlug.every( part=>{
           articles = await getArticles(part);
           if(part!==undefined){
               return false;
           }
       })
    }

    if(!articles){
article = await getArticle()
        notFound();
    }

    const categories = await getCategories();
    return (
        <>
            <div className="basis-2/3">
                <h2>{slug}</h2>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    ddx
                </Suspense>
            </div>
            <div className="basis-1/3">
                {categories.map(category => (
                    <>
                        <Suspense fallback={<RevenueChartSkeleton/>}>
                            <Category data={category}/>
                        </Suspense>
                    </>

                ))}
            </div>

        </>

    );
}