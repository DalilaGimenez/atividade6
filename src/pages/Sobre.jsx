// pages/Sobre.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Sobre = () => {
  return (
    <div>
      <h1>Sobre o Projeto</h1>
      <p>Este projeto foi desenvolvido por Dalila Gimenez como parte de uma atividade das aulas de Programação Web.</p>
      <p>Ministrada na Faculdade de Tecnologia de Indaiatuba - FATEC-ID</p>
      <div>
        <Link to="/" title='Home'><button>Home</button></Link>
        <Link to="/sobre" title='Sobre'><button>Sobre</button></Link>
        <Link to="/contato" title='Contato'><button>Contato</button></Link>
        <Link to="/tarefas" title='Tarefas'><button>Tarefas</button></Link>
      </div>
    </div>
  );
};

export default Sobre;