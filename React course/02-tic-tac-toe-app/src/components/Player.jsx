import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {

  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleSelect() {
    //setIsEditing(!isEditing);
    // setIsEditing (isEditing ? false : true);
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  //let buttonLabel = "Edit"

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    //buttonLabel = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleSelect}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}