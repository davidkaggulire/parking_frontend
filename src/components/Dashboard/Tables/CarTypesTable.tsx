import React from "react";
import GeneralTable from "./GeneralTable";


const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Type",
    accessor: "type",
    sticky: "left",
    // Cell: (row: any) => {
    //   return <span>{row.row.original.type}</span>;
    // },
  },
];

const CarTypesTable = (props: any) => {
  return <GeneralTable columns={COLUMNS} data={props.data} />;
};

export default CarTypesTable;
