import { Link } from "react-router-dom"

const Categoria = (props)=> {
    return (
        <li>
            <h3>
                <Link to={props.referencia} className="categorias">{props.categoria}</Link>
            </h3>
        </li>
    )
}

export default Categoria