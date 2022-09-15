//Aqui eu vou fazer outra forma de exportar diferente do Banner.js
//Lá eu fiz com a função, aqui vou fazer uma constante e uma arrow function e exportar a constante
//Não tem certo ou errado, é só o estilo do código
//props é uma propriedade/parâmetro que eu vou passar e poderia ser qualquer nome, mas todo mundo usa esse

import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label> 
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto

// o props.label é um objeto e tem que vir dentro de chaves senao ele entederia como um texto
//onChange = a cada letra que o usuario digitar, eu vou executar uma função
//Tem que atribuir o value no input pra fechar o ciclo de vida, ou seja, ta ligando o value dos dois lados.
//Estado do componente: se o estado for alterado, o componente precisa ser renderizado novamente. 
//Em vez de termos o valor de let, nós chamaremos um hook.
//Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função. 
//O hook que vamos usar aqui é o useState. 
//Sempre que encontrarem um o use, saibam que é um hook. O React já importa ele direto.

//Tirei tudo para passar para o value = {props.valor}