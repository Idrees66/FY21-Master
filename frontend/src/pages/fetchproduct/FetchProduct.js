import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Components/card/Card";
import "./FetchProduct.css";
import Loading from "../../Components/loading/Loading";
export const FetchProductPage = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios({
        method: "get",
        url: `/scraping/${match.params.Pname}`,
      })
        .then((res) => {
          console.log(res);
          setProducts(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchProducts();
    //setTimeout(fetchBooks, 1000);
  }, []);
  const onAdd = async (data) => {
    console.log(data);
    await axios({
      method: "Post",
      url: `/create/${match.params.Pname}`,
      data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="collection-page">
      <div className="collection-page-body">
        <h2 className="title">{match.params.Pname.toUpperCase()}</h2>
        {products ? (
          <div className="items">
            {products.map((product) => (
              <Card
                key={product.key}
                data={product}
                button={{ name: "Add To Mongo", clicked: onAdd }}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
export const OnlineProductPage = ({ match }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching")
    const fetchProducts = async () => {
      await axios({
        method: "get",
        url: `/getdata/${match.params.Pname}`,
      })
        .then((res) => {
          console.log(res);
          setProducts(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchProducts();
    //setTimeout(fetchBooks, 1000);
  }, []);
  //For deleting
  const onDelete = async (data) => {
    console.log(data);
    await axios({
      method: "delete",
      url: `/delete/onlineproduct/${match.params.Pname}/${data._id}`,
      data,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="collection-page">
      <div className="collection-page-body">
        <h2 className="title">{match.params.Pname.toUpperCase()}</h2>
        <div className="items">
          {products.map((product) => (
            <Card
              key={product.key}
              data={product}
              button={{ name: "Delete", clicked: onDelete }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
