import { getAllBooks } from "../api/pet"
import { useState, useEffect } from "react"


const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)
	const [books, setBooks] = useState(null)

	useEffect(() => {
		getAllBooks()
			.then(res => console.log('books \n', res.data.books))
			.catch(error => console.error)
	}, [])
	return (
		<>
			<h2>Home Page</h2>
		</>
	)
}

export default Home
