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

  function onSubmit() {
    const newBox = {
      id: uuid(),
      height: ,
      width: ,
      backgroundColor: ,
    };
    setBoxes(boxes => [...boxes, newBox]);
  };

  function deleteMe(id) {
    const filteredBoxes = boxes.filter((box, idx) => box.id === id);
    setBoxes( () => filteredBoxes );
  }


  function addItem(item) {
    boxes.push(item); //?????
  }

  return (
    <NewBoxForm addItem={addItem}/>
    {
    boxes.map(b => {
      <Box
        key={ }
        width={b.width}
        height={b.height}
        backgroundColor={b.backgroundColor}
        deleteMe={() => deleteMe(b.id)}
      />;
    });
  }
  );
}

export default BoxList;
