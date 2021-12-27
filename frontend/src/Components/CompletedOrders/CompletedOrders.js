import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "axios";
import Loading from "../loading/Loading";
import OrdorCard from "../ordorCard/OrdorCard";
const CompletedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios({
        method: "get",
        url: `/ordercompleted/all`,
      })
        .then((res) => {
          console.log(res);
          setOrders(res.data.order);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchProducts();
    //setTimeout(fetchBooks, 1000);
  }, []);
  console.log(orders);
  return (
    <div className="collection-page">
      <div className="collection-page-body">
        <h2 className="title">Completed Orders</h2>
        <div className="items" style={{ gridTemplateColumns: "1fr" }}>
          {orders ? (
            orders.map((order) => <OrdorCard order={order} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedOrders;
