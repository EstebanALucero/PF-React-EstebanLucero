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
                <Categoria referencia="/category/Libro" categoria="Libros"/>
                <Categoria referencia="/category/Comic" categoria="Comics"/>
                <Categoria referencia="/category/Manga" categoria="Mangas"/>
            </ul></div>
            <CartWidget referencia="/cart"/>
        </div>
    )
}

export default Navbar