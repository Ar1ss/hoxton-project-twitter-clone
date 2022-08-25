export function FeedMakePostBox() {
    return (
        <div className='tweet-box'>


            <form className="tweet-box__form" action="">
                <div className="tweet-box__form-group">
                    <img className="profile-image" width={60} src="https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg" alt="" />

                    <input className="tweet-box_text-input" type="text" placeholder="What's happening?" />
                </div>
                <div className="file-button">
                    <input type="file" />
                    <button className="button" type="submit">Tweet</button>
                </div>
            </form>

        </div>
    )
}