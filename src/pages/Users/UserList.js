import React from "react";
import { useState } from "react";
import "./UserList.css";
// import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../Data";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);

  const userRemove = (userID) => {
    setUserData(userData.filter((user) => user.id !== userID));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="">
            <div className="listUser">
              <img src={params.row.avatar} className="userImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction ",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userRemoveIcon"
              onClick={() => userRemove(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 3 } } }}
        pageSizeOptions={[3]}
        disableRowSelectionOnClick
      />
    </div>
  );
}
