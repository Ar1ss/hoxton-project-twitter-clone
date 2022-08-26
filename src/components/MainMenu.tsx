import { FeedHeader } from "./FeedHeader";
import { FeedMakePostBox } from "./FeedMakePostBox";
import { FeedPost } from "./FeedPost";

export function MainMenu({ posts , setPosts }) {
    return (
        <section className='main-menu'>
            <FeedHeader />
            
            {posts.map(post => (
                <FeedPost 
                post = {post}
                setPosts = {setPosts}
                posts = {posts}
                 />
            ))}

        </section>
    )
}