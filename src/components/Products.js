import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Products = ({ item }) => {
  return (
    // <Link className="card_wrap" to={`/detail/${item.albumId}/${item?.id}`}>
    // <div className="card">
    // 	<div className="card_img">
    // 		<img src={item.image.small} alt="anh" />
    // 	</div>
    // 	<div className="card_title">{item.name}</div>
    // 	<div className="card_title">Albums: {item.categoryId}</div>
    // </div>
    <div className="card_wrap" key={item.id}>
      <div className="card">
        <div className="card_img">
          <img src={item.image} alt="anh" />
        </div>
        <div className="card_text">
          <div className="card_title">{item.name}</div>
          <div className="card_content">Year: {item.details.date}</div>
          <div className="card_content">Rating: {item.rating}</div>
          <div className="card_content">Genre: {item.categoryId}</div>
          <Link className="card_wrap" to={`/detail/${item?.id}`}>
            <button className="rate_btn">Film Detail</button>
          </Link>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Products;
