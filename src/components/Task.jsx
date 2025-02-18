export default function Task({ tasks, taskIndex, deleteTask }) {
  return (
    <>
      <p className="text-stone-700 whitespace-pre-wrap">{tasks[taskIndex]}</p>
      <button
        className="text-stone-700 hover:text-red-500"
        onClick={() => deleteTask(taskIndex)}
      >
        Clear
      </button>
    </>
  );
}
