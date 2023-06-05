import React, {useState} from "react";
import Lojinha from "./Lojinha";
import Menu from "./Menu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [login,setLogin] = useState(false)   

    return (
        <div>

        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />

            <Menu/>
            <div className="container">
            {
                login == false ?
                    <>
                        <p>Faça login para continuar</p>
                        <button className="btn btn-danger ms-3 px-5" onClick={()=>setLogin(true)}>Logar</button> 
                    </>
                    :    
                        <Lojinha setLogin={setLogin}/>
            }
            </div>
                
        </div>
        
        );
}

export default App;
