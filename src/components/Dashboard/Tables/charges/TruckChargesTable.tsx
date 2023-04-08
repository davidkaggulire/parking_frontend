import React from "react";
import GeneralTable from "../GeneralTable";
import { COLUMNS } from "./ChargeColumns";

const TruckChargesTable = (props: any) => {
  return <GeneralTable columns={COLUMNS} data={props.data} />;
};

export default TruckChargesTable;
