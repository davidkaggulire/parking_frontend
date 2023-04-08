import React from "react";
import { useMemo } from "react";
import { forwardRef, useEffect, useRef } from "react";
import { useTable } from "react-table";


const GeneralTable = (props: any) => {
  const columns = useMemo(() => props.columns, []);
  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // allColumns,
  } = useTable({
    columns,
    data,
    manualPagination: true,
    // initialState: {
    //   hiddenColumns: ["plate", "type", "model"],
    // },
  });


  return (
    <>
      {/* table start */}
      <table
        {...getTableProps()}
        className="table-auto w-full divide-y divide-gray-300"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="m-3 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="whitespace no-wrap divide-y divide-gray-200 bg-white"
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="text-center hover:cursor-pointer hover:bg-gray-50"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-4 pl-4 pr-3 text-md font-medium text-gray-500 sm:pl-6"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GeneralTable;