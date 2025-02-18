import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState, useRef } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [state, setState] = useState({
    page: undefined,
    projects: [],
    selectedProjectIndex: null,
  });

  const inputTask = useRef();

  function openNewProject() {
    setState((prevState) => ({ ...prevState, page: null }));
  }

  function closeNewProject() {
    setState((prevState) => ({ ...prevState, page: undefined }));
  }

  function addProject(project) {
    // Append the new projects to the projects array and update state
    setState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, { ...project, tasks: [] }],
    }));
  }

  function selectProject(index) {
    setState((prevState) => ({
      ...prevState,
      selectedProjectIndex: index,
      page: "selected",
    }));
  }

  function deleteProject(index) {
    setState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((_, i) => i !== index),
      page: undefined, // Return to NoProjectSelected page
      selectedProjectIndex: null,
    }));
  }

  function addTask() {
    const taskValue = inputTask.current.value;
    if (taskValue.trim() !== "") {
      setState((prevState) => {
        const newProjects = [...prevState.projects];
        // Add the task to the selected project's tasks array
        newProjects[state.selectedProjectIndex].tasks.push(taskValue);
        return { ...prevState, projects: newProjects };
      });
      // Clear input after submition
      inputTask.current.value = "";
    }
  }

  function deleteTask(taskIndex) {
    setState((prevState) => {
      const newProjects = [...prevState.projects];
      // Remove the task of the selected project's task array
      newProjects[state.selectedProjectIndex].tasks.splice(taskIndex, 1);
      return { ...prevState, projects: newProjects };
    });
  }

  function renderComponent() {
    if (state.page === undefined) {
      return <NoProjectSelected newProject={openNewProject} />;
    } else if (state.page === null) {
      return (
        <NewProject
          cancel={closeNewProject}
          projects={state.projects}
          addProject={addProject}
        />
      );
    } else {
      return (
        <SelectedProject
          projects={state.projects}
          index={state.selectedProjectIndex}
          deleteProject={deleteProject}
          ref={inputTask}
          addTask={addTask}
          deleteTask={deleteTask}
        />
      );
    }
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        newProject={openNewProject}
        projects={state.projects}
        selectProject={selectProject}
      />
      {renderComponent()}
    </main>
  );
}

export default App;
