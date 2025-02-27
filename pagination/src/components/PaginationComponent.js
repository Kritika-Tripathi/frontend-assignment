import { useEffect, useState } from "react";
import {
  ITEMS_PER_PAGE,
  getInitialPage,
  tableHeadings,
  GET_URL,
} from "../utility";
import prevButton from "../assets/prevButton.svg";
import nextButon from "../assets/nextButton.svg";

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(getInitialPage("page"));

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const fetchData = () => {
    const url = GET_URL;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getPaginationNumbers = () => {
    let pages = [];

    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 4) {
        startPage = 2;
        endPage = 5;
      } else if (currentPage >= totalPages - 3) {
        startPage = totalPages - 4;
        endPage = totalPages - 1;
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.history.pushState({}, "", `?page=${currentPage}`);
  }, [currentPage]);

  return (
    <>
      <div className="main-container">
        <h1 className="header">Details of the highly-rated kickstarter projects</h1>
        <table>
          <thead>
            <tr>
              {tableHeadings.map((heading) => (
                <th key={heading} className="padding-16 font-bold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => {
              const {
                "s.no": serialNumber,
                "percentage.funded": percentageFunded,
                "amt.pledged": amtPledged,
              } = item;
              return (
                <tr key={serialNumber}>
                  <td className="padding-16">{serialNumber}</td>
                  <td className="padding-16">{percentageFunded}</td>
                  <td className="padding-16">{amtPledged}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination-div">
        <button
          aria-label="Prev Page"
          className={`pages-button ${
            currentPage === 1 ? "cursor-pointer-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrevPage}
          cursor-pointer={currentPage === 1}
        >
          <img src={prevButton} alt="Prev Button" />
        </button>
        {getPaginationNumbers().map((page, index) =>
          typeof page === "number" ? (
            <button
              key={page}
              aria-label={`Page ${page}`}
              onClick={() => setCurrentPage(page)}
              className={`pages-button cursor-pointer ${
                currentPage === page ? "active-page" : "non-active-page"
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={`ellipsis-${index}`}>{page}</span>
          )
        )}
        <button
          aria-label="Next Page"
          className={`pages-button ${
            currentPage === totalPages
              ? "cursor-pointer-not-allowed"
              : "cursor-pointer"
          }
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <img src={nextButon} alt="Next Button" />
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
