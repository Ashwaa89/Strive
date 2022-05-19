import NavBar from "./components/navbar/BlogNavbar";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import Register from "./components/user/register";
import Login from "./components/user/login";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/styles.css";
const App = (props) => {
  const [user, setUser] = useState();
  const SetUser = (User) => {
    setUser(User);
  };

  return (
    <Router>
      <NavBar User={user} />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home User={user} SetUser={SetUser} />}
        />
        <Route
          path="/blog/:id"
          element={<Blog User={user} SetUser={SetUser} />}
        />
        <Route
          path="/new"
          element={<NewBlogPost User={user} SetUser={SetUser} />}
        />
        <Route path="/register" element={<Register />} />

        <Route
          path="/login"
          element={<Login User={user} SetUser={SetUser} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
