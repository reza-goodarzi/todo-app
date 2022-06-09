import { API_URL, TOKEN } from "../../config";
import { tasksActions } from "./tasks-slice";

export const getAllTasks = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      dispatch(tasksActions.getTasks(data));
    } catch (error) {
      dispatch(tasksActions.setError(error.message));
    }
  };
};

export const createNewTask = (description) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        },
        body: JSON.stringify({
          description,
          completed: false,
        }),
      });

      const data = await res.json();

      console.log(data);
      console.log(res.ok);

      if (!res.ok) {
        throw new Error(data.error);
      }

      dispatch(tasksActions.addNewTask(data));
    } catch (error) {
      dispatch(tasksActions.setError(error.message));
    }
  };
};
