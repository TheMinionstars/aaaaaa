import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img className="logo" src="../assets/images/pngegg.png" alt="Flim poster"/>
        <Link to='/cate/all'>Home Page</Link>
      </div>
      <div className="header-right">
        <form>
          <input type="text"></input>
          <button>Search</button>
        </form>
        <button className="rate_btn">Login</button>
        <button className="rate_btn">Sign Up</button>
      </div>
    </div>
  );
}
export default Header;
