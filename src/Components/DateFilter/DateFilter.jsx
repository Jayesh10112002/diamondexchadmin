import React from "react";
import { DatePicker, theme, Select } from "antd";
import "./DateFilter.css";

const DateFilter = () => {
  const { token } = theme.useToken();

  const style = {
    backgroundColor: token.colorPrimary,
    color: "#fff",
    borderRadius: "50%",
  };

  const cellRender = (current, info) => {
    if (info.type !== "date") {
      return info.originNode;
    }

    return (
      <div
        className="ant-picker-cell-inner"
        style={current.date() === 1 ? style : {}}
      >
        {current.date()}
      </div>
    );
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="DateFilter-parent">
      <div className="datefilter-child">
        <DatePicker.RangePicker
          cellRender={cellRender}
          className="rangePicker"
        />
        <Select
          prefix="User"
          defaultValue="lucy"
          onChange={handleChange}
          className="select-part-report"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
        <Select
          prefix="User"
          defaultValue="lucy"
          onChange={handleChange}
          className="select-part-report"
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
        <div className="search-input-field">
          <input
            type="text"
            placeholder="Search here"
            className="search-input-tag"
          />
        </div>

        <div className="button-submit-date-filter">
          <button className="submit-btn-filter">Go</button>
          <button className="submit-btn-filter">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
