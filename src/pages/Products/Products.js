import React from "react";
import { useState } from "react";
import "./Products.css";
// import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { products } from "../../Data";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  const [productsData, setProductsData] = useState(products);

  const productRemove = (itemID) => {
    setProductsData(products.filter((item) => item.id !== itemID));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Brand",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/products/${params.row.id}`} className="link">
            <div className="listUser">
              <img src={params.row.avatar} className="userImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 150,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`} className="link">
              <button className="userEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userRemoveIcon"
              onClick={() => productRemove(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={productsData}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 3 } } }}
        pageSizeOptions={[3]}
        disableRowSelectionOnClick
      />
    </div>
  );
}
