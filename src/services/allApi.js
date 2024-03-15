import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


// add new book api
export const addNewBookAPI=async(book)=>{
    return await commonAPI("POST",`${SERVER_URL}/books`,book)
}
//get all books to view
export const getAllBookAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/books`)
}
// add to favorite
export const addFavoriteAPI=async(book)=>{
    return await commonAPI("POST",`${SERVER_URL}/favourites`,book)
}
//delete book from shelf
export const deleteBookShelfAPI=async(bookId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/books/${bookId}`,{})
}
// get all favorites
export const getAllFavAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/favourites`)
}
//deletefav api
export const deleteFavAPI=async(bookId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/favourites/${bookId}`,{})}
    //get single book
export const getSingleBookAPI=async(bookId)=>{
    return await commonAPI("GET",`${SERVER_URL}/books/${bookId}`,{})}

// add new book to want to read
export const addNewWantAPI=async(book)=>{
    return await commonAPI("POST",`${SERVER_URL}/wantToRead`,book)}
//get all wantlist
export const getAllWantAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/wantToRead`,{})}
//remove want to read api
export const deleteWantAPI=async(bookId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/wantToRead/${bookId}`,{})}