import React from "react";

export default function FileIcon({ type }) {
  let icon;
  switch (type) {
    case "folder":
      icon = "fa-folder fa-2x";
      break;
    default:
    case "file":
      icon = "fas fa-file-alt fa-2x";
  }

  return (
    <i
      className={`fas  ${icon}`}
      style={type === "folder" ? { color: "blue" } : { color: "grey" }}
    />
  );
}
