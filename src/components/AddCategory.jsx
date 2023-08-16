import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInput = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitInput = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitInput}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInput}
      />
    </form>
  );
};
