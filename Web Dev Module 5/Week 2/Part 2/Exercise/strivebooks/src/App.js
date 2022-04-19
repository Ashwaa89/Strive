import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/MyBadge";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
function App() {
  return (
    <div className="App bg-dark text-white h-100 p-5">
      <MyBadge bg="info" title="Strive Books"></MyBadge>
      <BookList></BookList>
    </div>
  );
}

export default App;
