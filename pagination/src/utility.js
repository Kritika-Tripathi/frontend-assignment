export const tableHeadings = ["S.No.", "Percentage funded", "Amount pledged"];

export const ITEMS_PER_PAGE = 5;
export const GET_URL = "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"

export const getInitialPage = (queryString) => {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get(queryString)) || 1;
};
