import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataActions } from "../Store/addDataSlice";
import EditData from "./EditData";
import { Modal} from "react-bootstrap";
import "./EditData.css";

const ViewStudents = () => {
  const [show, setShow] = useState(false);
  const [details,setDetails]=useState("")

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const data = useSelector((state) => state.studentData.items);
  const dispatch = useDispatch();
  //console.log(data);

  //for deleting student data
  const deleteHandler = (id) => {
    alert('Successfully deleted')
    // console.log(id);
    dispatch(addDataActions.removeItem(id));
  };

const editHandler=(item)=>{
    console.log(item)
    setDetails(item)
    handleShow()
}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Father's Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>DOB</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <th>
                  <img src={item.image} alt="" style={{width:'15%'}}/>
                </th>
                <th>{item.firstName}</th>
                <th>{item.lastName}</th>
                <th>{item.fatherName}</th>
                <th>{item.email}</th>
                <th>{item.address}</th>
                <th>{item.number}</th>
                <th>{item.date}</th>
                <th>{item.country}</th>
                <th>
                  <button onClick={()=>editHandler(item)}>Edit</button>
                </th>
                <th>
                  <button
                    onClick={() => {
                      deleteHandler(item.id);
                    }}
                  >
                    Delete
                  </button>
                </th>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Student Data</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <EditData  data={details}/>
                  </Modal.Body>                  
                </Modal>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;
