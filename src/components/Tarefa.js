"use client";
import { useTasks } from '../context/TasksContext';

export default function Tarefa({ dados }) {
  const { alternarStatus, removerTarefa } = useTasks();

  return (
    <div className={`tarefa-item ${dados.concluida ? 'concluida' : ''}`}>
      <div className="tarefa-info">
        <input 
          type="checkbox" 
          checked={dados.concluida} 
          onChange={() => alternarStatus(dados.id)} 
        />
        <span>{dados.texto}</span>
      </div>
      
      <button 
        onClick={() => removerTarefa(dados.id)} 
        className="btn-delete"
        title="Remover tarefa"
      >
        🗑️
      </button>
    </div>
  );
}

// conferir comit github
