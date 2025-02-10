import React, { useState } from "react";
import DynamicTable from "../Components/Table/DynamicTable";
import DateFilter from "../Components/DateFilter/DateFilter";
import TableTop from "../Components/TableTop/TableTop";
import "../Style/Client.css";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal } from "antd";
import { RxCross2 } from "react-icons/rx";

const Clients = () => {
  const [isDcModalVisible, setDcModalVisible] = useState(false);
  const [isWithdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);
  const [isAuthModalVisible, setAuthModalVisible] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const handleEditUser = (name) => {
    navigate(`/edit-user/${name}`);
  };

  const showDcModal = () => {
    setDcModalVisible(true);
  };

  const showWithdrawModal = () => {
    setWithdrawModalVisible(true);
  };

  const showPasswordModal = () => {
    setPasswordModalVisible(true);
  };

  const showAuthModal = () => {
    setAuthModalVisible(true);
  };

  const handleAuthSubmit = () => {
    if (password === "correctPassword") {
      message.success("Authenticated successfully!");
      setAuthModalVisible(false);
      navigate(`/game-page`);
    } else {
      message.error("Invalid password!");
    }
  };
  const handleTableChange = (pagination) => {
    setPagination({
      ...pagination,
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Credit Reference",
      dataIndex: "creditReference",
      key: "creditReference",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Pending Bal.",
      dataIndex: "pendingBalance",
      key: "pendingBalance",
    },
    {
      title: "Available Bal.",
      dataIndex: "availableBalance",
      key: "availableBalance",
    },
    {
      title: "Current P&L",
      dataIndex: "currentPL",
      key: "currentPL",
    },
    {
      title: "Exposure",
      dataIndex: "exposure",
      key: "exposure",
    },
    {
      title: "U Lock",
      dataIndex: "uLock",
      key: "uLock",
    },
    {
      title: "B Lock",
      dataIndex: "bLock",
      key: "bLock",
    },
    {
      title: "My %",
      dataIndex: "myPercentage",
      key: "myPercentage",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            style={{
              backgroundColor: "#FF8A65",
              color: "white",
              margin: 2,
              fontSize: "12px",
            }}
            onClick={() => handleEditUser(record.name)}
          >
            U
          </Button>
          <Button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              margin: 2,
              fontSize: "12px",
            }}
            onClick={showDcModal}
          >
            DC
          </Button>
          <Button
            style={{
              backgroundColor: "#3F51B5",
              color: "white",
              margin: 2,
              fontSize: "12px",
            }}
            onClick={showWithdrawModal}
          >
            W
          </Button>
          <Button
            style={{
              backgroundColor: "#FFEB3B",
              color: "black",
              margin: 2,
              fontSize: "12px",
            }}
            onClick={showPasswordModal}
          >
            P
          </Button>
          <Button
            style={{
              backgroundColor: "#E1BEE7",
              color: "black",
              margin: 2,
              fontSize: "12px",
            }}
            onClick={showAuthModal}
          >
            GC
          </Button>
          <Button
            style={{
              backgroundColor: "#76FF03",
              color: "black",
              margin: 2,
              fontSize: "12px",
            }}
            onClick={showAuthModal}
          >
            CC
          </Button>
        </>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      userName: "John Doe",
      creditReference: "CR-12345",
      balance: 10000,
      pendingBalance: 500,
      availableBalance: 9500,
      currentPL: 200,
      exposure: 1500,
      uLock: "Yes",
      bLock: "No",
      myPercentage: "12%",
      type: "Standard",
      actions: "View",
    },
    {
      key: "2",
      userName: "Jane Smith",
      creditReference: "CR-67890",
      balance: 15000,
      pendingBalance: 800,
      availableBalance: 14200,
      currentPL: -100,
      exposure: 1000,
      uLock: "No",
      bLock: "Yes",
      myPercentage: "15%",
      type: "Premium",
      actions: "Edit",
    },
    {
      key: "3",
      userName: "Mike Johnson",
      creditReference: "CR-11223",
      balance: 5000,
      pendingBalance: 300,
      availableBalance: 4700,
      currentPL: 50,
      exposure: 200,
      uLock: "No",
      bLock: "No",
      myPercentage: "10%",
      type: "Basic",
      actions: "Delete",
    },
  ];

  return (
    <div className="client-page-parent">
      <div className="client-page-top">
        {/* <DateFilter /> */}
        <TableTop columns={columns} data={data} />

        <Modal
          title="DC Modal"
          visible={isDcModalVisible}
          onCancel={() => setDcModalVisible(false)}
          onOk={() => setDcModalVisible(false)}
        >
          <div className="deposit-credit-modal">
            <div className="available-balance">
              <h3 className="available-balance-heading">Available Balance:</h3>
              <div className="input-available">
                <input type="number" readOnly value={99800} />
              </div>
              <div className="input-available after-part">
                <span>After</span>
                <input type="number" readOnly value="10" />
              </div>
            </div>
            <div className="old-cred-ref">
              <div className="input-old-cred">
                <label>Old Cred Ref.</label>
                <input
                  type="number"
                  readOnly
                  value={0}
                  className="old-cred-readonly-input"
                />
              </div>
              <div className="input-old-cred">
                <label>New Cred Ref.</label>
                <input type="number" />
              </div>
            </div>
            <div className="old-cred-ref  name-section-below-old">
              <div className="name-input-field-parent">
                <div className="input-field-name-heading">
                  <h4>Name:</h4>
                </div>
                <div className="input-field-name">
                  <input
                    type="number"
                    readOnly
                    value={0}
                    className="old-cred-readonly-input"
                  />
                  <input
                    type="number"
                    readOnly
                    className="old-cred-readonly-input"
                  />
                </div>
              </div>
              <div className="name-input-field-parent">
                <div className="input-field-name-heading">
                  <h4>Add Desposit:</h4>
                </div>
                <div className="input-field-name ">
                  <input type="number" value={0} className="add-deposit" />
                </div>
              </div>
              <div className="name-input-field-parent">
                <div className="input-field-name-heading">
                  <h4>Remarks:</h4>
                </div>
                <div className="input-field-name">
                  <textarea id="w3review" name="w3review" rows="3" cols="60">
                    {" "}
                  </textarea>
                </div>
              </div>
            </div>
            <div className="master-password-field">
              <div className="master-password-heading">
                <h4>Master Password:</h4>
              </div>
              <div className="input-field-master-password">
                <input type="password" placeholder="Enter Password" />
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          title="Withdraw Modal"
          visible={isWithdrawModalVisible}
          onCancel={() => setWithdrawModalVisible(false)}
          onOk={() => setWithdrawModalVisible(false)}
        >
          <div className="withdraw-popup-parent">
            <div className="name-input-field-parent">
              <div className="input-field-name-heading">
                <h4>My Available:</h4>
              </div>
              <div className="input-field-name">
                <input
                  type="number"
                  readOnly
                  value={0}
                  className="old-cred-readonly-input"
                />
                <input
                  type="number"
                  readOnly
                  className="old-cred-readonly-input"
                />
              </div>
            </div>
            <div className="name-input-field-parent">
              <div className="input-field-name-heading">
                <h4>Name:</h4>
              </div>
              <div className="input-field-name">
                <input
                  type="number"
                  readOnly
                  value={0}
                  className="old-cred-readonly-input"
                />
                <input
                  type="number"
                  readOnly
                  className="old-cred-readonly-input"
                />
              </div>
            </div>
            <div className="name-input-field-parent">
              <div className="input-field-name-heading">
                <h4>Amount:</h4>
              </div>
              <div className="input-field-name ">
                <input type="number" value={0} className="add-deposit" />
              </div>
            </div>
            <div className="name-input-field-parent">
              <div className="input-field-name-heading">
                <h4>Remarks:</h4>
              </div>
              <div className="input-field-name">
                <textarea id="w3review" name="w3review" rows="3" cols="60">
                  {" "}
                </textarea>
              </div>
            </div>
          </div>
          <div className="master-password-field">
            <div className="master-password-heading">
              <h4>Master Password:</h4>
            </div>
            <div className="input-field-master-password">
              <input type="password" placeholder="Enter Password" />
            </div>
          </div>
        </Modal>
        <Modal
          title="Change Password"
          visible={isPasswordModalVisible}
          onCancel={() => setPasswordModalVisible(false)}
          onOk={() => setPasswordModalVisible(false)}
        >
          <div className="master-field-parent">
            <div className="change-password-field">
              <div className="master-password-heading">
                <h4>New  Password:</h4>
              </div>
              <div className="input-field-master-password">
                <input type="password" placeholder="Enter Password" />
              </div>
            </div>
            <div className="change-password-field">
              <div className="master-password-heading">
                <h4>Confirm Password:</h4>
              </div>
              <div className="input-field-master-password">
                <input type="password" placeholder="Enter Password" />
              </div>
            </div>
            <div className="change-password-field">
              <div className="master-password-heading">
                <h4>Master Password:</h4>
              </div>
              <div className="input-field-master-password">
                <input type="password" placeholder="Enter Password" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          title="Authenticate"
          visible={isAuthModalVisible}
          onCancel={() => setAuthModalVisible(false)}
          onOk={handleAuthSubmit}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password to continue"
          />
        </Modal>
        <DynamicTable
          columns={columns}
          pagination={pagination}
          handleTableChange={handleTableChange}
          DataSource={data}
        />
      </div>
    </div>
  );
};

export default Clients;
