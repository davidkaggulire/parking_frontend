import { Link } from "react-router-dom";

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
  {
    // width: 300,
    Header: "Action",
    Cell: ({ cell }) => (
      <Link to={`/vehicles/${cell.row.values.id}`}>
        <button
          value={cell.row.values.name}
          className="flex items-center justify-between bg-slate-500 py-2 px-2 w-fit border-0 font text-white text-md rounded-md transition ease-in-out delay-400 hover:bg-slate-600"
        >
          View
        </button>
      </Link>
    ),
  },
];
