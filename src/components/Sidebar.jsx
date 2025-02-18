export default function Sidebar({ newProject, projects, selectProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        className="px-6 py-3 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
        onClick={newProject}
      >
        + Add Project
      </button>
      <ul className="mt-8 bg-stone-900 text-stone-400">
        {projects.map((project, index) => (
          <li key={index} className=" flex justify-between my-2">
            <button
              className="p-2 rounded-md w-full text-left hover:bg-stone-800 hover:text-stone-200"
              onClick={() => selectProject(index)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
