import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataActions } from "../Store/addDataSlice";
import "./StudentRegistration.css";

const StudentRegistration = () => {
  const [image, setImage] = useState();
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // const arr=[]
    e.preventDefault();

    const obj = {
      id: Math.random(),
      image: image,
      FirstName: fName,
      LastName: lName,
      fatherName: fatherName,
      email: email,
      address: address,
      number: number,
      date: date,
      country: country,
    };
    console.log(image)
    alert("Data added successfully");
    dispatch(addDataActions.addItem(obj));
    
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        Image:{" "}
        <input
          type="file"
          onChange={(e) => {
            // setImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0])
           
          }}
          required
        />
        <br />
        First Name:{" "}
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFname(e.target.value);
          }}
          required
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLname(e.target.value);
          }}
          required
        />
        <br />
        Father's Name:{" "}
        <input
          type="text"
          placeholder="Father Name"
          onChange={(e) => {
            setFatherName(e.target.value);
          }}
          required
        />
        <br />
        Email ID:{" "}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        Address:{" "}
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        />
        <br />
        Mobile No.:{" "}
        <input
          type="number"
          placeholder="Mobile No."
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          required
        />
        <br />
        Gender:{" "}
        <div>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
        
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
        
          />{" "}
          Female
        </div>
        <br />
        Date:{" "}
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
        <br />
        <div>
          <select
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            required
          >
            <option value="">Country</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Russia">Russia</option>
            <option value="Germany">Germany</option>
            <option value="America">USA</option>
          </select>
        </div>
        <br />
        <button>Submit Data</button>
      </div>
    </form>
  );
};

export default StudentRegistration;
