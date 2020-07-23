import React from "react";

export default function Datatable({ users }) {
  const mapHeaders = [
    { label: "firstName", field: "first_name" },
    { label: "lastName", field: "last_name" },
    { label: "email", field: "email" },
    { label: "gender", field: "gender" },
    { label: "city", field: "city" },
    { label: "country", field: "country" },
    { label: "avatar", field: "avatar" },
  ];

  return (
    <table className="ui celled table" cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          {mapHeaders.map((header, index) => (
            <th key={index}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((row) => (
          <tr key={row.id}>
            {mapHeaders.map((column, index) =>
              column.label === "avatar" ? (
                <td key={index}>
                  <span>
                    <img alt="Not Available" src={row[column.field]}></img>
                  </span>
                </td>
              ) : (
                <td key={index}>{row[column.field] || "Not Available"}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
