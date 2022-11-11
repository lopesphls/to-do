import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Router = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/signin' element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
