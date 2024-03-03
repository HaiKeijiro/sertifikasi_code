import React, { useState } from "react";
import GetData from "./routes/GetData";
import PopUpCreate from "./components/PopUpCreate";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = () => {
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container m-auto py-5 px-10 space-y-10">
        <div className="flex justify-between mt-5">
          <h1 className="text-4xl font-bold">Notes</h1>
          <button className="p-3 bg-black text-white font-bold rounded-sm" onClick={openPopUp}>
            New Note
          </button>
        </div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          <GetData />
        </div>
      </div>
      <PopUpCreate
        isOpen={isOpen}
        onClose={closePopUp}
      />
    </>
  );
};

export default App;
