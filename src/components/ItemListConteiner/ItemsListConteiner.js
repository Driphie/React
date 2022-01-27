import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  console.log(categoryId)

  return (
    <>
      <h1 className="greeting">{greeting} {categoryId}</h1>
      <ItemList category={categoryId} />;
    </>
  )
};

export default ItemListContainer;