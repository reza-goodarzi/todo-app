import { API_URL } from "../config";
import { userActions } from "./user-slice";

export const fetchLogin = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      dispatch(
        userActions.addEnteredUser({
          user: data.user,
          token: data.token,
        })
      );
    } catch (error) {
      console.log(error.message);
      dispatch(userActions.getError(error.message));
    }
  };
};
