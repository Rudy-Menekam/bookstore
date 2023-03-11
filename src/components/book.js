import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const {
    title,
    item_id,
    author,
    category,
  } = book;
  const dispatch = useDispatch();
  return (
    <>
      <div className="para">
        <div className="info">
          <span className="School-of">
            {category}
          </span>
          <span className="Title">
            {title}
          </span>
          <span className="Name">
            {author}
          </span>
          <ul className="info-links">
            <li>
              <a href="/#">
                <button
                  type="button"
                  onClick={() => {
                    dispatch(removeBook(item_id));
                  }}
                  value="Remove"
                >
                  Remove
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="oval">
            <span className="Percent-Complete">
              64%
            </span>
            <span className="Completed">
              Completed
            </span>
          </div>
        </div>
        <div className="Line-1" />
        <div className="book-info">
          <span className="Current-Chapter">
            Current Chapter
          </span>
          <span className="Current-Lesson">
            Chapter 17
          </span>
          <div className="Rectangle-2">
            <span className="update-progress">
              Update progress
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
export default Book;
