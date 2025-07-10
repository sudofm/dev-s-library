import { useEffect, useState } from "react";
import Book from "../../models/Book";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

export const BookCheckoutPage = () => {
  const [book, setBook] = useState<Book>();
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const bookId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
      const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

      const responses = await fetch(baseUrl);
      if (!responses.ok) {
        throw new Error("Une erreur est survenue");
      }

      const responseJson = await responses.json();

      const loadedBook: Book = {
        id: responseJson.id,
        title: responseJson.title,
        author: responseJson.author,
        descritption: responseJson.description,
        copies: responseJson.copies,
        copiesAvailable: responseJson.copiesAvailable,
        category: responseJson.category,
        img: responseJson.img,
      };

      setBook(loadedBook);
      setIsLoading(false);
    };
    fetchBook().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    console.log("loading....");
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="container d-none d-lg-block">
        <div className="row mt-5">
          <div className="col-sm-2 col-md-2">
            {book?.img ? (
              <img src={book?.img} width="226" height={349} alt="Livre" />
            ) : (
              <img
                src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
                width="226"
                height={349}
                alt="Livre"
              />
            )}
          </div>
          <div className="col-4 col-md-4 container">
            <div className="ml-2">
              <h2>{book?.title}</h2>
              <h5 className="text-primary">{book?.author}</h5>
              <p className="lead">{book?.descritption}</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container d-lg-none mt-5">
        <div className="d-flex justify-content-center align-items-center">
          {book?.img ? (
            <img src={book?.img} width="226" height={349} alt="Livre" />
          ) : (
            <img
              src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
              width="226"
              height={349}
              alt="Livre"
            />
          )}
        </div>
        <div className="mt-4">
            <div className="ml-2">
                <h2>{book?.title}</h2>
                <h5 className="text-primary">{book?.author}</h5>
              <p className="lead">{book?.descritption}</p>
             </div>
        </div>
        <hr/>
      </div>
    </div>
  );
};
