import React, { useState, useEffect } from "react";
import axios from "axios";

const usersURL = "https://jsonplaceholder.typicode.com/users";

function Task4() {
  // Hooks
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(usersURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div>
      <h3>Task 4</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>phone</th>
            <th>company</th>
          </tr>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {item.address.street}
                {item.address.city}
              </td>
              <td>{item.phone}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
