import './Banner.css'

function Banner (){

    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo" />
        </header>
        
    );
}

export default Banner


//Vou chamar e importar essa função pro arquivo App.js
//Isso é JSX, ou seja, como o React lê e transforma em elementos no DOM. Parece HTML, mas não é.
//Isso em JS tradicional seria como document.createElement('img')
    