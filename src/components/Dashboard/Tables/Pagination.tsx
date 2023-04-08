import React, { SetStateAction } from "react";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  // pageChangeHandler: (val: any) => {};
  pageChangeHandler: React.Dispatch<SetStateAction<number>>;
  totalRows: number;
  rowsPerPage: number;
};


const Pagination = ({ pageChangeHandler, totalRows, rowsPerPage }: Props) => {
  console.log(totalRows);
  console.log(rowsPerPage);
  console.log(typeof rowsPerPage);
  // Calculating max number of pages
  const noOfPages = Math.ceil(totalRows / rowsPerPage);

  // Creating an array with length equal to no.of pages
  const pagesArr = [...new Array(noOfPages)];

  const [currentPage, setCurrentPage] = useState(1);
  const onNextPage = () => setCurrentPage(currentPage + 1);
  const onPrevPage = () => setCurrentPage(currentPage - 1);
  const onPageSelect = (pageNo: number) => setCurrentPage(pageNo);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  useEffect(() => {
    pageChangeHandler(currentPage);
  }, [currentPage]);

  //   useEffect(() => {
  //     const skipFactor = (currentPage - 1) * rowsPerPage;
  //     pageChangeHandler(skipFactor);
  //   }, [currentPage]);

  useEffect(() => {
    if (noOfPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);

  return (
    <>
      {noOfPages > 1 ? (
        <div>
          <div className="flex flex-row justify-center">
            <button
              className=" text-lg border border-gray-200  text-gray-400 pl-2 pr-2 pt-1 pb-1 flex items-center hover:text-blue-500  hover:border-blue-500"
              onClick={onPrevPage}
              disabled={!canGoBack}
            >
              <IoIosArrowBack />Previous
            </button>
            {pagesArr.map((num, index) => (
              <button
                onClick={() => onPageSelect(index + 1)}
                className={`text-xl pl-2 pr-2 border border-gray-200 flex items-center text-blue-500 hover:text-white hover:bg-blue-500  hover:border-blue-500  ${
                  index + 1 === currentPage
                    ? `text-blue-500 border border-blue-500`
                    : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="border text-gray-400 border-gray-200 text-lg pl-2 pr-2 pt-1 pb-1 flex items-center hover:text-blue-500  hover:border-blue-500"
              onClick={onNextPage}
              disabled={!canGoNext}
            >
              Next<IoIosArrowForward />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
