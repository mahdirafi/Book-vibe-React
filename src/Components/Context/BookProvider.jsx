import React, { createContext, useState } from 'react';
import { getAllReadListFromLocalDB, addReadListToLocalDB } from '/src/Util/localDB';  
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readList, setReadList] = useState(() => getAllReadListFromLocalDB());
  const [wishList, setWishList] = useState(() => getAllReadListFromLocalDB());

  const handleMarkAsRead = (currentBook) => {

  //  addReadListToLocalDB(currentBook);


    const isExistBooks = readList.find(book => book.bookId === currentBook.bookId);

    if (isExistBooks) {
      toast.warning("The book is Already Exist!");
       
    } else {
      setReadList([...readList, currentBook]);
      
      toast.success(`${currentBook.bookName} is added to the Read list!`)
    }
    console.log(currentBook, readList, "books");
  };
  const handleWishList= (currentBook) => {

    const isExistInReadList = readList.find( (book) => book.bookId === currentBook.bookId);
      if(isExistInReadList){
        toast.error("This book is already in Read List!")
        return;
      }


    const isExistBooks = wishList.find(book => book.bookId === currentBook.bookId);
 
    if (isExistBooks) {
      toast.warning("The book is Already Exist!");
       
    } else {
      setWishList([...readList, currentBook]);
      
      toast.success(`${currentBook.bookName} is added to the wishList!`)
    }
    console.log(currentBook, wishList, "books");
  };

  const data = {
    readList, setReadList, handleMarkAsRead,
    wishList, setWishList, handleWishList,
  };

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
