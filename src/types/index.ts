export interface Task {
    id: string;
    title: string;
    completed?: boolean;
}


export type SetTasksAction = React.Dispatch<React.SetStateAction<Task[]>>;
