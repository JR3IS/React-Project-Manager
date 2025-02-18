export default function NoProjectSelected({ newProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src="src\assets\no-projects.png"
        alt="notepad with pen"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-500 mb-4">
        Select a project or get started with a new one
      </p>
      <button
        className="px-4 py-2 mt-4 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
        onClick={newProject}
      >
        Create new project
      </button>
    </div>
  );
}
