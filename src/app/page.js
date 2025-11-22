"use client";
import { useState } from 'react';
import { TasksProvider, useTasks } from '../context/TasksContext';
import ListaDeTarefas from '../components/ListaDeTarefas';
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';

// Componente interno para controlar o Input e Filtros
// (Precisa estar dentro do Provider para acessar o contexto)
function ConteudoApp() {
  const [novoTexto, setNovoTexto] = useState('');
  const { adicionarTarefa, filtro, setFiltro } = useTasks();

  const handleAdicionar = () => {
    adicionarTarefa(novoTexto);
    setNovoTexto(''); // Limpa o input
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdicionar();
  };

  return (
    <div className="card-principal">
      <header>
        <h1>Gerenciador de Tarefas</h1>
      </header>

      {/* Área de Input */}
      <div className="input-group">
        <input 
          type="text" 
          placeholder="O que precisa ser feito?" 
          value={novoTexto}
          onChange={(e) => setNovoTexto(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdicionar}>Adicionar</button>
      </div>

      {/* Botões de Filtro */}
      <div className="filtros">
        <button 
          className={filtro === 'todas' ? 'ativo' : ''} 
          onClick={() => setFiltro('todas')}
        >
          Todas
        </button>
        <button 
          className={filtro === 'pendentes' ? 'ativo' : ''} 
          onClick={() => setFiltro('pendentes')}
        >
          Pendentes
        </button>
        <button 
          className={filtro === 'concluidas' ? 'ativo' : ''} 
          onClick={() => setFiltro('concluidas')}
        >
          Concluídas
        </button>
      </div>

      {/* Lista */}
      <ListaDeTarefas />
    </div>
  );
}

// Componente Raiz da Página
export default function Home() {
  return (
    <main className="app-container">
      {/* O Provider envolve tudo para dar acesso ao Estado Global */}
      <TasksProvider>
        <div className="conteudo-wrapper"> {/* <-- A caixa invisível */}
            <Cabecalho /> {/* O topo */}
            <ConteudoApp /> {/* O Card do Gerenciador */}
            <Rodape /> {/* O Rodapé novo */}
        </div>
      </TasksProvider>
    </main>
  );
}

// conferir comit github
