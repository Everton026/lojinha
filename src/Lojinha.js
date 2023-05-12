import React, {useState} from "react";

function Lojinha(props){

    const [valor, setValor] = useState(0)
    const [item, setItem] = useState(0)
    

    function FinalizaCompra(){
        setValor(0)
        setItem(0)
        alert('Compra Finalizada!')
    }

    function Itens(preco){
        setItem(item+1)
        setValor(valor+preco)
    }
    return(

        <div>
            <button onClick={()=>props.setLogin(false)}>Deslogar</button>
            <h1> Lojinha</h1>
            <p>Itens no Carrinho: {item}</p>
            <p>Valor Total: R$ {valor}</p>
            <button onClick={()=>FinalizaCompra()}>Finalizar Compra</button>
            <hr/>           
            <p>
                Camisa Polo - R$ 79,90
                <button onClick={()=>Itens(79.90)}>Compra</button>
            </p>

            <p>
                Calça Jeans - R$ 120,00 
                <button onClick={()=>Itens(120.00)}>Compra</button>
            </p>            
            <p>
                Tênis Nike - R$ 110,99  
                <button onClick={()=>Itens(110.99)}>Compra</button>
            </p>
        </div>

    )
}
export default Lojinha;