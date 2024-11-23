import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState(props.data)
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    console.log(data.length)
    if(data.length === 0) {
      setNoData(true)
    }
  }, [data, noData])
  
  return <>
  <GeneralTable columns={COLUMNS} data={props.data} />
  {noData && <div className="p-4 ">No data available</div>}
  </>;
};

export default CarTypesTable;
