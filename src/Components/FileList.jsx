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
      <>
        <IconButton>Awesome</IconButton>
        <Alert title="HEY!">VERY IMPORTANT!</Alert>
      </>
    </ul>
  );
}

export function IconButton({ children }) {
  return (
    <button type="button">
      <i className="fas fa-cloud" />
      {children}
    </button>
  );
}

export const Alert = ({ children, title }) => (
  <div
    style={{
      backgroundColor: "#FFCCCB  ",
      width: "300px",
      color: "#CC0000  ",
      minHeight: " 50px",
      lineHeight: "50px",
      textAlign: "center",
      border: "1px solid red"
    }}
  >
    <h3>{title}</h3>
    <i className="fas fa-exclamation-triangle" style={{ marginLeft: "10px" }} />
    {children}
  </div>
);
