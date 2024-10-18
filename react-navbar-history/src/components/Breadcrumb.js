import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();

  // Include the root path and break the current path into parts
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbPaths = [""]; // Start with the root path

  // Build the full paths
  pathnames.forEach((part) => {
    breadcrumbPaths.push(part);
  });

  const abbreviationMap = {
    home: "H",
    about: "A",
    contact: "C",
    something: "S",
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {/* Home breadcrumb */}
        {/* <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li> */}

        {/* Map through the pathnames and create breadcrumbs */}
        {breadcrumbPaths.map((value, index) => {
          console.log("this is route breadcrumbPaths", breadcrumbPaths);
          const to = `/${breadcrumbPaths.slice(1, index + 1).join("/")}`;
          const isLast = index === breadcrumbPaths.length - 1;
          const abbreviation = abbreviationMap[value] || value.charAt(0).toUpperCase();

          return (
            <li className="breadcrumb-item" key={to}>
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
