import React from "react";

export const PopUp = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="relative bg-white rounded-sm w-[70%] m-auto">
        <form>
          <div>
            <label htmlFor="type">Type</label>
            <input type="text" name="type" id="" />
          </div>
        </form>

        <button className="bg-black p-2 rounded-sm text-white">Close</button>
      </div>
    </div>
  );
};
