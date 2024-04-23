import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Projeto de Tarefas!</h1>
      <p>Aqui você pode gerenciar suas tarefas de forma eficiente.</p>
      <div>
        <Link to="/" title='Home'><button>Home</button></Link>
        <Link to="/sobre" title='Sobre'><button>Sobre</button></Link>
        <Link to="/contato" title='Contato'><button>Contato</button></Link>
        <Link to="/tarefas" title='Tarefas'><button>Tarefas</button></Link>
      </div>
    </div>
  );
};

export default Home;