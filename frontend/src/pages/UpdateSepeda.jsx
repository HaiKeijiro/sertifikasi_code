import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateSepeda = () => {
  const [formData, setFormData] = useState({
    nama_sepeda: "",
    merk_sepeda: "",
    jenis_sepeda: "",
    peruntukan: "",
    jumlah_speed: "",
    tanggal_launching: "",
  });

  const { kode_sepeda } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/updatesepeda/${kode_sepeda}`,
        formData
      );
      console.log("Form submitted with data: ", response);
      console.log("Data is updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto bg-blue-500">
      <h1 className="font-bold">Form Master Sepeda</h1>
      <form onSubmit={submitUpdate}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateSepeda;
