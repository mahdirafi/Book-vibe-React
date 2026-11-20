import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import ErrorPages from "../Error/ErrorPages";
import BookDetails from "../Pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path:'/',
  element: <MainLayout/>,
  children: [
    {
      index: true, 
      element: <Homepage/>
    },
    {
    path: '/books',
    element: <Books/>
    },
    {
  path: '/bookDetails/:bookId',
  loader: () => fetch('/booksData.json').then(res => res.json()),
  element: <BookDetails/>
}
  ],
  errorElement: <ErrorPages/> 
}

])