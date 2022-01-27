import ItemCount from '../ItemCount/ItemCount';
import { useCart } from  '../CartContext/CartContext';
import { Container } from '@material-ui/core';
import '../ItemDetail/itemdetail.css';

export const ItemDetail =({item})=>{
    const {addItem}=useCart()

    const onAdd=(counter)=>{
        let quantity=counter;
       
        if(quantity>0){
            console.log("cart")
            addItem(item, quantity)
            return;
        }else{
            return({
                title:"Ups...",
                text:"No agregaste productos 😥",
                icon:"warning",
                button:"X"
            })
        }
    }

    return(
        <Container>
        <div>
             <div>
                <Container>
                    <h3 className='title'>{item.name}</h3>
                    <img className='image' src={item.image}></img>
                    <h4 className='price'>Precio: ${item.price}</h4>                    
                    <h5 className="description">Descripción del producto: {item.description} </h5>
                    <p className="itemDescription">{item.desc}</p>
                    <br/>
                    <Container className="text-center">
                        <div className="pb-2 pt-3">
                            <div>
                                <span className="itemStock">Stock disponible: {item.stock}</span>
                                <ItemCount initial={0} stock={item.stock}  onAdd={onAdd} className="itemStock"/>                   
                            </div>
                        </div>
                            
                    </Container>
                </Container>
            </div>
        </div>
        
    </Container>
    )
   
};
export default ItemDetail
