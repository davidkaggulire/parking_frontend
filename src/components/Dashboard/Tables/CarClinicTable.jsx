import React from "react";
import GeneralTable from "./GeneralTable";

const COLUMNS = [
    {
      Header: "Id.",
      accessor: "id",
      disableFilters: true,
      sticky: "left",
    },
    {
      Header: "Service",
      accessor: "service",
      sticky: "left",
      Cell: (row) => {
        return <span>{row.row.original.service}</span>;
      },
    },
    {
      Header: "Fee",
      accessor: "fee",
      sticky: "left",
      Cell: (row) => {
        return <div>{row.row.original.fee}</div>;
      },
    },
  ];
  


const CarClinicTable = (props) => {
    return <GeneralTable columns={COLUMNS} data={props.data}/>;
};

export default CarClinicTable;
