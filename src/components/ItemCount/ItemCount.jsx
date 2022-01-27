import { useState } from 'react';
import swal from 'sweetalert';
import '../ItemCount/counter.css';



const ItemCount = ({initial, stock, onAdd}) =>{

    const [counterItem, setCounterItem] = useState(1);
    

    const itemAdd = () => {
            if(stock === 0){
            swal({
                title: 'No hay stock disponible',
                icon: 'error'
            });
            setCounterItem(0);
        }else{
            if(counterItem < stock){
                setCounterItem(counterItem + 1);
            }else{
                swal({
                    text: 'No puedes superar el stock disponible',
                    icon: 'warning'
                });
            }
        }
    }

    const itemRemove = () => {
        if(stock === 0){
        swal({
            title: 'No hay stock disponible',
            icon: 'error'
        });
        setCounterItem(0);
        }else{
        if(counterItem > 1){
            setCounterItem(counterItem - 1);
        }else{
                swal({
                    text: 'No puede añadir menos de 1 producto',
                    icon: 'info'
                });
            }
        }
    } 

    // const onAdd = () =>{
    //     props.stock > 0 ? props.cartAdd(counterItem) : props.cartAdd(0);
    // }

    return (
        <div className="conteiner">
           
            {
                stock > 0 
                ?
                <>
                    <div className="conteiner">
                        <button onClick={itemRemove} className="boton">-</button>                
                        <div className="stock">
                            <span>{counterItem}</span>
                        </div>
                        <button onClick={itemAdd} className="boton">+</button>
                    </div>
                    <div>
                        <button className='boton' onClick= {()=> {onAdd (counterItem); setCounterItem (0)}}>Agregar al Carrito 🛒</button>
                    </div>
                </>
                :
                <p className="noStock">Sin stock 😟</p>
            }
        </div>
    )
}

export default ItemCount;