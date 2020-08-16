import React from "react";
import useGetPageTitle from "./hooks/useGetPageTitile";

function NotFound() {
  useGetPageTitle("Page Not found");
  return (
    <div className="mp">
      <h3>not found</h3>
    </div>
  );
}

export default NotFound;
