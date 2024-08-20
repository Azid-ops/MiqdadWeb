import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationLink(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(props.link)}> {props.children} </button>
    </div>
  );
}
