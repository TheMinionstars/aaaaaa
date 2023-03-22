import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import data from "../products.json";
import data1 from "../category.json";
import data2 from "../feedbacks.json";
import data3 from "../users.json";
import Header from "./Header";
const Detail = () => {
  const [products, setProducts] = useState({});
  const [cates, setCates] = useState({});
  const [feedbacks, setFeedbacks] = useState([]);
  const [users, setUsers] = useState(data3);
  const [userFbs, setUserFbs] = useState([]);
  const { slug, id } = useParams();
  useEffect(() => {
    const product = data?.find(
      (item) => item?.id?.toString() === id?.toString()
    );
    setProducts(product);

    const feedbacks = data2?.filter(
      (item) => item?.product_id?.toString() === id?.toString()
    );
    setFeedbacks(feedbacks);

    const cate = data1?.find(
      (item) => item?.id?.toString() === slug?.toString()
    );
    setCates(cate);
  }, [slug, id]);

  useEffect(() => {
    const userFbData = users.map((user) => {
      const userFbs = feedbacks.filter((e) => e.user_id === user.id);
      return { user, userFbs };
    });
    setUserFbs(userFbData);
  }, [users, feedbacks]);

  return (
    <div>
      <Header />
      <div className="detail">
        <div className="detail_wrap">
          <div className="detail_container">
            <div className="detail_img">
              <img src={products?.image} alt="anh" />
            </div>
            <div className="detail_title">
              <h1>{products?.name}</h1>
            </div>
            <div className="detail_title">
              <p>Rating: {products?.rating}</p>
            </div>
            <div className="detail_title">
              <p>Description: {products?.description}</p>
            </div>
            <div className="detail_title">
              <p>Movie Genre: {cates?.detail}</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="detail_container">
            <div className="detail_title">
              <h1>Comments</h1>
            </div>
            <div className="detail_title">
              {userFbs?.map((e, i) => {
                if (e.userFbs.length > 0) {
                  return (
                    <div key={i}>
                      <p>
                        {e.user.fullName}:{" "}
                        {e.userFbs.map((f, i) => (
                          <span key={i}>{f.feedback}</span>
                        ))}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
