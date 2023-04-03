import React from "react";
import { useMemo } from "react";
import { forwardRef, useEffect, useRef } from "react";
import { useTable } from "react-table";

import { useReactTable, createColumnHelper } from '@tanstack/react-table'

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.group({
    id: "tv-show",
    header: "TV Show",
    columns: [
      columnHelper.accessor("show.name", {
        header: () => "Name",
      }),
      columnHelper.accessor("show.type", {
        header: () => "Type",
      }),
    ],
  }),
  columnHelper.group({
    header: "Details",
    columns: [
      columnHelper.accessor("show.language", {
        header: () => "Language",
      }),
      columnHelper.accessor("show.genres", {
        header: () => "Genre(s)",
      }),
    ],
    // . . .
  }),
];


const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <div className="flex flex-row justify-center items-center">
      <label>
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span>All</span>
      </label>
    </div>
  );
});

const GeneralTable = (props) => {
  const columns = useMemo(() => props.columns, []);
  const data = useMemo(() => props.data, [props.data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      initialState: {
        hiddenColumns: ["plate", "type", "model"]
      }
    }
  );

  return (
    <>
    <div className="flex flex-row gap-5 p-2">
        <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
        </div>
        {/* Loop through columns data to create checkbox */}
        {allColumns.map((column) => (
          <div className="flex flex-row justify-between items-center" key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              <span>{column.Header}</span>
            </label>
          </div>
        ))}
        <br />
      </div>
      {/* table start */}
      <table
        {...getTableProps()}
        className="w-full table-auto border-[#0000000f]  text-lightBlack"
      >
        <thead className="border-black bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="pt-2 pb-1 border border-gray-100">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="text-center hover:cursor-pointer hover:bg-gray-50"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="p-4 ">
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
