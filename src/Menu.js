import React,{useState} from "react"

function Menu(){
    const [fundo,setFundo] = useState("black")

    const estilo = {
        backgroundColor: fundo,
        color: "white"

    }
    return(
        <div style={estilo}> 
            <p>Lojinha do Evertin<button onClick={()=>setFundo(fundo == "black"?"#777":"black")}>Fundo</button></p>
        </div>
    )
}

export default Menu;