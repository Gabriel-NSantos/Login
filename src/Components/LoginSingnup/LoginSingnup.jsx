import React, { useState } from 'react'
import './LoginSingnup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSingnup = () => {

  const[action,setAction] = useState("Login")

  return (
    <div className='container'> 
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Nome' />
        </div>}
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email"  placeholder='Email'/>
        </div>
        <div className='input'>    
            <img src={password_icon} alt="" />
            <input type="password"  placeholder="Senha"/>
        </div>
      </div>
      {action==="Cadastrar-se"?<div></div>: <div className="forgot-password">Esqueceu a senha?  <span>Click aqui!</span></div>}
      <div className="submit-conteiner">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Cadastrar-se")}}>Cadastrar-se</div>
        <div className={action==="Cadastrar-se"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default LoginSingnup
