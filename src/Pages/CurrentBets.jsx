import React, { useState } from "react";
import DateFilter from "../Components/DateFilter/DateFilter";
import TableTop from "../Components/TableTop/TableTop";
import DynamicTable from "../Components/Table/DynamicTable";

const CurrentBets = () => {
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
  const columns = [
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      key: "dateTime",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Competition",
      dataIndex: "competition",
      key: "competition",
    },
    {
      title: "Event",
      dataIndex: "event",
      key: "event",
    },
    {
      title: "Market",
      dataIndex: "market",
      key: "market",
    },
    {
      title: "Runner",
      dataIndex: "runner",
      key: "runner",
    },
    {
      title: "Side",
      dataIndex: "side",
      key: "side",
    },
    {
      title: "Line",
      dataIndex: "line",
      key: "line",
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "PP",
      dataIndex: "pp",
      key: "pp",
    },
    {
      title: "PL",
      dataIndex: "pl",
      key: "pl",
    },
    {
      title: "Client IP",
      dataIndex: "clientIp",
      key: "clientIp",
    },
  ];
  const data = [];
  const showElements = {
    search: true,
    searchByClient: false,
    select: false,
    balanceTable: false,
    buttons: false,
  };
   const showdateFilterElements = {
     datefilter: true,
     accountReport: true,
     selectReport: true,
     selectEvent: true,
     selectMarketType: true,
     selectMarket: true,
     search: true,
     inputFieldTO: false,
     inputFieldFrom: false,
   };

  return (
    <div className="client-page-parent">
      <div className="client-page-top">
        <h2 className="report-heading">Current Bets</h2>
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

export default CurrentBets;
