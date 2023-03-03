import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <>
    <div className="para">
      <div className="info">
        <span className="School-of">
          Action
        </span>
        <span className="Title">
          {title}
        </span>
        <span className="Name">
          {author}
        </span>

        <ul className="info-links">
          <li>
            <a href="/#">Remove</a>
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

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
