// import  Item  from "../Item/Item";
// import { Container } from "@material-ui/core";



// export function ItemList({items}){
//     return(
//         <Container>
//             {items? items.map(item=><Item item={item} key={item.id}/>):<spinner animation="border" role="status" variant="info"><span className="visually-hidden">Loading...</span></spinner>}
//         </Container>
//     )
// } 

// export default ItemList

import { useState, useEffect } from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection } from "firebase/firestore";

const ItemList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [userDetails, setUserDetails] = useState("")

  useEffect(() => {
    const db = getFirestore();
    getDocs(collection(db, "items")).then((snapshot) => {
      let items = snapshot.docs.map((doc) => doc.data());

      if (category) {
        items = items.filter((product) => product.category === category);
        setProducts(items);
      } else {
        setProducts(items);
      }
    });
  }, [category]);
  return (
    <>
      <section className="container-articles">
        {products.length ? products.map((producto) => <Item pictureUrl={producto.image} title={producto.name} price={producto.price} id={producto.id} stock={producto.stock} />) : <Loader />}
      </section>
    </>
  );
};

export default ItemList;