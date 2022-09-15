import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='Lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value = ""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}

export default ListaSuspensa

//Aqui o metodo map vai percorrer minha lista suspensa e me retornar a lista que eu quero das opções.
//Então diferente do forEach, o map percorre o array mas modifica ele.
//A key utilizada foi solicitada pelo proprio react que diz que o ideal é ter uma chave para cada item da lista.
//E para a key eu to usando o mesmo nome do proprio item da lista.