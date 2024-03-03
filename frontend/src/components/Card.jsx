import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PopUpUpdate from "./PopUpUpdate";
import DeletePopUp from "./Delete";

export const Card = ({ type, date, title, note, id }) => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null)

  const openPopUp = () => {
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleDelete = () => {
    setDeleteId(id)
  }

  return (
    <>
      <div className="container bg-[#F6F6F6] p-8 m-auto">
        <div className="flex justify-between align-middle relative">
          <label
            htmlFor="label"
            className="bg-black rounded-sm text-white px-8 py-1"
          >
            {type}
          </label>
          <MoreVertIcon
            className="my-auto cursor-pointer"
            onClick={handleClick}
          />
          {menu ? (
            <div className="absolute top-14 right-0 flex flex-col gap-2 cursor-pointer">
              <EditIcon onClick={openPopUp} />
              <DeleteIcon onClick={handleDelete} />
            </div>
          ) : null}
        </div>
        <hr className="border-black mt-2 mb-5 w-[97%]" />

        <div className="cursor-pointer">
          <label>{date}</label>
          <div className="w-[90%]">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-4">{note}</p>
          </div>
        </div>
      </div>
      <DeletePopUp id={deleteId} />
      <PopUpUpdate isOpen={isOpen} onClose={closePopUp} id={id} />
    </>
  );
};
