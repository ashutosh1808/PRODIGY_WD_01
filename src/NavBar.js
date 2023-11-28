import {Link} from "react-router-dom"
function NavBar()
{
return(
	<>
	<center>
	<div className="nav">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/">Services</Link>
		<Link to="/">Contact</Link>
	</div>
	</center>
	</>
)
}
export default NavBar;