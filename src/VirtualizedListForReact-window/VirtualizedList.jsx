import React, { useState, useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";

export default function VirtualizedList() {
  const [users, setUsers] = useState([]);

  // Simulate backend (JSON data fetch)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const columnCount = 4; // name, username, email, phone
  const columnWidth = 200;
  const rowHeight = 50;

  // Header row
  const headers = ["Name", "Username", "Email", "Phone"];

  // Cell render
  const Cell = ({ columnIndex, rowIndex, style }) => {
    // Header row
    if (rowIndex === 0) {
      return (
        <div
          style={{
            ...style,
            background: "#f0f0f0",
            fontWeight: "bold",
            border: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          {headers[columnIndex]}
        </div>
      );
    }

    // Data rows
    const user = users[rowIndex - 1]; // -1 because row 0 is header
    if (!user) return null;

    const values = [user.name, user.username, user.email, user.phone];

    return (
      <div
        style={{
          ...style,
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          // padding: "0 8px",
        }}
      >
        {values[columnIndex]}
      </div>
    );
  };

  return (
    <div>
      <h2>User Table</h2>
      {users.length > 0 ? (
        <Grid
          columnCount={columnCount}
          columnWidth={columnWidth}
          height={400}
          rowCount={users.length + 1} // +1 for header
          rowHeight={rowHeight}
          width={columnCount * columnWidth}
        >
          {Cell}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
