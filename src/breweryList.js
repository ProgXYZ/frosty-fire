import React from "react";
import { useEffect, useState } from "react";
import { variables } from "./variables";
import Table from "react-bootstrap/Table";

function BreweryList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(variables.BreweryAPI_URL)
      .then((response) => response.json())
      .then((dbData) => setData(dbData));
  }, []);

  if (data) {
    return (
      <>
        <h1>Brewery List Demo Api</h1>
        <div>
          <a target="_blank" href="https://api.openbrewerydb.org/v1/breweries">
            Brewery List Api
          </a>
        </div>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Brewery Type</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 6).map((data) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.brewery_type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }

  return <div>no data</div>;
}

export default BreweryList;
