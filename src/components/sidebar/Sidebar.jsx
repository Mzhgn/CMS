import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarLists">
            <li className="sidebarListItems  active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItems">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItems">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarLists">
            <li className="sidebarListItems  active">
              <PermIdentityIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItems">
              <StorefrontIcon className="sidebarIcon" />
              New User
            </li>
            <li className="sidebarListItems">
              <AttachMoneyIcon className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItems">
              <BarChartIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItems">
              <MailOutlineIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarLists">
            <li className="sidebarListItems  active">
              <DynamicFeedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItems">
              <ChatBubbleIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItems">
              <MessageOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
