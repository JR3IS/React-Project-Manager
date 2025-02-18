import { forwardRef } from "react";
import Task from "./Task";

const SelectedProject = forwardRef(
  ({ projects, index, deleteProject, addTask, deleteTask }, ref) => {
    //  Format the date
    const formattedDate = new Date(projects[index].dueDate).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

    return (
      <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-stone-600 mb-2">
              {projects[index].title}
            </h2>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => deleteProject(index)}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">Due date: {formattedDate}</p>
          <p className="text-stone-700 whitespace-pre-wrap">
            {projects[index].description}
          </p>
        </header>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center justify-between">
          <input
            ref={ref}
            className="w-80 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-400"
          />
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projects[index].tasks.map((task, taskIndex) => (
            <li key={taskIndex} className="flex justify-between my-4">
              <Task
                tasks={projects[index].tasks}
                taskIndex={taskIndex}
                deleteTask={deleteTask}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default SelectedProject;
