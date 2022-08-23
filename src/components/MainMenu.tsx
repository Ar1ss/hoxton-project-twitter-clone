export function MainMenu() {
    return (
        <section className='main-menu'>
            <header className="home-page__header">
                <h1>Home</h1>
                <a href=""><span className="material-symbols-outlined home-icon">
                    auto_awesome
                </span>
                </a>
            </header>

            <div className='share-post__section'>
                <img width={60} src="https://pbs.twimg.com/profile_images/1553712988280000513/cI2VKVUb_400x400.jpg" alt="" />
                <form action="">
                    <input type="text" placeholder="What's happening?" />
                    <input type="file" />
                    <button className="button" type="submit">Tweet</button>
                </form>
            </div>
        </section>
    )
}