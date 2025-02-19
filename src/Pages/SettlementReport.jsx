import React, { useState } from 'react'
import DateFilter from '../Components/DateFilter/DateFilter';
import TableTop from '../Components/TableTop/TableTop';
import DynamicTable from '../Components/Table/DynamicTable';

const SettlementReport = () => {
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
        title: "Credit",
        dataIndex: "credit",
        key: "credit",
      },
      {
        title: "Debit",
        dataIndex: "debit",
        key: "debit",
      },
      {
        title: "Closing",
        dataIndex: "closing",
        key: "closing",
        render: (text) => <span style={{ color: "green" }}>{text}</span>,
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "From → To",
        dataIndex: "fromTo",
        key: "fromTo",
      },
    ];
    const data= []
       const showElements = {
         search: false,
         searchByClient: true,
         select: false,
         balanceTable: false,
         buttons: false,
       };
        const showdateFilterElements = {
          datefilter: true,
          accountReport: true,
          selectReport: true,
          selectEvent: true,
          selectMarketType: false,
          selectMarket: false,
          search: true,
          inputFieldTO: false,
          inputFieldFrom: false,
        };
       
  return (
    <div className="client-page-parent">
      <div className="client-page-top">
        <h2 className="report-heading">
          Settlement/Balance Transaction Report
        </h2>
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
}

export default SettlementReport