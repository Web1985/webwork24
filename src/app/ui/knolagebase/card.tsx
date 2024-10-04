export default function Card(data){
    return (
        <article data-history-node-id="48" className="node node--type-knowledge-base node--view-mode-card">
            <div className="cards-header">
                <div className="category-links">
                    <i className="fa-solid fa-tag" aria-hidden="true"></i>
                    <div
                        className="field field--name-field-category field--type-entity-reference field--label-hidden field__item">
                        <a href="/knowledge-base?title=&amp;field_category_target_id=53" className="category-list"
                           name="field_category_target_id[53]">React Native</a>
                    </div>
                </div>
                <div className="comment-count"><i className="fa-solid fa-comment" aria-hidden="true"></i> 0</div>
            </div>
            <h2>
                <a href="/react-native/virtualizedlists-should-never-be-nested" rel="bookmark"><span
                    className="field field--name-title field--type-string field--label-hidden">
                {data.title}
                </span>
                </a>
            </h2>
            <div className="created"><i className="fa-sharp fa-regular fa-calendar" aria-hidden="true"></i>24 September
                2024
            </div>


            <div className="node__content">

                <div className="node--footer d-flex">

                    <div className=" me-auto text-end">

                        <div
                            className="field field--name-field-tags field--type-entity-reference field--label-hidden field__items">
                            <div className="field__item">
                                <a href="/knowledge-base?title=&amp;field_tags_target_id=54" className="tag-btn"
                                   name="field_tags_target_id[54]">nested</a>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </article>
    );
}