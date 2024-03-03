import React from "react";
import axios from "axios";

const Delete = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  handleDelete();

  return <></>;
};

export default Delete;
