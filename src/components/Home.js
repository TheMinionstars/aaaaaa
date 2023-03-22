import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import products from "../products.json";
import category from "../category.json";
import Products from "./Products";
import Header from "./Header";
import "./style.css";



function Home() {
  const [cate, setCate] = useState(category);
	const [prod, setProd] = useState(products);
  const [prodByCate, setprodByCate] = useState([]);
  
  const searchRef = useRef();
	const { search } = useLocation();
	const title = new URLSearchParams(search).get("title") || "";

  // const handleSearch = () => {
	// 	if (!searchRef.current.value) {
	// 		navigate("/cate/all");
	// 	} else {
	// 		navigate(`/cate/all?title=${searchRef.current.value}`);
	// 	}
	// };

  const handleSearch = () => {
    if (!searchRef.current.value) {
      navigate("/cate/all");
    } else {
      navigate(`/cate/all?id=${searchRef.current.value}`);
    }
  };


  const { slug } = useParams();

  useEffect(() => {
			fetch("../category.json")
				.then((res) => res.json())
				.then((res) => {
					// const alb = res?.filter(
					// 	(item) => item?.userId?.toString() == user?.id?.toString()
					// );
					setCate([...res]);
				});
	}, []);

  useEffect(() => {
		if (cate) {
			fetch("../products.json")
				.then((res) => res.json())
				.then((res) => {
					const abs = res?.filter((item) => {
						const some = cate?.some(
							(infor) => infor?.id?.toString() === item?.catergoryId?.toString()
						);
						if (some) {
							return item;
						}
            return null;
					});
					setProd([...abs]);
				});
		}
	}, [cate]);
  console.log(prod)
  useEffect(() => {
		if (prod) {
			if (slug !== "all") {
				const ab = prod?.filter(
					(item) => item?.categoryId?.toString() === slug?.toString()
				);
				setprodByCate([...ab]);
        console.log(ab)
			} else {
				setprodByCate([...prod]);
			}
		}
    
	}, [prod, slug]);
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header/>
      <div className="home_wrap">
        <div className="category_product">
          <div className="cate_list">
            <div className="cate_filter" 
              onClick={() => {
                navigate("/cate/all");
              }}
            > 
            Tất cả các thể loại</div>
            <hr />
            {category?.map((item, index) => (
              // <div className="cate_filter" key={e.id}>
              //   {e.detail}
              // </div>
              <Link className="cate_filter" key={index} to={`/cate/${item.id}`}>
							<div >
								 {item?.id}. {item?.detail}
							</div>
						</Link>
            ))}
          </div>
          <div className="search_bar">
            <input
              type="text"
              placeholder="Search for movies..."
              ref={searchRef}
              defaultValue={title}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <div className="product_list">
          {/* {products.map((item) => (
            <div className="card_wrap" key={item.id}>
              <div className="card">
                <div className="card_img">
                  <img src={item.image} alt="anh" />
                </div>
                <div className="card_title">{item.name}</div>
                <div className="card_content">Year: {item.details.date}</div>
                <div className="card_content">Rating: {item.rating}</div>
                <div className="card_content">Genre: {item.categoryId}</div>
                <Link className="card_wrap" to={`/detail/${item?.id}`}>
                  <button className="rate_btn">Film Detail</button>
                </Link>
                
              </div>
            </div>
          ))} */}
          {prodByCate?.map((item, index) => (
            
            <Products key={index + "a"} item={item} />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Home;