"use client";
import { useTasks } from '../context/TasksContext';
import Tarefa from './Tarefa';

export default function ListaDeTarefas() {
  const { tarefas } = useTasks();

  if (tarefas.length === 0) {
    return <p className="sem-tarefas">Nenhuma tarefa encontrada neste filtro.</p>;
  }

  return (
    <div className="lista-container">
      {tarefas.map((tarefa) => (
        <Tarefa key={tarefa.id} dados={tarefa} />
      ))}
    </div>
  );
}

// conferir comit github
