import React from "react";
import GeneralTable from "../GeneralTable";
import { COLUMNS } from "./ChargeColumns";

const BodaChargesTable = (props) => {
  return <GeneralTable columns={COLUMNS} data={props.data} />;
};

export default BodaChargesTable;
