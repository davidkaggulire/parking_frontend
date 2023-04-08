import { loginActions } from "./loginSlice";
// import sendVerificationEmail from "./sendEmailVerification";

import { toast } from "react-toastify";

export type AuthType = {
  inputData: {
    email: string;
    password: string;
    name: string;
  };
  url: string;
  navigate: any;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const toastOptions: any = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const postAuthData = ({
  inputData,
  url,
  navigate,
  setIsLoading,
}: AuthType) => {
  return async (dispatch: any) => {
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
            email: authData.email,
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

export const postLoginData = (
  inputData: any,
  url: any,
  navigate: any,
  setIsLoading: any
) => {
  return async (dispatch: any) => {
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
      console.log(data);

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
    } catch (error: any) {
      console.log(error);
      dispatch(
        loginActions.login({
          isLoggedIn: false,
          token: "",
        })
      );
      // toast.error('net::ERR_CONNECTION_REFUSED', toastOptions);
      if(error.message === 'Failed to fetch'){
        toast.error(error.message, toastOptions);
      }
      else{
        toast.error('net::ERR_CONNECTION_REFUSED', toastOptions);
      }
      
      setIsLoading(false);
    }
  };
};
