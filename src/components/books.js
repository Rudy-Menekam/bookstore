import AddBooks from './addBook';
import Book from './book';

const Books = () => (
  <div>
    <Book title="The Hunger Games" author=" Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <div className="Line" />
    <span className="form-Title">
      ADD NEW BOOK
    </span>
    <AddBooks />
  </div>
);
export default Books;
