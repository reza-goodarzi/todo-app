import { API_URL } from "../../config";
import { tasksActions } from "./tasks-slice";

export const getAllTasks = (token) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/tasks`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      dispatch(tasksActions.getTask(data));
    } catch (error) {
      dispatch(tasksActions.setError(error.message));
    }
  };
};
