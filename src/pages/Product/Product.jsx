import React from "react";
import Chart from "../../components/chart/Chart";
import { Link } from "react-router-dom";
import { productsData } from "../../Data";
import "./Product.css";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productBtn">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Monthy Sale" data={productsData} dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfo">
            <img src="/images/mac.jpg" className="productInfoImg" />
            <span className="productName">MacBook</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name</div>
              <div className="productInfoValue">Dell Laptop</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales</div>
              <div className="productInfoValue">$45340</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Available</div>
              <div className="productInfoValue">Yes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        {" "}
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Dell Laptop" />

            <label>Available</label>
            <select id="available">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select id="available">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="/images/upload.jpg" className="productUploadImg" />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: none }} />
            </div>
            <button className="productBtn">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
