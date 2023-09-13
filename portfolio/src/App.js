import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import cn from 'classnames';


import Learn from './pages/Learn/Learn'
import AboutMe from './pages/AboutMe/AboutMe'
import Photo from './pages/Photo/Photo'
import Video from './pages/Video/Video'
import styles from './App.module.css';


function App() {
  return (
    <Router>
      <nav className={styles.header}>
        <ul className={styles.header__menu}>
          <div className={styles.logo}>
            <li>
              <a href="https://github.com/lenakokareva81/portfolio" className={styles.link} title="репозиторий github этого приложения">
                <svg className={styles.git} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  >
                  <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#508c78" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                </svg>
                github </a>

            </li>
          </div>
          <li>
            <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/photo">
              <svg version="1.1" className={styles.photo} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                <g>
                  <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="46,20 38,10 26,10 18,20 1,20 1,52 63,52 
		63,20 	"/>
                  <circle fill="#000000" stroke="#000000" stroke-width="1" stroke-miterlimit="10" cx="32" cy="36" r="8" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="9" y1="20" x2="9" y2="52" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="54" y1="28" x2="54" y2="28" />
                </g>
              </svg>
              фото</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/aboutMe">
              <svg version="1.1" className={styles.text} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                <g>
                  <polygon fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="1,6 1,54 32,58 63,54 63,6 32,10 	" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="32" y1="58" x2="32" y2="10" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="7" y1="16" x2="26" y2="18" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="7" y1="26" x2="26" y2="28" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="7" y1="36" x2="26" y2="38" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="7" y1="46" x2="26" y2="48" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="57" y1="16" x2="38" y2="18" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="57" y1="26" x2="38" y2="28" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="57" y1="36" x2="38" y2="38" />
                  <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="57" y1="46" x2="38" y2="48" />
                </g>
              </svg>


              обо мне </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/learn">

              <svg version="1.1" className={styles.learn} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="36" y1="34" x2="41" y2="39" />
                <rect x="46.257" y="35.065" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 120.5036 47.0858)" fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" width="8.485" height="26.87" />
                <polygon fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" points="12,16 18,10 8,4 6,6 " />
                <line fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" x1="28" y1="26" x2="15" y2="13" />
                <path fill="none" stroke="#000000" stroke-width="1" stroke-miterlimit="10" d="M58,12.5l-8,3.75l-4-4.125l3.5-8.062l0,0
	C39.5,4.062,37,9,37,14v4L3.5,52l-1.75,6l2.125,2l6.062-1.5L44,25h4C53,25,58,22.5,58,12.5L58,12.5z"/>
              </svg>
              js задания</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/video">
              <svg version="1.1" className={styles.video} id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                <g >
                  <path d="M47,19h-6.586l-8-8H6v2h25.586l6,6H0v34h47v-9.252l17,10V18.252l-17,10V19z M62,21.748v28.504l-17-10V51H2V21h43v10.748
		L62,21.748z"/>
                  <rect x="6" y="27" width="4" height="2" />
                  <rect x="14" y="27" width="4" height="2" />
                  <path className={styles.video__camera} d="M6,47h20V35H6V47z M8,37h16v8H8V37z" />
                </g>
              </svg>
              видео </NavLink>
          </li>
        </ul>
      </nav>



      <div>
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>

    </Router >

  );
}
export default App;



