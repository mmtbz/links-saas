"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <select
      id="assigness"
      className="border border-solid p-1 rounded-custom inline-flex outline-none"
    >
      <option value=""> Assign User</option>
      {users.map((user) => (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default AssigneeSelect;
