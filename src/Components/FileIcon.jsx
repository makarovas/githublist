import React from "react";

export default function FileIcon({ type }) {
  let icon;
  switch (type) {
    case "folder":
      icon = "fa-folder";
      break;
    default:
    case "file":
      icon = "fa-file-text-o";
  }

  return <i className={`fas  ${icon}`} />;
}
