import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../redux/books/booksSlice';
import AddBooks from './addBook';
import Book from './book';

const Books = () => {
  const { Books } = useSelector((state) => state.Book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

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
