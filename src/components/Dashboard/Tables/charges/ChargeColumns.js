const handleEdit = () => {};
const handleDelete = () => {};
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
    Cell: (row) => {
      return <span>{row.row.original.duration}</span>;
    },
  },
  {
    Header: "Charge",
    accessor: "charge",
    sticky: "left",
    Cell: (row) => {
      return <span>{row.row.original.charge}</span>;
    },
  },
  // {
  //   Header: "",
  //   Cell: (row) => (
  //     <div>
  //       <button onClick={() => handleEdit(row.row.original.charge)}>
  //         Edit
  //       </button>
  //       <button onClick={() => handleDelete(row.row.original.charge)}>
  //         Delete
  //       </button>
  //     </div>
  //   ),
  // },
];
