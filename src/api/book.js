import apiUrl from '../apiConfig'
import axios from 'axios'

// read index 
export const getAllBooks = () => {
    return axios(`${apiUrl}/books`)
}
// read show

// create -> add a book

// update -> adjust a book

// delete -> remove a book