import './Botao.css'

const Botao = (props) => {
    return(
        <button className='botao'>{props.children}</button>

    )
}

export default Botao

//Poderia usar o {props.texto} mas aí no index do formulario ficaria assim: <Botao texto = "Criar card"/>
//É melhor usar o props.children pq posso usar imagem, icones, etc, e nao só o texto