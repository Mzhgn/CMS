import React from "react";
import "./WidgetSM.css";
import { newMembers } from "../../Data";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function WidgetSM() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmLists">
        {newMembers.map((member) => (
          <li className="widgetListItem" key={member.id}>
            <img src={member.img} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{member.name}</span>
              <span className="widgetSmUserTitle">{member.title}</span>
            </div>
            <button className="widgetSmBtn">
              <VisibilityOutlinedIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
