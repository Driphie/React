import { useCart } from "../CartContext/CartContext"
import { Col, Card, Row, Button } from "react-bootstrap"
import '../Cart/cart.css';

export const CartRow=({item})=>{
    const {deleteItem}=useCart()
    return(
        <Row className="text-center pt-2">
            <Col className="columna imag">
                <Card style={{ width: '7rem' }} className="bg-Col">
                <div>
                    <img className="imag" src={item.image}></img>
                </div>                    
                </Card>
            </Col>
            <Col className="columna">
                <p >{item.name}</p>
                <div className="divs">
                    <span>{item.description}</span>
                </div>
                
            </Col>
            <Col className="columna">
                <p className="cantidad">Cantidad en el carrito:</p>
                <span className="quantity">{item.quantity}</span>
            </Col>
            <Col className="columna">
                <p>Precio: <b>${item.quantity*item.price}</b></p>
                <div className="divs">
                    <span>Cantidad: {item.quantity}</span>
                   
                    <span>Precio de unidad:{item.price}</span>
                </div>
            </Col>
            <Col className="delete">
                <p className="deleteProduct">Eliminar del carrito</p>
                <Button variant="danger" className="cruz" onClick={()=>{deleteItem(item.name)}}>❌</Button>
            </Col>
        </Row>
    )
}
export default CartRow