import react, {useState} from "react";

/**
 *  Function renders a single Box
 *
 *  -Props
 *    width (num)
 *    height (num)
 *    backgroundColor (str)
 *
 *  -States
 *    (none)
 */
function Box({width, height, backgroundColor, deleteMe}) {
  const myStyles = {
    width,
    height,
    backgroundColor
  };
  return (
    <div styles={myStyles} />
    <button click={deleteMe}>X</button>
  )
}

export default Box;
