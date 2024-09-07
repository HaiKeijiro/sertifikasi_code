import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FormSepeda = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Procedure
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getsepeda");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the function
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    kode_sepeda: "",
    nama_sepeda: "",
    merk_sepeda: "",
    jenis_sepeda: "",
    peruntukan: "",
    jumlah_speed: "",
    tanggal_launching: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const submitAdd = (e) => {
    e.preventDefault();
    addData(formData);
  };

  const addData = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/addsepeda",
        formData
      );
      console.log("Form submitted with data: ", response);
      console.log("Data is added");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (kode_sepeda) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deletesepeda/${kode_sepeda}`);
      console.log("Item deleted:", response);
      console.log("Data is deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-red-500 flex justify-between items-center">
      <div className="m-auto">
        <h1 className="font-bold">Form Master Sepeda</h1>
        <form onSubmit={submitAdd}>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Kode Sepeda
            </label>
            <input
              type="text"
              name="kode_sepeda"
              value={formData.kode_sepeda}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Nama Sepeda
            </label>
            <input
              type="text"
              name="nama_sepeda"
              value={formData.nama_sepeda}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Merk Sepeda
            </label>
            <input
              type="text"
              name="merk_sepeda"
              value={formData.merk_sepeda}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Jenis Sepeda
            </label>
            <select
              name="jenis_sepeda"
              value={formData.jenis_sepeda}
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="MTB">MTB</option>
              <option value="Road Bike">Road Bike</option>
              <option value="Sepeda Anak">Sepeda Anak</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Peruntukan
            </label>
            <input
              type="radio"
              name="peruntukan"
              id=""
              value="Pria"
              onChange={handleChange}
            />{" "}
            Pria
            <input
              type="radio"
              name="peruntukan"
              id=""
              value="Wanita"
              onChange={handleChange}
            />{" "}
            Wanita
          </div>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Jumlah Speed
            </label>
            <input
              type="number"
              name="jumlah_speed"
              value={formData.jumlah_speed}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kode sepeda" className="block">
              Tanggal Launching
            </label>
            <input
              type="date"
              name="tanggal_launching"
              value={formData.tanggal_launching}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            Add
          </button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Kode Sepeda</th>
            <th>Nama Sepeda</th>
            <th>Merk Sepeda</th>
            <th>Jenis Sepeda</th>
            <th>Peruntukan</th>
            <th>Jumlah Speed</th>
            <th>Tanggal Launching</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sepeda) => (
            <tr key={sepeda.kode_sepeda}>
              <td>{sepeda.kode_sepeda}</td>
              <td>{sepeda.nama_sepeda}</td>
              <td>{sepeda.merk_sepeda}</td>
              <td>{sepeda.jenis_sepeda}</td>
              <td>{sepeda.peruntukan}</td>
              <td>{sepeda.jumlah_speed}</td>
              <td>{sepeda.tanggal_launching}</td>
              <td><Link to={"updatesepeda/" +  sepeda.kode_sepeda}>Update</Link></td>
              <td><button onClick={() => handleDelete(sepeda.kode_sepeda)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormSepeda;
