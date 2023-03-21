import api from "./api";
import { ITask } from "@/types/task";

const tasks = {
    getTasks(): Promise<ITask[]> {
        return api.get(`/task`);
    },
    getTask(id: number | null): Promise<ITask> {
        return api.get(`/task/${id}`);
    },
};

export default tasks;
