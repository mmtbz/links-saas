"use client";
import { Task, User } from "@prisma/client";
import { Flex, Text } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

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
    <>
      <select
        id="assigness"
        className="border border-solid p-1 rounded-custom inline-flex outline-none"
        onChange={(event) =>
          axios
            .patch("/api/task/" + task.id, {
              assignedToUserId: event.target.value || null,
            })
            .then(() => {
              toast.custom((t) => (
                <Flex
                  justify="between"
                  align="center"
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } w-full bg-green-500 text-white shadow-lg rounded-custom pointer-events-auto p-2`}
                >
                  <Flex gap="4" align="center">
                    <FaCircleCheck size="24" color="white" />
                    <Text className="pl-4">
                      Success the assignee was updated successfully
                    </Text>
                  </Flex>
                  <button onClick={() => toast.dismiss(t.id)}>
                    <IoIosCloseCircle size="30" />
                  </button>
                </Flex>
              ));
            })
            .catch(() => {
              toast.custom((t) => (
                <Flex
                  justify="between"
                  align="center"
                  className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                  } w-full bg-red-500 text-white shadow-lg rounded-custom pointer-events-auto p-2`}
                >
                  <Flex gap="4" align="center">
                    <IoIosCloseCircle size="30" />
                    <Text className="pl-4">
                      Error while updating assignee. Try again later.
                    </Text>
                  </Flex>
                  <button onClick={() => toast.dismiss(t.id)}>
                    <IoIosCloseCircle size="30" />
                  </button>
                </Flex>
              ));
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
    </>
  );
};

export default AssigneeSelect;
