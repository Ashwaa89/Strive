import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <>

 
   <MyNav></MyNav>
<MyJumbotron></MyJumbotron>
<LatestRelease></LatestRelease>

    <MyFooter></MyFooter>
    </>
  );
}

export default App;
