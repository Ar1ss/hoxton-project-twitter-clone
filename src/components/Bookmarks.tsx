export function Bookmarks({ user }) {
  return (

    <div className="bookmarks">

      <div className="bookmarks-title">
        <h1>Bookmarks</h1>
        <p> {user.userName} </p>
      </div>

<div>
      <img className="bookmarks-image" src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-400x200.v1.png" alt="" />
</div>

      <div className="bookmarks-text">
        <h1>Save Tweets for later</h1>
        <p>Don’t let the good ones fly away! Bookmark</p>
        <p>Tweets to easily find them again in the future</p>
      </div>

    </div>
  )
}