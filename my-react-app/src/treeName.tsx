import React, { useState } from "react";

const TreeNameInput: React.FC = () => {
  const [treeName, setTreeName] = useState<string>("");

  const handlePrompt = () => {
    const enteredName = prompt("Введите название посаженного дерева:");
    if (enteredName) {
      setTreeName(enteredName);
    }
  };

  return (
    <>
    <div>
      <button onClick={handlePrompt}>
        Введите название посаженного дерева
      </button>
      <div>{treeName && `Название посаженного дерева: ${treeName}`}</div>
        </div>
    </>
  );
};

export default TreeNameInput;
