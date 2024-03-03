import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../components/Card";

const GetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Procedure
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function
    fetchData();
  }, []);

  return (
    <>
      {data.map((note) => (
        <Card
          id={note._id}
          type={note.type}
          date={note.date}
          title={note.title}
          note={note.note}
        />
      ))}
    </>
  );
};

export default GetData;
