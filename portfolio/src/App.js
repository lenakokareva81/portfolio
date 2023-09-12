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
// import Project from './pages/Project/Project'
import styles from './App.module.css';


function App() {
  return (
    <Router>
      <nav className={styles.header}>
        <ul className={styles.header__menu}>
          <div className={styles.logo}>
            <li>

              <NavLink className={({ isActive }) => isActive ? cn([styles.link, styles.active]) : styles.link} to="/">




                Главная</NavLink>

            </li>
          </div>
          <li>

            {/* <img src={cardspng} className={styles.gif} /> */}
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
            {/* <img src={deckpng} className={styles.gif} /> */}
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
            {/* <img src={deckpng} className={styles.gif} /> */}
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


        </ul>
      </nav>



      <div>
        <Routes>

          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>

      </div>



    </Router >


  );



}
export default App;



