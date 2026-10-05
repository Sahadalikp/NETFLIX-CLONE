import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import Homepage from "./component/Homepage";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Order from "./component/Order";
import Notmatch from "./component/Notmatch";
import Prodect from "./component/Prodect";
import Featuredprodects from "./component/Prodects/Featuredprodects";
import Newprodects from "./component/Prodects/Newprodects";
import Users from "./component/Users/Users";
import Userditeals from "./component/Users/Userditeals";
import Admin from "./component/Admin";
import Profile from "./component/Profile";
import Login from "./component/Login";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/order" element={<Order />} />

        <Route path="/prodect" element={<Prodect />}>
          <Route index element={<Featuredprodects />} />
          <Route
            path="featuredprodects"
            element={<Featuredprodects />}
          />
          <Route
            path="newprodects"
            element={<Newprodects />}
          />
        </Route>

        <Route path="/users" element={<Users />}>
          <Route path=":Id" element={<Userditeals />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Notmatch />} />
      </Routes>
    </>
  );
}