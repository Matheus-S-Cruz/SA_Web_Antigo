import React, { useEffect } from 'react';
import './App.css';
import {NavBar} from './components/NavBar';
import {Home} from './components/home';
import {Sante} from './components/sante';
import {Servicos} from './components/servicos';
import {Atividades} from './components/atividades';
import {Contato} from './components/contato';

function App() {

  useEffect(() => {
    document.title = 'Santé';

  }, []);

  return (
        <div>
      <NavBar/>
      <Home/>
      <br/>
      <Sante/>
      <br/>
      <Servicos/>
      <br/>
      <Atividades/>
      <Contato/>
    </div>
  );
}

export default App;
