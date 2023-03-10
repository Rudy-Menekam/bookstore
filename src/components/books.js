import React from 'react';
import { useSelector } from 'react-redux';
import AddBooks from './addBook';
import Book from './book';

const Books = () => {
  const { Books } = useSelector((state) => state.Book);
  return (
    <div>
      <div>
        {Books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
        ;
      </div>
      <div className="Line" />
      <span className="form-Title">
        ADD NEW BOOK
      </span>
      <AddBooks />
    </div>
  );
};
export default Books;
