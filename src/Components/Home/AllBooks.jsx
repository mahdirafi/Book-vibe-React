
import React, { use } from 'react';
import BookCard from '../UI/BookCard';

const booksPromise = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {
    const books = use(booksPromise);
    console.log('book', books);
    return (
        <div className=' my-1 container mx-auto'>
            <h2 className='text-center text-2xl font-bold text-zinc-950'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

            {
             books.map((book,index) => {
            return   <BookCard  key={index} book={book}/>
                    
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;