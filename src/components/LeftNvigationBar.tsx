export function LeftNvigationBar() {
  return (
    <section className='left-navigation-bar'>

        <ul className='navigation-list'>

          <a href='#'>
            <img className='twitter-logo' width={50} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="" />
          </a>


          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                home
              </span> Home</a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                tag
              </span>Explore</a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                notifications
              </span>Notifications</a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                mail
              </span>Messages</a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                bookmark
              </span>Bookmarks</a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                list_alt
              </span> Lists</a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                person
              </span>
              Profile
            </a>
          </li>
          <li className='navigation-list__item' >
            <a className='navigation-link' href="#">
              <span  className="material-symbols-outlined nav-icon">
                more_horiz
              </span> More</a>
          </li>

          <button className="button">Tweet</button>
        </ul>
      </section>
  );
}