import "./Navbar.css"
import Categoria from "./categorias"
import CartWidget from "./cartWidget"

import { Link } from "react-router-dom"

const Navbar = ()=> {
    return (
        <div className="navbar">
            <Link to="/"><h1 style={ {color: "#F02624", fontFamily: "Ubuntu"} }>ReLoad</h1></Link>
            <div><ul style={ {display: "flex", justifyContent: "space-around"} }>
                <Categoria referencia="/" categoria="Todos"/>
                <Categoria categoria="Libros"/>
                <Categoria categoria="Comics"/>
                <Categoria categoria="Mangas"/>
            </ul></div>
            <CartWidget cantidad="11"/>
        </div>
    )
}

export default Navbar