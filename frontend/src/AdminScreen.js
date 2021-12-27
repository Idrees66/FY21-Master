import { React, useEffect, useState } from "react";
import axios from "axios";
import "./cards.css";
import "./counter.css";
import "./button.css";
import OrdorCard from "./Components/ordorCard/OrdorCard";

const AdminScreen = ({ user, setUser }) => {
  const [orders, setOrders] = useState([]);
  const [statusValues, setStatusValues] = useState([]);
  const updateOrderStatus = async (orderId, status) => {
    try {
      const res = await axios.put("/order/update/order-status", {
        orderId: `${orderId}`,
        status: `${status}`,
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("/order/all");

        if (res.data.order) {
          setOrders(res.data.order);
        }
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(getOrders, 500);
  }, [orders]);
  useEffect(() => {
    const getStatusValues = async () => {
      try {
        const res = await axios.get("/order/get/status-values");

        if (res.data) {
          setStatusValues(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(getStatusValues, 500);
  }, [statusValues]);
  const showOrdersLength = () => {
    if (orders.length < 1) {
      return <h3 className="container">NO Orders!</h3>;
    } else {
      return (
        <>
          <div className="container" style={{ zindex: "100" }}>
            <div className="row">
              <div className="four col-md-12">
                <div className="counter-box">
                  <span className="counter">{orders.length}</span>
                  <p>Total Orders</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  const showStatus = (o) => (
    <div className="form-group">
      <h3 className="mark mb-4">Status: {o.status}</h3>
      <select
        className="form-control"
        onChange={(e) => handleStatusChange(e, o._id)}
      >
        <option>Update Status</option>
        {statusValues.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );

  const handleStatusChange = async (e, orderId) => {
    // updateOrderStatus(orderId, e.target.value).then(
    //     data => {
    //         if (data.error) {
    //             console.log("Status update failed");
    //         } else {
    //             getOrders();
    //         }
    //     }
    // );

    try {
      await updateOrderStatus(orderId, e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (orderId) => {
    // console.log("deleteOrder of ", orderId);
    try {
      await axios.delete(`/order/delete/${orderId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "90vh",
        width: "100vw",
        overflowY: "scroll",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "0", left: "0" }}>
        {showOrdersLength()}
      </div>
      <div style={{ height: "100%", width: "1300px" }}>
        {orders.map((order, oIndex) => {
          return (
            <div key={oIndex}>
              <OrdorCard order={order} deleteOrder={deleteOrder} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminScreen;
