import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/MyBadge";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import MyNavBar from "./components/MyNavBar";
import MyLogin from "./components/MyLogin";
import NotFound from "./components/NotFound";
import BookDetails from "./components/BookDetails";
import { Component } from "react";
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = (props) => {

// class App extends Component {
//   state = {
//     query: '',
//   }
const [query,setQuery] = useState('')
 const ChangeQuery = (newQuery) => {
    // this.setState({
    //   query: newQuery,
    // })
    setQuery(newQuery)
  }
  // render() {
  return (
    <BrowserRouter>
    <div className="App bg-dark text-white h-100 p-5">
<MyNavBar ChangeQuery={ChangeQuery} ></MyNavBar>
      <MyBadge bg="info" title="Strive Books"></MyBadge>

      <Routes>
      <Route element={  <BookList query={query}></BookList>} path="/" />
      <Route element={ <MyLogin/>} path="/login" />
      <Route element={ <BookDetails/>} path="/bookdetails/:bookAsin" />
      <Route element={ <NotFound/>} path="*" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
// }
// }

export default App;
