import { API_URL, TOKEN } from "../config";
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
      dispatch(userActions.getError(error.message));
    }
  };
};

export const fetchSignup = ({ name, email, password, age }) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          age,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (
          data.error.startsWith(
            "E11000 duplicate key error collection: todo.users index: email_1 dup key:"
          )
        ) {
          throw new Error("Already exists an account registered with this email address.");
        } else {
          throw new Error(data.error);
        }
      }

      dispatch(
        userActions.addEnteredUser({
          user: data.user,
          token: data.token,
        })
      );
    } catch (error) {
      dispatch(userActions.getError(error.message));
    }
  };
};

export const getCurrentLoginUser = (token) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/users/me`, {
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
      console.log({ data });

      dispatch(userActions.getUser(data));
    } catch (error) {
      dispatch(userActions.getError(error.message));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${API_URL}/users/logout`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      dispatch(userActions.cleanup());
    } catch (error) {
      dispatch(userActions.getError(error.message));
    }
  };
};
