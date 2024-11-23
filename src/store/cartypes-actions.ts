import { toast } from "react-toastify";
import { toastOptions } from "../utils/toastFile";

export const postCarType = (
  carTypeData: any,
  url: any,
  navigate: any,
  setIsLoading: any,
  token: any
) => {
  return async () => {
    const authCheck = async () => {
      console.log(carTypeData);
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          type: carTypeData.type,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
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
      console.log(authData);

      if (authData.status === "fail") {
        toast.error(authData.message, toastOptions);

        setIsLoading(false);
      }
      else if (authData.status === "info") {
        console.log(authData.messages);
        toast.error("Car type already exists", toastOptions);
        setIsLoading(false);
      }
       else if (authData.status === "error") {
        console.log(authData.messages);
        toast.error("Value already exists", toastOptions);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        navigate("../cartypes", { replace: true });
      }
    } catch (error) {
      toast.error("Error posting service", toastOptions);
      setIsLoading(false);
    }
  };
};
