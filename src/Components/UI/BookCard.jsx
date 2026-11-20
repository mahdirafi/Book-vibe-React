import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
 

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} 
        className="card bg-zinc-100 shadow-sm my-8 border border-zinc-300">

                <figure className=''>
                    <img
                    src={book.image}
                    alt= {book.bookName} 
                    className='rounded-xl h-65'
                    />
                    </figure>

                    <div className='m-2'>
                          <div className="card-body ">
                    <div className="flex justify-between items-center ">

                        {book.tags.map((tag,index) => <div key={index} className="badge text-green-500 bg-green-200 font-bold text-lg">
                            {tag}</div> 
                        )}
                    </div>
                    <h2 className="card-title"> {book.bookName}  </h2>
                    <h4>{book.author}</h4>
                </div>


                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4  ">
                        <div className="font-semibold">{book.category}</div>
                        <div className="font-semibold flex gap-2 items-center">{book.rating}   <Star /> </div>
                    </div>
                    </div>


                </Link>
    );
};

export default BookCard;