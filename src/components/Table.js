import React from "react";

import { getAge } from "../utils/date";

const Table = ({ players }) => (
  <div>
    <table id="players">
      <thead>
        <tr>
          <th>Player</th>
          <th>Position</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players.map(({ name, position, dateOfBirth }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{position}</td>
            <td>{getAge(dateOfBirth)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
