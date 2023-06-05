import React,{useState} from "react"

function Menu(){
    const [fundo,setFundo] = useState("black")

    const estilo = {
        backgroundColor: fundo,
        color: "white"

    }
    return(
        <div style={estilo}> 
            <p>Lojinha do Evertin<button className="btn btn-link ms-3 px-5" onClick={()=>setFundo(fundo == "black"?"#777":"black")}>Fundo</button></p>
        </div>
    )
}

export default Menu;