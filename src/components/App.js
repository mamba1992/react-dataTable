import React, { useState, useEffect } from "react";
import axios from "axios";
import Datatable from "./DataTable";
import FormData from "./FormData";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.jsonbin.io/b/5dd4d5393da40e6f298c9510/1"
      );
      setUsers(response.data);
    };
    getData();
  }, []);

  function searchFilter(rows) {
    if (search) {
      const filteredUsers = rows.filter(
        (row) =>
          (row["first_name"] !== null &&
            row["first_name"].toLowerCase().includes(search.toLowerCase())) ||
          (row["email"] !== null &&
            row["email"].toLowerCase().includes(search.toLowerCase()))
      );
      return filteredUsers;
    }
    return rows;
  }
  function renderTable() {
    return <Datatable users={searchFilter(users)} />;
  }

  function searchBar() {
    return (
      <div className="ui search-bar segment">
        <div className="ui icon input">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="filter by name or email"
          />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
  function renderForm() {
    return <FormData />;
  }
  return (
    <div className="ui container">
      <h2 className="title">Form Data</h2>
      <div>{renderForm()}</div>
      <div className="ui horizontal divider"></div>
      <h2 className="title">Table Data</h2>
      <div>{searchBar()}</div>
      <div>{renderTable()}</div>
    </div>
  );
};

export default App;
