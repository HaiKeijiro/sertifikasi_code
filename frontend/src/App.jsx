import { useState } from "react";
import { Card } from "./components/Card";
import { PopUp } from "./components/PopUp";

// Procedure
// function greet_user() {
//   let name = prompt("Please enter your name")
//   alert('Welcome ' + name)
// }

// Call the function
// greet_user()

// Function
function App() {
  const [showPopUp, setShowPopUp] = useState(false)

  function addNote() {
    setShowPopUp(true)
  }

  function handleOnClose() {
    setShowPopUp(false)
  }

  return (
    <>
      <div className="container m-auto py-5 px-10 space-y-10">
        <div className="flex justify-between mt-5">
          <h1 className="text-4xl font-bold">Notes</h1>
          <button className="p-2 bg-red-500 rounded-sm" onClick={addNote}>New Note</button>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {/* {data.notes.map((note, index) => (
            <Card key={index} type={note.type} date={note.date} title={note.title} note={note.note} />
          ))} */}
          <Card />
        </div>
      </div>
      <PopUp visible={showPopUp} onClose={handleOnClose} />
    </>
  );
}

export default App;
