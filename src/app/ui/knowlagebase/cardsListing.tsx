import Card from "@/app/ui/knowlagebase/card";

export default function CardsListing({articles}:{articles:never}){
    return(
        <div className='columns-3'>
            {articles.map(article => (
                <Card data={article}/>
            ))}
        </div>
    )
}