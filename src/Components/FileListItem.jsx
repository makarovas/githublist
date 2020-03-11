import React from "react";
import FileIcon from "./FileIcon";
import { Time } from "./Time";
export default function FileListItem({
  name,
  type,
  latestCommit,
  id,
  updated_at
}) {
  const FLEX_ROW = {
    display: "flex",
    flexDirection: "row",
    flex: "1 ",
    border: "1px solid lightgray",
    borderRadius: "3px",
    alignItems: "center",
    margin: "5px 0",
    padding: "10px",
    "&:hover ": {
      backgroundColor: "lightgray"
    }
  };
  const GRID_ITEM_NAME = {
    display: "inline-block ",
    width: "10%",
    marginLeft: "20px"
  };
  const GRID_ITEM_MESSAGE = {
    display: "inline-block ",
    width: "30%"
    // marginLeft: "20px"
  };
  return (
    <li key={id} style={FLEX_ROW}>
      <FileIcon type={type} />
      <span style={GRID_ITEM_NAME}>{name}</span>
      <div style={GRID_ITEM_MESSAGE}>{latestCommit.message}</div>
      <Time time={updated_at} />
    </li>
  );
}
