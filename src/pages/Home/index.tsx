import axios from 'axios'
import { useEffect, useState } from 'react'
import { BiPencil, BiTrash } from 'react-icons/bi'
import './home.style.css'

interface IPosts {
	id: string
	title: string
	description: string
	checked: boolean
	userId: string
}

const Home = () => {
	const [posts, setPosts] = useState<IPosts[]>([])
	const [post, setPost] = useState('')
	const [atualizar, setAtualizar] = useState(false)

	const Api = axios.create({ baseURL: 'https://foi.onrender.com/' })
	async function Create(event) {
		event.preventDefault()
		const { message } = event.target.elements
		console.log(event)
		await Api.post('posts/create', {
			title: message.value,
		})
		setAtualizar(value => !value)
	}

	async function Edit(id, checked) {
		await Api.put(`posts/edit/${id}`, {
			checked: !checked,
		})
		setAtualizar(value => !value)
	}

	async function Delete(id) {
		await Api.delete(`posts/delete/${id}`)
		setAtualizar(value => !value)
	}

	useEffect(() => {
		async function getAll() {
			const response = await Api.get('posts/').then(res => {
				return res.data
			})
			setPosts(response)
		}
		getAll()
	}, [])

	return (
		<div className='home'>
			<form method='post' onSubmit={e => Create(e)}>
				<h2>Adicionar notas</h2>
				<div className='add'>
					<input type='checkbox' name='' value='false' />

					<input
						type='text'
						name='title'
						id=''
						onChange={e => setPost(e.target.value)}
					/>
					<button type='button'>Enviar</button>
				</div>
			</form>

			{posts.map(el =>
				!el.checked ? (
					<div
						key={el.id}
						className='border-2 border-black rounded-3xl h-auto bg-white flex flex-row items-center justify-between mb-2 drop-shadow-xl'
					>
						<input
							checked={el.checked}
							onChange={() => Edit(el.id, el.checked)}
							type='checkbox'
							className=''
							id=''
						/>
						<h1 className='text-black p-5 text-1xl rounded-lg'>{el.title}</h1>
						<div>
							<button type='button' className='mr-4 text-black'>
								<BiPencil />
							</button>
							<button
								type='button'
								onClick={() => Delete(el.id)}
								className='mr-4 text-black'
							>
								<BiTrash />
							</button>
						</div>
					</div>
				) : (
					<div />
				),
			)}
		</div>
	)
}

export default Home
