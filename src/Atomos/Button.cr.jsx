import React from "react";
import { useNavigate } from "react-router-dom";
function ButtoncrX() {
  const navigate=useNavigate();
  const handlerClick=()=>{
    navigate("crearCuenta");
  }
  return (
    <div>
    <p className="register">¿No tienes cuenta?</p>
      <p>
        <a onClick={()=>handlerClick()} className="link">
          Registrate aquí
        </a>
      </p>
      
    </div>
  );
}

export default ButtoncrX;
