import React, { useState } from "react";
import { Select } from "antd";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import { RiFileExcel2Line } from "react-icons/ri";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./TableTop.css";

const TableTop = ({ columns, data, showElements }) => {
  // const [showelements, setShowElements] = useState({});
  // CSV Headers
  const csvHeaders = columns.map((col) => ({
    label: col.title,
    key: col.dataIndex,
  }));

  // Handle Excel Export
  const handleExcelExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "ExportedData.xlsx");
  };

  // Handle PDF Export
  const handlePdfExport = () => {
    const doc = new jsPDF();
    doc.text("Exported Table Data", 14, 10);
    doc.autoTable({
      head: [columns.map((col) => col.title)],
      body: data.map((row) => columns.map((col) => row[col.dataIndex])),
    });
    doc.save("ExportedData.pdf");
  };



  return (
    <div className="TableTop-parent">
      <div className="left-part-table-top">
        {showElements.search && (
          <div className="input-search-tag-tabletop">
            <input type="text" placeholder="Search here..." />
          </div>
        )}
        {showElements.searchByClient && (
          <div className="input-search-tag-tabletop">
            <input type="text" placeholder="Search here by Client..." />
          </div>
        )}
        {showElements.select && (
          <div className="select-report-table-top">
            <Select
              placeholder="Account Statement"
              className="select-part-report-tabletop"
              options={[
                { label: "Account Statement", value: "account statement" },
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "Yiminghe" },
              ]}
            />
          </div>
        )}

        <div className="tabletop-exports">
          <FaFilePdf
            style={{
              fontSize: "25px",
              color: "red",
              cursor: "pointer",
            }}
            onClick={handlePdfExport}
          />
          <CSVLink
            data={data}
            headers={csvHeaders}
            filename={"ExportedData.csv"}
          >
            <BsFiletypeCsv
              style={{
                fontSize: "25px",
                color: "blue",
                cursor: "pointer",
              }}
            />
          </CSVLink>
          <RiFileExcel2Line
            style={{
              fontSize: "25px",
              color: "green",
              cursor: "pointer",
            }}
            onClick={handleExcelExport}
          />
        </div>
      </div>
      {showElements.buttons && (
        <div className="right-side-tabletop-part">
          <button>Add Client Account</button>
          <button>Inactive List</button>
        </div>
      )}
      {showElements.balanceTable && (
        <div className="balance-table-top-table">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <tbody className="table-body-balance-table">
              <tr>
                <td
                  style={{
                    borderRight: "1px solid gray",
                  }}
                >
                  Opening Balance
                </td>
                <td
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  99800.00
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    borderRight: "1px solid gray",
                  }}
                >
                  Closing Balance
                </td>
                <td
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  99800.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableTop;
