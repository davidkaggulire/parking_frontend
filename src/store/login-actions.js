import { loginActions } from "./loginSlice";
// import sendVerificationEmail from "./sendEmailVerification";

import { toast } from "react-toastify";

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const postAuthData = (inputData, url, navigate, setIsLoading) => {
  return async (dispatch) => {
    const authCheck = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: inputData.email,
          password: inputData.password,
          name: inputData.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //   if (!response.ok) {
      //     throw new Error("Authentication failed");
      //   }

      const data = await response.json();

      return data;
    };

    try {
      const authData = await authCheck();
      console.log(authData.status);

      if (authData.status === "fail") {
        console.log(authData);
        dispatch(
          loginActions.login({
            token: "",
            expirationTime: 0,
          })
        );

        toast.error(authData.message.code, toastOptions);

        setIsLoading(false);
      } else {
        const expirationTime = new Date(
          new Date().getTime() + +authData.expiresIn * 1000
        );
        console.log(authData);

        dispatch(
          loginActions.login({
            token: authData.idToken,
            expirationTime: expirationTime.toISOString(),
            displayName: authData.displayName,
            email: authData.email
          })
        );

        toast.success("Sent email verification link", toastOptions);

        setIsLoading(false);

        navigate("../dashboard", { replace: true });
      }
    } catch (error) {
      console.log(error);
      dispatch(
        loginActions.login({
          isLoggedIn: false,
          token: "",
        })
      );

      toast.error("error", toastOptions);
    }
  };
};

export const postLoginData = (inputData, url, navigate, setIsLoading) => {
  return async (dispatch) => {
    const authCheck = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: inputData.email,
          password: inputData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //   if (!response.ok) {
      //     throw new Error("Authentication failed");
      //   }

      const data = await response.json();

      return data;
    };

    try {
      const authData = await authCheck();
      console.log(authData.status);

      if (authData.status === "fail") {
        console.log(authData);
        dispatch(
          loginActions.login({
            token: "",
            expirationTime: 0,
          })
        );

        toast.error(authData.message, toastOptions);

        setIsLoading(false);
      } else {
        const expirationTime = new Date(
          new Date().getTime() + +authData.expiresIn * 1000
        );
        console.log(authData);

        dispatch(
          loginActions.login({
            token: authData.auth_token,
            expirationTime: expirationTime.toISOString(),
            email: authData.email,
          })
        );

        navigate("../dashboard", { replace: true });
      }
    } catch (error) {
      console.log(error);
      dispatch(
        loginActions.login({
          isLoggedIn: false,
          token: "",
        })
      );

      toast.error("Error logging in", toastOptions);
    }
  };
};
