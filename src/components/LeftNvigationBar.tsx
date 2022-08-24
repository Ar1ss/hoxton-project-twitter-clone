import { Link } from "react-router-dom";

export function LeftNvigationBar() {
  return (
    <section className='left-navigation-bar'>

        <ul className='navigation-list'>

          <Link to='#'>
            <img className='twitter-logo' width={50} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg" alt="" />
          </Link>


          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/">
              <span  className="material-symbols-outlined nav-icon">
                home
              </span> Home</Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/explore">
              <span  className="material-symbols-outlined nav-icon">
                tag
              </span>Explore</Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/notifications">
              <span  className="material-symbols-outlined nav-icon">
                notifications
              </span>Notifications</Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/messages">
              <span  className="material-symbols-outlined nav-icon">
                mail
              </span>Messages</Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/bookmarks">
              <span  className="material-symbols-outlined nav-icon">
                bookmark
              </span>Bookmarks</Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/lists">
              <span  className="material-symbols-outlined nav-icon">
                list_alt
              </span> Lists</Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/profile">
              <span  className="material-symbols-outlined nav-icon">
                person
              </span>
              Profile
            </Link>
          </li>
          <li className='navigation-list__item' >
            <Link className='navigation-link' to="/more">
              <span  className="material-symbols-outlined nav-icon">
                more_horiz
              </span> More</Link>
          </li>

          <button className="button">Tweet</button>
        </ul>
      </section>
  );
}