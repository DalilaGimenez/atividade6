// pages/Tarefas.jsx

import React from 'react';
import { Link } from 'react-router-dom';


const Tarefas = () => {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        <ol>
        <li>Criar página de Home para o projeto em React</li>
        <li>Criar página de Contato para o projeto em React, com o formulário 'CustomInput'</li>
        <li>Criar página de Sobre comentando quem desenvolveu o projeto</li>
        <li>Criar página de Tarefas, para listar uma série de tarefas sobre o projeto</li>
        <li>Configurar as rotas com react-router-dom</li>
        <li>Estilizar componentes usando CSS</li>
        <li>Implementar funcionalidades de gerenciamento de tarefas</li>
        </ol>
      </ul>
      <div>
        <Link to="/" title='Home'><button>Home</button></Link>
        <Link to="/sobre" title='Sobre'><button>Sobre</button></Link>
        <Link to="/contato" title='Contato'><button>Contato</button></Link>
        <Link to="/tarefas" title='Tarefas'><button>Tarefas</button></Link>
      </div>
    </div>
  );
};

export default Tarefas;