import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home"
import About from "./About"
import NavBar from "./NavBar"
import Page404 from "./Page404"
function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<NavBar/>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="*" element={<Page404/>}/>
		</Routes>
	</BrowserRouter>
    </div>
  );
}

export default App;
