import React from "react";
import FileListItem from "./FileListItem";
export default function FileList({ files }) {
  return (
    <ul>
      {files.map(({ name, id, type }) => (
        <FileListItem name={name} key={id} type={type} {...files} />
      ))}
    </ul>
  );
}
