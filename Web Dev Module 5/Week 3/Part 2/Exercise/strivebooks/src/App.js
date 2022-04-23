import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/MyBadge";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import MyNavBar from "./components/MyNavBar";
import { Component } from "react";
class App extends Component {
  state = {
    query: '',
  }
  ChangeQuery = (newQuery) => {
    this.setState({
      query: newQuery,
    })
  }
  render() {
  return (
    <div className="App bg-dark text-white h-100 p-5">
<MyNavBar ChangeQuery={this.ChangeQuery} ></MyNavBar>
      <MyBadge bg="info" title="Strive Books"></MyBadge>
      <BookList query={this.state.query}></BookList>
    </div>
  );
}
}

export default App;
