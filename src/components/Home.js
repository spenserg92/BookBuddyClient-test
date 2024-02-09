import { getAllBooks } from "../api/pet"
import { useState, useEffect } from "react"
import LoadingScreen from "./shared/LoadingScreen"

const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)
	const [books, setBooks] = useState(null)

	useEffect(() => {
		getAllBooks()
			// .then(res => console.log('books \n', res.data.books))
			.then(res => {
				setBooks(res.data.books)
			})
			.catch(error => console.error)
	}, [])
	return (
		<>
			<h2>Home Page</h2>
			{user !==null ? <h5>Hello {user.email}</h5> : null}
			{books === null ? <LoadingScreen /> : <p>{books[0].name}</p>}
		</>
	)
}

export default Home
