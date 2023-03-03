// import pic from './image/percent.png';

const Books = () => (
  <div>
    <div className="para">
      <div className="info">
        <span className="School-of">
          Action
        </span>
        <span className="Title">
          The Hunger Games
        </span>
        <span className="Name">
          Suzanne Collins
        </span>

        <ul className="info-links">
          <li>
            <a href="/#">Comment</a>
          </li>
          <div className="Line-2" />
          <li>
            <a href="/#">Remove</a>
          </li>
          <div className="Line-2" />
          <li>
            <a href="/#">Edit</a>
          </li>
        </ul>
      </div>
      <div>
        {/* <img src={pic} alt="percent" /> */}
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
    <div className="para">
      <div className="info">
        <span className="School-of">
          Action
        </span>
        <span className="Title">
          Dune
        </span>
        <span className="Name">
          Frank Herbert
        </span>

        <ul className="info-links">
          <li>
            <a href="/#">Comment</a>
          </li>
          <div className="Line-2" />
          <li>
            <a href="/#">Remove</a>
          </li>
          <div className="Line-2" />
          <li>
            <a href="/#">Edit</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="oval">
          <span className="Percent-Complete">
            8%
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
          Chapter 3: *Lesson Learned*
        </span>
        <div className="Rectangle-2">
          <span className="update-progress">
            Update progress
          </span>
        </div>
      </div>
    </div>
    <div className="para">
      <div className="info">
        <span className="School-of">
          Action
        </span>
        <span className="Title">
          Capital in the Twenty-First Century
        </span>
        <span className="Name">
          Suzanne Collins
        </span>

        <ul className="info-links">
          <li>
            <a href="/#">Comment</a>
          </li>
          <div className="Line-2" />
          <li>
            <a href="/#">Remove</a>
          </li>
          <div className="Line-2" />
          <li>
            <a href="/#">Edit</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="oval">
          <span className="Percent-Complete">
            0%
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
          Introduction
        </span>
        <div className="Rectangle-2">
          <span className="update-progress">
            Update progress
          </span>
        </div>
      </div>
    </div>
    <div className="Line" />
    <span className="form-Title">
      ADD NEW BOOK
    </span>
    <form>
      <input type="text" name="Book title" className="book-title" />
      <select className="category">
        <option value="1">Category</option>
        <option value="2">2</option>
      </select>
      <input type="submit" value="Add Book" className="button" />
    </form>
  </div>
);
export default Books;
