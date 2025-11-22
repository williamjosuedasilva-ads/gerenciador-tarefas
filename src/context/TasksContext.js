"use client";
import { createContext, useState, useContext } from 'react';

// 1. Criamos o Contexto (o "canal" de comunicação)
const TasksContext = createContext();

// 2. Criamos o Provider (o componente que envolve a app e fornece os dados)
export function TasksProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState('todas'); // 'todas', 'concluidas', 'pendentes'

  // Adicionar Tarefa (Imutabilidade: cria novo array com o item novo)
  const adicionarTarefa = (texto) => {
    if (!texto.trim()) return;
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  // Alternar Status (Imutabilidade: map retorna um novo array alterado)
  const alternarStatus = (id) => {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  // Remover Tarefa
  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  // Lógica de Filtragem para enviar ao componente
  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'concluidas') return t.concluida;
    if (filtro === 'pendentes') return !t.concluida;
    return true; // 'todas'
  });

  return (
    <TasksContext.Provider value={{
      tarefas: tarefasFiltradas,
      adicionarTarefa,
      alternarStatus,
      removerTarefa,
      filtro,
      setFiltro,
      totalTarefas: tarefas.length
    }}>
      {children}
    </TasksContext.Provider>
  );
}

// 3. Hook personalizado para facilitar o uso
export function useTasks() {
  return useContext(TasksContext);
}

// conferir comit github
