import React from "react";
import { Link } from "react-router-dom";
import '../Item/item.css';

const Item = ({ pictureUrl, title, price, id, stock }) => {
    return (
        <>
            <div className="items">
                <Link to={`/item/${id}`} className="itemLinks">
                    <h3 className="Title">{title}</h3>
                    <img src={pictureUrl} alt="Foto" className="imag" />                    
                    <h4 className="itemPrice">${price}</h4>
                    <button className="btnVer">Ver más!</button>
                    { stock > 1 ? <p className="stock">Quedan {stock} en stock!</p> : <p className="instock">Sin stock!</p>
                    }
                </Link>
            </div>
        </>
    )
}

export default Item;


