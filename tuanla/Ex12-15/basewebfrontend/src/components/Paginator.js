import React, { useState, useEffect } from "react";
import { IconButton, Typography, Tooltip } from "@material-ui/core";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import { MdFirstPage, MdLastPage } from "react-icons/md";

function Paginator({ onClickPage, totalPages, noPages }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPage, setListPage] = useState([1]);

  const onClickFirstPageButton = () => {
    if (listPage[0] !== 1) {
      generateListPage(1);
    }
  };

  const onClickNavBeforeButton = () => {
    generateListPage(listPage[0] - noPages);
  };

  const onClickNavNextButton = () => {
    generateListPage(listPage[listPage.length - 1] + 1);
  };

  const onClickLastPageButton = () => {
    let remainder = totalPages % noPages;

    if (remainder) {
      generateListPage(totalPages - remainder + 1);
    } else {
      generateListPage(totalPages - noPages + 1);
    }
  };

  const generateListPage = (fromPage) => {
    let pages = [];

    for (let i = fromPage; i < fromPage + noPages; i++) {
      if (i <= totalPages) {
        pages.push(i);
      } else break;
    }

    setListPage(pages);
  };

  useEffect(() => {
    generateListPage(1);
  }, []);

  useEffect(() => {
    if (totalPages > listPage[listPage.length - 1]) {
      if (listPage.length < noPages) {
        generateListPage(listPage[0]);
      }
    } else if (totalPages < listPage[0]) {
      onClickLastPageButton();
      if (currentPage > totalPages) setCurrentPage(0);
    } else {
      generateListPage(listPage[0]);
      if (currentPage > totalPages) setCurrentPage(0);
    }
  }, [totalPages]);

  return (
    <div>
      <Tooltip title="Trang đầu">
        <IconButton color="primary" onClick={onClickFirstPageButton}>
          <MdFirstPage />
        </IconButton>
      </Tooltip>
      <IconButton
        color="primary"
        disabled={listPage[0] === 1}
        onClick={onClickNavBeforeButton}
      >
        <RiArrowLeftCircleLine />
      </IconButton>
      {listPage.map((page) => (
        <IconButton
          key={page}
          value={page}
          color={page === currentPage ? "secondary" : "default"}
          onClick={(e) => {
            let newCurrentPage = Number(e.currentTarget.value);
            if (newCurrentPage !== currentPage) {
              setCurrentPage(newCurrentPage);
              onClickPage(newCurrentPage);
            }
          }}
          style={{
            height: 48,
            width: 48,
          }}
        >
          <Typography variant="subtitle1">{page}</Typography>
        </IconButton>
      ))}
      <IconButton
        color="primary"
        disabled={listPage[listPage.length - 1] === totalPages}
        onClick={onClickNavNextButton}
      >
        <RiArrowRightCircleLine />
      </IconButton>
      <Tooltip title="Trang cuối">
        <IconButton color="primary" onClick={onClickLastPageButton}>
          <MdLastPage />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Paginator;
