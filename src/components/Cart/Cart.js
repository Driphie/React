import { Button, Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"
import { CartRow } from "../Cart/CartRow";
import { SearchProduct } from "../Search/SearchProduct";
import '../Cart/cart.css';
import { Col, Row } from "react-bootstrap"


export const Cart=()=>{
    const {cartContent, finalPrice, clear}=useCart();
    
    return(
    <>
        <Container className="pt-3">
            <h1  className="text-center">Carrito de compras 🛒</h1>
            {cartContent ? cartContent.map(item=><CartRow item={item}/>):<SearchProduct/>}
            <br/>
            {cartContent.length>0?<Row>
                <Col xs lg="9">
                        <h4 className="price">TOTAL: ${finalPrice(cartContent)}</h4>
                </Col>
                <Col>
                    <Button variant="success"><NavLink to="/Checkout" className="comprar">Comprar✔️</NavLink></Button>
                    <Button variant="danger" onClick={clear} className="vaciar">Vaciar carrito</Button>

                </Col>
                
            </Row>:<SearchProduct/>}
            
        </Container> 
    </>
    )
}
export default Cart