import Breadcrumbs from "@/app/components/Breadcrumbs";
import TaskForm from "../_components/TaskForm";

const NewTaskPage = () => {
  return (
    <>
      <Breadcrumbs />
      <TaskForm title="Create a new task" />
    </>
  );
};

export default NewTaskPage;
