import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

const AddBooks = () => {
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
    const item_id = uuidv4();// eslint-disable-line
    e.preventDefault();
    dispatch(addBook({
      item_id,// eslint-disable-line
      title,
      author,
      category: 'Fiction',
    }));
    setAuthor('');
    setTitle('');
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
        <button type="submit" value="Add Book" className="button" onClick={handleSubmit}>Add Book</button>
      </form>
    </>
  );
};
export default AddBooks;
