import { Link } from 'react-router-dom'
import '../SignIn/sign.style.css'
const SignUp = () => {
	return (
		<div className='sign'>
			<div className=''>
				<form
					action='#'
					target='_self'
					className='flex flex-col items-start px-5 py-2 w-80 h-auto'
				>
					<h1 className=''>Cadastre-se</h1>
					<label className=''>Name</label>
					<input
						type='text'
						name='name'
						autoComplete='off'
						className='border rounded-lg border-white text-center w-full'
						required
					/>
					<label className='text-orange-500 font-medium'>Email</label>
					<input
						type='email'
						name='email'
						autoComplete='off'
						className='border rounded-lg border-white text-center w-full'
						required
					/>
					<label className='text-orange-500 font-medium'>Password</label>
					<input
						type='password'
						name='password'
						autoComplete='off'
						className='border rounded-lg border-white text-center w-full'
						minLength={6}
						required
					/>

					<input
						type='submit'
						value='Cadastrar'
						className='w-2/4 self-center bg-orange-500 rounded-3xl my-6 py-1
          text-white font-semibold'
					/>
					<span className='border-b border-white w-full'></span>
				</form>
				<Link to='/signin'>
					<button className='self-center bg-orange-500 text-white mt-3 font-semibold w-auto px-5 py-1 rounded-3xl'>
						Sign in
					</button>
				</Link>
			</div>
		</div>
	)
}

export default SignUp
