import { Link } from "react-router-dom"
import Book from "../../models/Book"

export const CheckoutAndReviewBox : React.FC<{book: Book | undefined, mobile: boolean}> = (props) => {
    return (
        <div className={props.mobile ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className='card-body container'>
                <div className="mt-3">
                    <p>
                        <b>0/5 </b> livres empruntés
                    </p>
                    <hr/>
                    { props.book && props.book.copiesAvailable && props.book.copiesAvailable > 0 ? 
                        <h4 className="text-success">
                             Disponible
                        </h4>
                        :
                        <h4 className="text-danger">
                             Liste d'attente
                        </h4>
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.book?.copies} </b>
                            copies
                        </p>
                        <p className="col-6 lead">
                            <b>{props.book?.copiesAvailable} </b>
                            disponible
                        </p>
                    </div>
                </div>
                <Link to='#' className="btn btn-success btn-lg">S'inscrire</Link>
                <hr/>
                <p className="mt-3">
                    Ce nombre peut varier jusqu'a la finalisation de la commande
                </p>
                <p>
                    Inscris toi pour laisser un commentaire
                </p>
            </div>
        </div>
    )
}