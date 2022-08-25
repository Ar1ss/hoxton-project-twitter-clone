export function FeedPost({ post }) {
    return (
        <div className="post-card">

            <div>
                <div className="post-card__top">
                    <img width={60} className="profile-image" src={post.profileImage} alt="" />
                    <h2>{post.name}</h2>
                    <p>{post.userName}</p>
                    <p>{post.timeStamp}</p>
                </div>
                   <h3>{post.postText}</h3>
            </div>


            <img width={400} src={post.postImage} alt="" />

            <div className="post-card__bottom">
                <p>Likes {post.likes}</p>
                <p>Comments {post.comments}</p>
            </div>
        </div>
    )
}