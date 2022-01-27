import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  console.log(itemId)

  const [itemDetail, setItemDetail] = useState(null);
  useEffect(() => {
    
    const db = getFirestore();

    const itemsCollection = doc(db, "items", itemId);
    getDoc(itemsCollection).then((snapshot) => {
      if (snapshot.exists()) {
        setItemDetail(snapshot.data());
      }
    });
  }, [itemId]);
  return <div className="container-articles">{itemDetail ? <ItemDetail item={itemDetail} /> : <Loader />}</div>;
};

export default ItemDetailContainer;

