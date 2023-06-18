import React from "react";
import { loginGoogle } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginGoogle = async() => {
      await dispatch(loginGoogle());
      navigate('/')
  }

  return (
    <>
      <div>NotFound</div>

      <button type="button" onClick={() => handleLoginGoogle()}>
        Entrar con Goole
      </button>
    </>
  );
}

export default NotFound;
