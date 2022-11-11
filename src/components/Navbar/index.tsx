import { Link } from 'react-router-dom'
import './navbar.styled.css'
const Navbar = () => {
	return (
		<header className='navbar'>
			<h1>
				<Link to='/'>to-do</Link>
			</h1>
			<div className='btn-home'>
				<Link to='/'>home</Link>
			</div>
			<div className='user'>
				<Link to='/signin'>SignIn</Link>
			</div>
		</header>
	)
}
export default Navbar
