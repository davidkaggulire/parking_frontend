import { toast } from "react-toastify";
import { getAllVehiclesURL } from "../utils/APIRoutes";
import { toastOptions } from "../utils/toastFile";
import { vehicleActions } from "./vehicleSlice";




export const postVehicleData = (
  vehicleData: any,
  url: any,
  navigate: any,
  setIsLoading: any,
  token: any
) => {
  return async (dispatch: any) => {
    const authCheck = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          driver_name: vehicleData.name,
          number_plate: vehicleData.plate,
          color: vehicleData.color,
          model: vehicleData.model,
          phone_number: vehicleData.phone,
          nin_number: vehicleData.ninnumber,
          gender: vehicleData.gender,
          car_type: vehicleData.type,
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
      } else if (authData.status === "error") {
        console.log(authData.messages.driver_name);
        toast.error("Input has wrong format", toastOptions);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        navigate("../vehicles", { replace: true });
      }
    } catch (error) {
      toast.error("Error posting vehicle", toastOptions);
      setIsLoading(false);
    }
  };
};

export const getVehicleHandler = (token: string, setLoading: any) => {
  return async (dispatch: any) => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(getAllVehiclesURL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const data = await getData();
      console.log(data.vehicles);

      if (data.status === "fail") {
        console.log("failed");
        toast.error(data.message, toastOptions);
        setLoading(false);
      }

      if (data.status === "success") {
        dispatch(
          vehicleActions.getVehicles({
            vehicleCount: data.meta.total_count,
          })
        );

        setLoading(false);
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
