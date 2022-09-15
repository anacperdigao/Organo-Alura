import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem}/>)}    
            </div>
        </section>
    )
}

export default Time


//props.colaboradores.length > 0 &&  
// Esse codigo de cima é como se fosse o if
//Poderia ser feito com o operador ternário e ficaria assim:
/*
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome = {colaborador.nome} cargo = {colaborador.cargo} imagem = {colaborador.imagem}/>)}    
            </div>
        </section>
        : ""

*/