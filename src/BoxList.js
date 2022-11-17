import react, { useState } from "react";
import NewBoxForm from "./NewBoxForm.js";
import Box from "./Box.js";
import { v4 as uuid } from "uuid";

/**
 *  Function renders BoxList which contains NewBoxForm and
 *  all the submitted Boxes below...
 *
 *  -Props
 *    (none)
 *
 *  -States
 *    boxes, an array of objects like
 *      [{height, width, backgroundColor}, ...]
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function deleteMe(id) {
    const filteredBoxes = boxes.filter((box, idx) => box.id === id);
    setBoxes(() => filteredBoxes);
  }

  function addItem(formData) {
    setBoxes((b) => b.push(formData));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addItem={addItem} />
      {boxes.map((b) => {
        <Box
          key={b.id}
          width={b.width + "px"}
          height={b.height + "px"}
          backgroundColor={b.backgroundColor}
          deleteMe={() => deleteMe(b.id)}
        />;
      })}
    </div>
  );
}

export default BoxList;
