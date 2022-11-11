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

const Api = axios.create({ baseURL: 'https://foi.onrender.com/' })

const Home = () => {
	const [posts, setPosts] = useState<IPosts[]>([])
	const [post, setPost] = useState('')
	const [atualizar, setAtualizar] = useState(false)

	async function Create(event) {
		event.preventDefault()
		const { title } = event.target.elements
		console.log(event)
		await Api.post('/posts/create', {
			title: post,
		})
		setAtualizar(value => !value)
	}

	async function Edit(id, check) {
		await Api.put(`/posts/edit/${id}`, {
			check: !check,
		})
		setAtualizar(value => !value)
	}

	async function Delete(id) {
		await Api.delete(`/posts/delete/${id}`)
		setAtualizar(value => !value)
	}

	useEffect(() => {
		async function getAll() {
			const response = await axios
				.get('https://foi.onrender.com/posts/')
				.then(res => {
					return res.data
				})
			setPosts(response)
		}
	}, [atualizar])

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

			{posts.map(el => (
				<div
					key={el.id}
					className='border-2 border-black rounded-3xl h-auto bg-white flex flex-row items-center justify-between mb-2 drop-shadow-xl'
				>
					<input
						checked={el.checked}
						onChange={() => Edit(el.id, el.checked)}
						type='checkbox'
						className='ml-4 w-5 hover:bg-red-400 checked:bg-green-400'
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
			))}
		</div>
	)
}

export default Home
