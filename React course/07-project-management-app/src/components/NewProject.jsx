import Input from "./Input.jsx"
import { useRef } from "react"
import Modal from "./Modal.jsx"

export default function NewProject({ onAdd, onCancel }) {

  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const due = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDue = due.current.value;

    if (enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDue.trim === '') {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      due: enteredDue,
    })
  }


  return (
    <>
      <Modal ref={modal} buttonCaption={"Jawohl"}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure  you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
          <li><button className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md" onClick={handleSave}>Save</button></li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextarea />
          <Input type="date" ref={due} label="Due date" />
        </div>
      </div>
    </>)
}