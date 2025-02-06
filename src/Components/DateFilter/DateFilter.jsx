import React, { useReducer } from "react";
import { DatePicker, Select, theme } from "antd";
import "./DateFilter.css";

const initialState = {
  dateRange: [],
  select1: "lucy",
  select2: "lucy",
  searchText: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.payload };
    case "SET_SELECT1":
      return { ...state, select1: action.payload };
    case "SET_SELECT2":
      return { ...state, select2: action.payload };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const DateFilter = () => {
  const { token } = theme.useToken();
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handleSubmit = () => {
    console.log("Submitted Values:", state);
  };

  return (
    <div className="DateFilter-parent">
      <div className="datefilter-child">
        <div className="range-picker-parent">
          <label className="label-part-date-filter">
            Start Date To End Date
          </label>
          <DatePicker.RangePicker
            cellRender={cellRender}
            className="rangePicker"
            onChange={(dates) =>
              dispatch({ type: "SET_DATE_RANGE", payload: dates })
            }
          />
        </div>
        <div className="select-part-parent-filter">
          <label className="label-part-date-filter">
            Start Date To End Date
          </label>

          <Select
            defaultValue={state.select1}
            onChange={(value) =>
              dispatch({ type: "SET_SELECT1", payload: value })
            }
            className="select-part-report"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "Yiminghe" },
            ]}
          />
        </div>
        <div className="select-part-parent-filter">
          <label className="label-part-date-filter">
            Start Date To End Date
          </label>

          <Select
            defaultValue={state.select2}
            onChange={(value) =>
              dispatch({ type: "SET_SELECT2", payload: value })
            }
            className="select-part-report"
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "Yiminghe" },
            ]}
          />
        </div>
        <div className="search-input-field">
          <label className="label-part-date-filter"> Search here</label>
          <input
            type="text"
            placeholder="Search here"
            className="search-input-tag"
            value={state.searchText}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value })
            }
          />
        </div>
        <div className="button-submit-date-filter">
          <button className="submit-btn-filter" onClick={handleSubmit}>
            Go
          </button>
          <button
            className="submit-btn-filter"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
