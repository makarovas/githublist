import React from "react";
import FileIcon from "./FileIcon";

export default function FileListItem({ name, id, type }) {
  return (
    <li>
      <FileIcon type={type} />
      <span key={id}>{name}</span>
    </li>
  );
}
