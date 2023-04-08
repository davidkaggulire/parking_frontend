import { toast } from "react-toastify";
import { toastOptions } from "../utils/toastFile";

// export type ChargeHandler = {
//   url: string;
//   page: number;
//   token: string;
//   setLoading: any;
//   setData: any;
//   setTotalData: any;
// };

export const getChargesHandler = async (
  url: any,
  page: any,
  token: any,
  setLoading: any,
  setData: any,
  setTotalData: any,
) => {
  setLoading(true);
  const response = await fetch(url + `?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response);

  const data = await response.json();
  console.log(data);
  console.log(data.charges);

  if (data.status === "fail") {
    console.log("failed");
    toast.error(data.message, toastOptions);
    setLoading(false);
  }

  if (data.status === "success") {
    setData(data.charges);
    setTotalData(data.meta.total_count);
    console.log(data.meta.total_count);
    setLoading(false);
    console.log("success");
  }
};

export type PostType = {
  chargeData: any;
  url: any;
  navigate: any;
  setIsLoading: any;
  token: any;
};

export const postCharge = ({
  chargeData,
  url,
  navigate,
  setIsLoading,
  token,
}: PostType) => {
  return async () => {
    const authCheck = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          duration: chargeData.duration,
          charge: chargeData.charge,
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
        console.log(authData.messages);
        toast.error("Value already exists", toastOptions);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        navigate("../charges", { replace: true });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error posting service", toastOptions);
      setIsLoading(false);
    }
  };
};
