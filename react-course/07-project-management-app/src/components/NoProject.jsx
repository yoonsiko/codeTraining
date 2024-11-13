import noProjectImg from "../assets/no-projects.png";
import Button from "./Button.jsx"

export default function NoProject({ onStartAddProject }) {
  return (
    <div>
      <img src={noProjectImg} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}