"use client";
import { Task, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const AssigneeSelect = ({ task }: { task: Task }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // stale for 60 secs
    retry: 3,
  });

  if (isLoading) return <div>loading</div>;
  if (error) return null;

  return (
    <select
      id="assigness"
      className="border border-solid p-1 rounded-custom inline-flex outline-none"
      onChange={(event) =>
        axios.patch("/api/task/" + task.id, {
          assignedToUserId: event.target.value || null,
        })
      }
      defaultValue={task.assignedToUserId || ""}
    >
      <option value="-"> Assign User</option>
      <option value=""> Unassigned</option>
      {users?.map((user) => (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default AssigneeSelect;
