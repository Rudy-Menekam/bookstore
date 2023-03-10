import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddBooks = () => {
  const { Books } = useSelector((state) => state.Book);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSubmit = (e) => {
    const itemId = `item${Books.length + 1}`;
    e.preventDefault();
    dispatch(addBook({ item_id: itemId, title, author }));
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Book title"
          className="book-title"
          onChange={handleTitle}
          value={title}
        />
        <input
          type="text"
          placeholder="Author"
          className="category"
          onChange={handleAuthor}
          value={author}
        />
        <input type="submit" value="Add Book" className="button" onClick={handleSubmit} />
      </form>
    </>
  );
};
export default AddBooks;
