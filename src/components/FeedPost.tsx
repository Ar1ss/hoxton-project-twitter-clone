

export function FeedPost({ post, setPosts, posts }) {
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
                    <button

                        onClick={() => {
                            setPosts(posts.map(p => (p.id === post.id ? { ...p, likes: p.likes + 1 } : p)))
                        }
                        }


                        className="like-button">♡</button>
                    {post.likes}
                </p>
                
            </div>

            <div>
                {post.commentSection.map(comment => (
                    <div className="comment">
                        <img width={60} className="profile-image" src={comment.commentImage} alt="" />
                        <p>{comment.commentUserName}</p>
                        <p className="comment-text">{comment.commentText}</p>
                        <p>{comment.commentTimeStamp}</p>
                        <button
                            //when you click delete a commnet
                            onClick={() => {
                                setPosts(posts.map(p => (p.id === post.id ? { ...p, commentSection: p.commentSection.filter(c => c.commentId !== comment.commentId) } : p)))
                            }
                            }
                            className="delete-button">X</button>
                    </div>
                ))}
            </div>

            <div>
                <form className="comment-form">
                    <input type="text" placeholder="Add a comment" className="comment-input" />
                    <div
                        onClick={() => {
                            //when you click add a comment add a comment to the comment section adn dont refresh the page
                            setPosts(posts.map(p => (p.id === post.id ? { ...p, commentSection: [...p.commentSection, { commentId: p.commentSection.length + 1, commentImage: post.profileImage, commentUserName: post.name, commentText: document.querySelector(".comment-input").value, commentTimeStamp: new Date().toLocaleString() }] } : p)))
                            e.preventDefault();
                        }
                        }
                        className="button">Add Comment</div>
                </form>
            </div>


        </div>
    )
}