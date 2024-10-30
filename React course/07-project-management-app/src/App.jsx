import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter(
          (task) => task.id !== id)
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: prevProjectsState.projects.filter(
          (project) => project.id !== prevProjectsState.selectedProjectId)
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  );
}

export default App;
