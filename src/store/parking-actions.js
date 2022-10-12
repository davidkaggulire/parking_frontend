import { toast } from "react-toastify";
import { toastOptions } from "../utils/toastFile";

export const postParkingPayment = (
  serviceData,
  url,
  navigate,
  setIsLoading,
  token
) => {
  return async () => {
    const authCheck = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          vehicle_id: serviceData.service,
          charge_id: serviceData.fee,
        }),
        headers: {
          "Authorization": `Bearer ${token}`,
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
      }else if(authData.status === "error"){
        console.log(authData.messages.driver_name);
        toast.error("Input has wrong format", toastOptions)
        setIsLoading(false);
      } 
      else {
        setIsLoading(false);
        navigate("../clinic", { replace: true });
      }
    } catch (error) {
      toast.error("Error posting service", toastOptions);
      setIsLoading(false)
    }
  };
};
