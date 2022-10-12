export const COLUMNS = [
  {
    Header: "Id.",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Name",
    accessor: "name",
    sticky: "left",
    Cell: (row) => {
      return <span>{row.row.original.driver_name}</span>;
    },
  },
  {
    Header: "Plate",
    accessor: "plate",
    sticky: "left",
    Cell: (row) => {
      return <div>{row.row.original.number_plate}</div>;
    },
  },
  {
    Header: "Type",
    accessor: "type",
    Cell: (row) => {
      return <span>{row.row.original.car_type}</span>;
    },
  },
  {
    Header: "Model",
    accessor: "model",
    Cell: (row) => {
      return <span>{row.row.original.model}</span>;
    },
  },
];
