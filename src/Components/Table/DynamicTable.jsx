import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./DynamicTable.css";
// import { fetchData } from "../../api/ClientFunction";

const DynamicTable = ({
  columns,
  handleTableChange,
  pagination,
  DataSource,
}) => {
  // const [loading, setLoading] = useState(false);
  // const [historyData, setHistoryData] = useState([]);

  return (
    <div className="custom-scrollbar">
      <Table
        columns={columns}
        dataSource={DataSource}
        // loading={loading}
        pagination={{
          currentPage: pagination?.current,
          pageSize: pagination?.pageSize,
          total: pagination?.total,
          showSizeChanger: true,
          pageSizeOptions: ["10", "50", "100", "500", "1000"],
        }}
        onChange={handleTableChange}
        // rowKey={(record) => record._id}
        scroll={{ x: true }}
        className="custom-table"
      />
    </div>
  );
};

export default DynamicTable;
