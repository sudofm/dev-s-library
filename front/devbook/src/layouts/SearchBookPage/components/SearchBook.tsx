import { Link } from "react-router-dom";
import Book from "../../../models/Book";

export const SearchBook: React.FC<{ book: Book }> = (props) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-O">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {props.book.img ? (
              <img src={props.book.img} width="123" height="196" alt="Livre" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv-2-code-1000.png")}
                width="123"
                height="196"
                alt="Livre"
              />
            )}
          </div>
          <div className="d-lg-none d-flex justify-content-center align-items-center">
            {props.book.img ? (
              <img src={props.book.img} width="123" height="196" alt="Livre" />
            ) : (
              <img
                src={require("../../../Images/BooksImages/book-luv-2-code-1000.png")}
                width="123"
                height="196"
                alt="Livre"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.book.author}</h5>
            <h4>{props.book.title}</h4>
            <p className="card-text">{props.book.descritption}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Link className="btn btn-md main-color text-white" to={`/checkout/${props.book.id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
