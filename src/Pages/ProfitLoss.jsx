import React, { useState } from "react";
import DateFilter from "../Components/DateFilter/DateFilter";
import TableTop from "../Components/TableTop/TableTop";
import DynamicTable from "../Components/Table/DynamicTable";

const ProfitLoss = () => {

    const [pagination, setPagination] = useState({
      current: 1,
      pageSize: 10,
      total: 0,
    });

    const handleTableChange = (pagination) => {
      setPagination({
        ...pagination,
        current: pagination.current,
        pageSize: pagination.pageSize,
      });
    };
  const showElements = {
    search: false,
    searchByClient: false,
    select: false,
    balanceTable: false,
    buttons: false,
  };
  const showdateFilterElements = {
    datefilter: true,
    accountReport: false,
    selectReport: false,
    selectEvent: false,
    selectMarketType: false,
    selectMarket: false,
    search: true,
    inputFieldTO: false,
    inputFieldFrom: false,
  };

  const columns = [
    {
      title: "Sport",
      dataIndex: "sport",
      key: "sport",
    },
    {
      title: "Market Name",
      dataIndex: "marketName",
      key: "marketName",
    },
    {
      title: "P&L",
      dataIndex: "pl",
      key: "pl",
    },
    {
      title: "Commission",
      dataIndex: "commission",
      key: "commission",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  const data = [];
  return (
    <div className="client-page-parent">
      <div className="client-page-top">
        <h2 className="report-heading">Profit & Loss</h2>
        <DateFilter showdateFilterElements={showdateFilterElements} />
        <TableTop columns={columns} data={data} showElements={showElements} />
        <DynamicTable
          columns={columns}
          DataSource={data}
          pagination={pagination}
          handleTableChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default ProfitLoss;
