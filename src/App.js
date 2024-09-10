import "./styles.css";
import ContactUsFormikYupBS from "./contactUsFormikYupBS";
import SimpleComponent from "./simpleComponent";
import UserPosts from "./userPosts";
import BreweryHome from "./breweryHome";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">React Demo</h3>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            {/* <li className="nav-item m-1">
          <NavLink className="btn btn-light btn-outline-primary" to="/home">
            Home
          </NavLink>
        </li> */}
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/contactUsFormikYupBS"
              >
                Demo Contact Us form
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/userPosts"
              >
                User Posts
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/breweryHome"
              >
                Brewery Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/simpleComponent"
              >
                Simple component
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/home" element={<Home />}></Route> */}
          <Route
            path="/contactUsFormikYupBS"
            element={<ContactUsFormikYupBS />}
          ></Route>
          <Route path="/userPosts" element={<UserPosts />}></Route>
          <Route path="/breweryHome" element={<BreweryHome />}></Route>
          <Route path="/simpleComponent" element={<SimpleComponent />}></Route>
          {/* <Route path="/brewerylist" element={<BreweryList />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
