export interface Task {
    id: string;
    title: string;
}


export type SetTasksAction = React.Dispatch<React.SetStateAction<Task[]>>;
