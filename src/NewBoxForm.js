import react, {useState} from "react";

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
    width: 0,
    height: 0,
    backgroundColor: "",
  });

  const initialState = {
    width: 0,
    height: 0,
    backgroundColor: "",
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(formData);
    setFormData(initialState);
  }

  return (
    <form>


    </form>

  )
}

export default NewBoxForm;
