import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Components/Context/BookProvider';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { useLoaderData, useParams } from 'react-router-dom';

// const booksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {
    // const  {id} = useParams();
    const  {bookId:bookParamsId} = useParams();
    // console.log("bookParamsID" , bookParamsId);

    //  const books = use(booksPromise);
    const books = useLoaderData();
    // console.log('books', books);

    const expectedBooks = books.find((book) => book.bookId === Number(bookParamsId));
    // console.log(expectedBooks);

    const { 
      bookId, 
      bookName, 
      author, 
      image, 
      review, 
      totalPages, 
      rating, 
      category, 
      tags, 
      publisher,
      yearOfPublishing,
    } = expectedBooks;

    const {handleMarkAsRead , handleWishList} = useContext(BookContext);
    console.log('handleMarkAsRead', handleMarkAsRead);

    

    
    return (
        <div className="grid grid-cols-2 card lg:card-side shadow-sm container mx-auto my-12 gap-3">
            
            <figure className='bg-gray-200 rounded-xl'>
              <img 
                src={image} 
                alt={bookName}  
                className="w-[300px] h-[500px] object-cover rounded-lg"
            />
            </figure>
            
            <div className="card-body bg-gray-100 rounded-xl shadow-xl">
              <h2 className="card-title text-2xl">{bookName}</h2>
              <h2 className="card-title border-y border-gray-400 py-2">By:{author}</h2>
              <p className=''>{category}</p>
              <p className=''> <span className='font-bold'>Review</span>:{review}</p>
              <div className="flex  items-center my-9">

                        {tags.map((tag,index) => <div key={index} className="badge text-green-500 bg-green-200 font-bold text-lg">
                            {tag}</div> 
                        )}
                    </div>

               <div className="border-t border-gray-400 ">

                <div className='flex items-center gap-5 mt-4 '>
                  <span className='text-zinc-700 text-md'>Number of pages: </span> <span>{totalPages}</span>
                </div>
                <div className='flex items-center gap-19'>
                  <span className='text-zinc-700 text-md'>Publisher:</span> <span>{publisher}</span>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='text-zinc-700 text-md'>Year of Publishing:</span> <span>{yearOfPublishing}</span>
                </div>
                <div className='flex items-center gap-23'>
                  <span className='text-zinc-700 text-md'>Rating:</span> <span>{rating}</span>
                </div>
                
                <div className='my-5 flex gap-4'>

                  <button className="btn font-bold" onClick={ () => handleMarkAsRead(expectedBooks)} > Add To Read </button>
                  <button className="btn bg-blue-500 text-white font-bold" 
                  onClick={ () => handleWishList(expectedBooks)}>Mark As Wishlist</button>
                </div>
              </div>         
            </div>
      </div>
    );
};

export default BookDetails;