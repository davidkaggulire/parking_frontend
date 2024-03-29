import React from "react";
import { COLUMNS } from "../../../utils/columns";
import GeneralTable from "./GeneralTable";


const VehicleTable = (props: any) => {
  return <GeneralTable columns={COLUMNS} data={props.data}/>;
};

export default VehicleTable;
