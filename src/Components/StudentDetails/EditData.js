import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataActions } from "../Store/addDataSlice";
import "./EditData.css";
const EditData = (props) => {
  console.log(props);

  const [image, setImage] = useState();
  const [fName, setFname] = useState(props.data.firstName);
  const [lName, setLname] = useState(props.data.lastName);
  const [fatherName, setFatherName] = useState(props.data.fatherName);
  const [email, setEmail] = useState(props.data.email);
  const [address, setAddress] = useState(props.data.address);
  const [number, setNumber] = useState(props.data.number);
  const [date, setDate] = useState(props.data.date);
  const [gender, setGender] = useState(props.data.gender);
  const [country, setCountry] = useState(props.data.country);

  const dispatch=useDispatch()

  const updateHandler = (e) => {
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
    dispatch(addDataActions.removeItem(props.data.id))
    dispatch(addDataActions.addItem(obj))
  };

  return (
    <form onSubmit={updateHandler}>
      <div>
        Image:{" "}
        <input
          type="file"
          value={image}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <br />
        First Name:{" "}
        <input
          type="text"
          value={fName}
          placeholder="First Name"
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          value={lName}
          placeholder="Last Name"
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <br />
        Father's Name:{" "}
        <input
          type="text"
          value={fatherName}
          placeholder="Father Name"
          onChange={(e) => {
            setFatherName(e.target.value);
          }}
        />
        <br />
        Email ID:{" "}
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        Address:{" "}
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />
        Mobile No.:{" "}
        <input
          type="number"
          value={number}
          placeholder="Mobile No."
          onChange={(e) => {
            setNumber(e.target.value);
          }}
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
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br />
        <div>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
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
        <button>Update</button>
      </div>
    </form>
  );
};

export default EditData;
