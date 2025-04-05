import { create } from 'zustand';

// Tipo da Task (igual ao que você já usa)
type Task = {
    id: string;
    title: string;
    completed: boolean;
};

// Tipo do Store (estado + ações)
type TaskStore = {
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
};

// Criação do Store
export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [], // Estado inicial vazio

    // Ação: Adicionar uma nova task
    addTask: (title: string) =>
        set((state) => ({
            tasks: [
                ...state.tasks,
                { id: Date.now().toString(), title, completed: false },
            ],
        })),

    // Ação: Marcar/desmarcar como concluída
    toggleTask: (id: string) =>
        set((state) => ({
            tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            ),
        })),

    // Ação: Remover uma task
    removeTask: (id: string) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        })),
}));