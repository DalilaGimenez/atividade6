// pages/Contato.jsx

import React from 'react';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';


const Contato = () => {
  return (
    <div>
      <h1>Entre em Contato</h1>
      <form className="form-container">
        <div className="form-group">
          <label className='label'>Nome:</label>
          <CustomInput type="text" placeholderText="Digite seu nome" />
        </div>

        <div className="form-group">
          <label className='label'>Email:</label>
          <CustomInput type="email" placeholderText="Digite seu email" />
        </div>

        <div className="form-group">
          <label className='label'>Telefone:</label>
          <CustomInput type="tel" placeholderText="Digite seu telefone" />
        </div>

        <button className='button-enviar' type="submit">Enviar</button>
      </form>
      <div>
        <Link to="/" title='Home'><button>Home</button></Link>
        <Link to="/sobre" title='Sobre'><button>Sobre</button></Link>
        <Link to="/contato" title='Contato'><button>Contato</button></Link>
        <Link to="/tarefas" title='Tarefas'><button>Tarefas</button></Link>
      </div>
    </div>
  );
};

export default Contato;