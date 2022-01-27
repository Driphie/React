import {Button, Container, Form} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import  ChekoutDetail  from '../Checkout/ChekoutDetail';
import { useCart } from '../CartContext/CartContext';
import '../Checkout/check.css';


export const CheckOut=()=>{
    const [modalShow, setModalShow]=useState(false)
    const [button, setButton]=useState(true)
    const [userInfo, setUserInfo]=useState({
        name:"",
        email: "",
        cel: "",
    })
    const inputs=[
        {
            label: "Nombre",
            name: "name"
        },
        {
            label:"Email",
            name: "email"
        },
        {
            label:"Teléfono",
            name: "cel"
        }
    ]

    function handleChange(evt){
        setUserInfo({...userInfo,[evt.target.name]:evt.target.value});
    }

    const {createOrder}=useCart();
    const sendOrder =()=>{
        createOrder(userInfo)
        setModalShow(true);
    }

    useEffect(()=>{
        if((!isNaN(userInfo.cel))&&((userInfo.email).includes("@"))&&((userInfo.email).includes(".com"))){
            setButton(false);
        }if(userInfo.cel===''){
            setButton(true);
        }
    },[userInfo.cel, userInfo.email])

    return(
        <Container className="text-center">
            <h3 className='title'>Ingresá tus datos!</h3>
            <Form>
                {inputs.map((input)=>(
                        <Form.Group key={input.name} controlId="formBasicName ">
                            <Form.Label>{input.label}</Form.Label>
                             <input 
                                value={userInfo[input.name]}
                                type="text"
                                name={input.name}
                                onChange={handleChange}
                                size="50"
                            /> 
                        </Form.Group>
                    ))
                }
                <Button onClick={()=>sendOrder()} disabled={button} className='boton'>Confirmar</Button>
                </Form>
                <ChekoutDetail show={modalShow} onHide={()=>setModalShow(false)}/>               
        </Container>
    )

}
export default CheckOut


