import './App.css';
import "./reset.css";
import img1 from "./img/Circle.png"
import { useState } from 'react';
function App() {
    let [modal,setModal] = useState(false);
    return (
        <div className="App">
                    {
                        modal == true ? <Modal ></Modal> : null 
                    }
            <nav className='navbar'>
                <div className="logo">
                    <img src={img1} alt="logo"/>
                    <a href="#" className='logo_title'>MinJaeKK</a>
                </div>
                <div className='ham-trigge'>
                    <i class="fa-solid fa-list-ul" onClick={() => {
                        modal == false ? setModal(true) : setModal(false)
                    }}></i>
                </div>
            </nav>

        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <div className="log">
                <button className='login'>로그인</button>
                <button className='sing_up'>회원가입</button>
            </div>
            <ul>
                <li>남자 옷</li>
                <li>여자 옷</li>
                <li>공용 옷</li>
            </ul>
        </div>
    )
}

export default App;
