import React from "react"
import Article from "./Article";

function ArticleList({posts}) {
    return (
        <main>
            {posts.map((blogpost) => {
            return <Article key={blogpost.id} title={blogpost.title} date={blogpost.date} preview={blogpost.preview}/>
            })}
        </main>
    )
}

export default ArticleList;

//Make a ArticleList component as a child of App. It should return:

//a <main> element with the following components inside:
//an array of Article components (one component for each post passed down as a prop to ArticleList)
//make sure to assign a unique key prop to each Article

//Where i got stuck: import Article, array of article components, need to .map for the keys, revisit keys.
//Needed posts instead of post