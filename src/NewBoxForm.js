import react, { useState } from "react";

/**
 *  Function renders the NewBoxForm
 *
 *  -Props
 *    handleSubmit()
 *
 *  -States
 *    formData, object like: {
 *        width,
 *        height,
 *        backgroundColor
 *      }
 */
function NewBoxForm({ addItem }) {
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    backgroundColor: "",
  });

  const initialState = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(formData);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height-input">Height:</label>
      <input id="height-input" name="height" onChange={handleChange} />
      <label htmlFor="width-input">Width:</label>
      <input id="width-input" name="width" onChange={handleChange} />
      <label htmlFor="backgroundColor-input">Background Color:</label>
      <input
        id="backgroundColor-input"
        name="backgroundColor"
        onChange={handleChange}
      />
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
