import React, {useState} from "react";
import { toast } from "react-toastify";

function Lojinha(props){

    const [valor, setValor] = useState(0)
    const [item, setItem] = useState(0)
    

    function FinalizaCompra(){
        setValor(0)
        setItem(0)
        toast("Compra Finalizada Com Sucesso 🐼")
    }

    function Itens(preco){
        setItem(item+1)
        setValor(valor+preco)
    }
    return(

        <div>
            <button className="btn btn-danger ms-3 px-5" onClick={()=>props.setLogin(false)}>Sair</button>
            <h1> Lojinha</h1>
            <p>Itens no Carrinho: <span className="badge bg-success">{item}</span></p>
            <p className="alert alert-success">Valor Total: R$ {valor}</p>
            <button className="btn btn-warning ms-3 px-5" onClick={()=>FinalizaCompra()}>Finalizar Compra</button>
            <hr/>       

            <div className="d-flex flex-row justify-content-around">
                
                <div class="card">
                    <img src="https://via.placeholder.com/250" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Camisa Polo</h5>
                        <p class="card-text">R$ 70,90</p>
                        <button class="btn btn-dark">Comprar</button>
                    </div>
                </div>

                <div class="card">
                    <img src="https://via.placeholder.com/250" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Calça Jeans</h5>
                        <p class="card-text">R$ 120,00</p>
                        <button class="btn btn-dark">Comprar</button>
                    </div>
                </div>

                <div class="card">
                    <img src="https://via.placeholder.com/250" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">Tênis Nike</h5>
                        <p class="card-text">R$ 110,99</p>
                        <button class="btn btn-dark">Comprar</button>
                    </div>
                </div>

            </div>
            {/* <ul className="list-group d-flex flex-row justify-content-between">

                <li className="list-group-item">
                    <p>
                        Camisa Polo - R$ 79,90
                        <button className="btn btn-info ms-3 px-5" onClick={()=>Itens(79.90)}>Compra</button>
                    </p>
                </li>

                <li className="list-group-item">
                    <p>
                        Calça Jeans - R$ 120,00 
                        <button className="btn btn-info ms-3 px-5" onClick={()=>Itens(120.00)}>Compra</button>
                    </p>            
                </li>

                <li className="list-group-item">
                    <p>
                        Tênis Nike - R$ 110,99  
                        <button className="btn btn-info ms-3 px-5" onClick={()=>Itens(110.99)}>Compra</button>
                    </p>
                </li>

            </ul> */}

        </div>
    )
}
export default Lojinha;