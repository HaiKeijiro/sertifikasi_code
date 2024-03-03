import React, { useState } from "react";
import axios from "axios";

const PopUpUpdate = ({ isOpen, onClose, id }) => {
  const [formData, setFormData] = useState({
    date: "",
    type: "",
    title: "",
    note: "",
    id: id
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  const submitForm = async (formData) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/update/" + id,
        formData
      );
      console.log("Form submitted with data: ", response);
      onClose();
      console.log("Data is updated");
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-sm p-4 w-96">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="type" className="block">
                Type
              </label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="note" className="block">
                Note
              </label>
              <input
                type="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                className="border border-gray-300 rounded-sm px-2 py-1 w-full"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-red-500 text-white px-4 py-2 rounded-sm"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-sm"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpUpdate;
