//import "./components/Loader/Loader.css";
import loading from '../Loader/loading.gif';

const Loader = () => {
    return (
        <>
            <div>
                <img src={loading} className="loaderImag" alt="Cargando..."></img>
            </div>
        </>
    )
}

export default Loader