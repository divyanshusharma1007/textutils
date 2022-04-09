import React, { useState } from "react";
// hook replace thefuncion of the class base componets .
// here {usestate} is a hook which is used to change and manage states .
// in this hte first is variable and second is function which is used to change the content .
// hooks are use to use the featurs of the class without making the class .

export default function Textform(probs) {
  // write it inside the main function .
  const [text, setText] = useState(" ");
  const handleUpClick = () => {
    console.log("upper case was clicked");
    setText(text.toUpperCase());
  };
  const onchange = (event) => {
    console.log(text);
    setText(event.target.value);
  };
  const lowercase = () => {
    setText(text.toLowerCase());
  };
  const clearall = () => {
    setText("");
  };
  const copydata = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
  };
  const Extraspaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  // here text is our variable when we want to change the value of text then we should use the function setText
  // you can't change the state as the varibale so to change the you have to use the the function .
  // setText("newtext");
  return (
    <>
      <div className="container">
        <h1 style={{ color: probs.mode === 'dark' ? 'white' : 'black' }}> {probs.heading}</h1>
        {/* you cant change the value in the text box when we want to change the value then we have to amke the funciton . which occur when there is a change in the text box  */}
        {/* here on change fuction occur when there is a change on the text area . */}
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            style={{
              backgroundColor: probs.mode === 'dark' ? '#3f444d' : 'white',
              color: probs.mode === 'dark' ? 'white' : 'black',
              border: probs.mode === 'dark' ? "4px solid white" : "2px solid grey"
            }}
            rows="8"
            onChange={onchange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={lowercase}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearall}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copydata}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={Extraspaces}>
          Handle Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2 style={{ color: probs.mode === 'dark' ? 'white' : 'black' }}>your text summary</h2>
        <p style={{ color: probs.mode === 'dark' ? 'white' : 'black' }} >
          The number of charactes in your text is {text.length}, and number of
          word is {text.split(/\s+/).filter((e) => { return e.lenght !== 0 }).length}
        </p>
        <p style={{ color: probs.mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read the text</p>
        <h2 style={{ color: probs.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
        <p style={{ color: probs.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Enter the text here "}</p>
      </div>
    </>
  );
}
