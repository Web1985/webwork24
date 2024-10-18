import {getArticles, getCategories} from "@/app/lib/data";
import Card from "@/app/ui/knowlagebase/card";
import {Suspense} from "react";
import {RevenueChartSkeleton} from "@/app/ui/skeletons";
import Category from "@/app/ui/categories/category";
import {notFound} from "next/navigation";

export default async function Page() {
    const articles = await getArticles();
    if(!articles){
        notFound();
    }
    const categories = await getCategories();
    return (
        <>
            <div className="basis-2/3">
                <div className='columns-3'>
                    {articles.map(article => (
                        <>
                            <Suspense fallback={<RevenueChartSkeleton/>}>
                                <Card data={article}/>
                            </Suspense>
                        </>

                    ))}
                </div>
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