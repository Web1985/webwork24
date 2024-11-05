export default function Article({article}:{article: never}){
    return(
        <article>
            <h1>{article.title}</h1>
            <div className="node__content">
                {article.body}
            </div>
        </article>

    )
}