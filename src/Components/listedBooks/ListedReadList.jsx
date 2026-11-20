import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../Context/BookProvider';
import BookCard from '../UI/BookCard'
 

 
const ListedReadList = ({sortingType}) => {

    const {readList} = useContext(BookContext);
    console.log(readList, "BookContext");

    const [filteredReadList, setFilteredReadList] = useState(readList);

    useEffect(() => {
        if(sortingType){
            if(sortingType === "Pages"){
                const sortData = [...readList].sort(
                    (a,b) => a.totalPages - b.totalPages , );
                    console.log(sortData);
                    setFilteredReadList(sortData); 
                    
            } else if(sortingType === "Rating"){
                const sortData = [...readList].sort(
                    (a,b) => a.rating - b.rating , );
                     setFilteredReadList(sortData); 
                    console.log(sortData);
            }
        }
    }, [sortingType , readList] )

    if(filteredReadList.length === 0){
        return <div className='h-[50vh] bg-gray-50 flex justify-center items-center'>
            <h2 className='font-bold text-3xl'>No Read List Data Found!</h2>
         </div>
    }
     
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-2'>
             {
             filteredReadList.map((book,index) =>(
                 <BookCard key={index} book={book} /> 
                ))
             }
            </div>
        </div>
    );
};

export default ListedReadList;