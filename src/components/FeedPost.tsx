export function FeedPost({ post , commentSection}) {
    return (
        <div className="post-card">

            <div className="post__top">
                <div className="post-card__top">
                    <img width={60} className="profile-image" src={post.profileImage} alt="" />
                    <h2>{post.name}</h2>
                    <p>{post.userName}</p>
                    <p>{post.timeStamp}</p>
                </div>
                <div className="post-card-h3">
                   <h3>{post.postText}</h3>
                </div>
            </div>


            <img className="post-image" width={400} src={post.postImage} alt="" />

            <div className="post-card__bottom">
                <p className="post-likes">
                    <button className="like-button">♡</button>
                    {post.likes}
                    </p>
                <p className="post-comments">Comments : {post.commentCount}</p>
            </div>

            <div>
                {post.commentSection.map (comment => (
                    <div className="comment">
                    <img width={60} className="profile-image" src={comment.commentImage} alt="" />
                    <p>{comment.commentText}</p>
                    </div>
                ))}
            </div>

            
        </div>
    )
}