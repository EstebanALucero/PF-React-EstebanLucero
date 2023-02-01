import "./Navbar.css"
import Categoria from "./categorias"
import CartWidget from "./cartWidget"

const Navbar = ()=> {
    return (
        <div className="navbar">
            <h1 style={ {color: "#F02624", fontFamily: "Ubuntu"} }>ReLoad</h1>
            <div><ul style={ {display: "flex", justifyContent: "space-around"} }>
                <Categoria referencia="#" categoria="Libros"/>
                <Categoria referencia="#" categoria="Comics"/>
                <Categoria referencia="#" categoria="Mangas"/>
            </ul></div>
            <CartWidget cantidad="11"/>
        </div>
    )
}

export default Navbar