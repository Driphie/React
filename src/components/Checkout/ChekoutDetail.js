import {Modal, Button} from 'react-bootstrap'
import { useCart } from '../CartContext/CartContext';
import { NavLink } from 'react-router-dom';
import '../Checkout/check.css';
export const ChekoutDetail=(props)=> {
    const {orderId}=useCart();
    return (
      <Modal className="container"
        {...props} size="lg"aria-labelledby="contained-modal-title-vcenter"centered>
        <Modal.Header>
          <Modal.Title id="container">
            La compra se realizo con exito!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Estamos procesando tu pedido! Tu código de seguimiento es: </p> 
          <p>{orderId}</p>
          <p>Muchas gracias!💖</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}><NavLink to ="/" className="boton">Finalizar</NavLink></Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ChekoutDetail