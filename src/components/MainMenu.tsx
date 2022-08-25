import { FeedHeader } from "./FeedHeader";
import { FeedMakePostBox } from "./FeedMakePostBox";
import { FeedPost } from "./FeedPost";

export function MainMenu({ posts }) {
    return (
        <section className='main-menu'>
            <FeedHeader />
            <FeedMakePostBox />
            {posts.map(post => (
                <FeedPost post = {post} />
            ))}

        </section>
    )
}