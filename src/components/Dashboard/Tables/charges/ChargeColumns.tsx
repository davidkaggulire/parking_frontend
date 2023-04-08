const handleEdit = (val: any) => {};
const handleDelete = (val: any) => {};

type CellProps = {
  row: any;
};

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Duration",
    accessor: "duration",
    sticky: "left",
    Cell: ( row: any ) => {
      return <span>{row.row.original.duration}</span>;
    },
  },
  {
    Header: "Charge",
    accessor: "charge",
    sticky: "left",
    Cell: (row: any) => {
      console.log(row.row.original.charge)
      return <span>{row.row.original.charge}</span>;
    },
  },
  {
    Header: "AActions",
    accessor: "ids",
    Cell: (row: any) => (
      <div>
        <button onClick={() => handleEdit(row.row.original.charge)}>
          Edit
        </button>
        <button onClick={() => handleDelete(row.row.original.charge)}>
          Delete
        </button>
      </div>
    ),
  },
];
