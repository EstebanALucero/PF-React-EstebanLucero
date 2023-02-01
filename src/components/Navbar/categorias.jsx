const Categoria = (props)=> {
    return (
        <li><h3><a className="categorias" href={props.referencia}>{props.categoria}</a></h3></li>
    )
}

export default Categoria