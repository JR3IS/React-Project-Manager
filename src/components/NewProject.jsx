import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ cancel, addProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    // Create an object to store the input data
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (
      project.title.trim() === "" ||
      project.description.trim() === "" ||
      project.dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    } else {
      // Call the function to store the data in the projects array
      addProject(project);

      // Clear the input boxes
      title.current.value = "";
      description.current.value = "";
      dueDate.current.value = "";
    }
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok">
        <h2 className="text-center text-xl font-bold text-stone-500 mb-2 mt-3">
          Invalid Input
        </h2>
        <p className="text-center text-stone-500 mb-4">
          Please fill in all the fields.
        </p>
      </Modal>
      <div className="w-[36rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-700 hover:text-stone-950"
              onClick={cancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-lg bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-stone-200"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due date" />
        </div>
      </div>
    </>
  );
}
