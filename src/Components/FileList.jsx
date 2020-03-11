import React from "react";
import FileListItem from "./FileListItem";
export default function FileList({ files }) {
  return (
    <ul>
      {files.map(({ name, id, type, latestCommit, updated_at }) => (
        <FileListItem
          name={name}
          key={id}
          id={id}
          type={type}
          latestCommit={latestCommit}
          updated_at={updated_at}
        />
      ))}
    </ul>
  );
}
