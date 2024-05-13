import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="header-start">
          <div className="header-list">
            <ul>
              <li>
                <a href="#">+12312-3-1209</a>
              </li>
              <li>
                <a href="#">support@colorlib.com</a>
              </li>
            </ul>

            <div className="header-left">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
        <div className="header-end">
          <div className="header-logo">
            <Link>
            <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
            </Link>
          </div>

            <div className="header-end-right">
                <nav>
                    <ul>
                        <li><Link to={"/"} >HOME</Link> </li>
                        <li><Link to={"/basket"}>BASKET</Link></li>

                        <li><a href=""></a>CATEGORY</li>
                        <li><a href=""></a>MEN</li>
                        <li><a href=""></a>WOMEN</li>
                        <li><a href=""></a>LATEST</li>
                        <li><a href=""></a>PAGES</li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
