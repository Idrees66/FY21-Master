import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
} from "recharts";

const Reports = () => {
  const [data, setData] = useState([]);
  const [priceData, setpriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "get",
        url: `/ordercompleted/totalsold`,
      })
        .then((res) => {
          console.log(res);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [data]);
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "get",
        url: `/ordercompleted/earning`,
      })
        .then((res) => {
          console.log(res);
          setpriceData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [priceData]);
  return (
    <div
      style={{

        width: "100vw",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "1360px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <h1
          style={{
            color: "#f2f2f2",
          }}
        >
          Total Product Solds
        </h1>
        <LineChart
          width={600}
          height={250}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="totalSold" stroke="#0602e3" />
          <CartesianGrid stroke="#1b1c1c" strokeDasharray="5 5" />
          <XAxis dataKey="productName" stroke="#1b1c1c" />
          <YAxis stroke="#1b1c1c" />
          <Tooltip />
        </LineChart>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          width: "1360px",
        }}
      >
        <h1
          style={{
            color: "#f2f2f2",
          }}
        >
          Total Price Earned
        </h1>
        <BarChart
          width={600}
          height={350}
          data={priceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1b1c1c" />
          <XAxis dataKey="productName" stroke="#1b1c1c" />
          <YAxis stroke="#1b1c1c" />
          <Tooltip />
          <Legend />
          <Bar dataKey="productPrice" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Reports;
