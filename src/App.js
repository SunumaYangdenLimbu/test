import React, { useState } from 'react'
import Data from "./Data.json"
// import axios from 'axios';
import "./style.css"
import { Navigate ,useNavigate,Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Button,Modal } from 'react-bootstrap';
import { tab } from '@testing-library/user-event/dist/tab';

const App = () => {
  const[tableData,setTableData]=useState([]);
  const [layout,setLayout] = useState('')
  const [name,setName] = useState('defalut value');
  const [capacity,setCapacity] = useState('');
  const [status,setStatus] = useState(false); 
  const [editedLayout,setEditedLayout] = useState('')
  const [editedName,setEditedName] = useState('');
  const [editedCapacity,setEditedCapacity] = useState('');
  const [editedStatus,setEditedStatus] = useState(false);
  const [rowIdx,setRowIdx]=useState('')
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postData = () => {
    let data={
      "layout":layout,
      "name":name,
      "capacity":capacity,
      "status":status
    }
    setTableData(old=>[...old,data])

    console.log(tableData);

  }

  const editRow=(idx)=>{ 
    setEditedName(tableData[idx].name)
    setEditedLayout(tableData[idx].layout)
    setEditedCapacity(tableData[idx].capacity)
    setEditedStatus(tableData[idx].status)
    setRowIdx(idx)
    handleShow()
  } 
  const UpdateRow=()=>{
   const temp=[...tableData]
    temp[rowIdx]={
       "layout":editedLayout,
      "name":editedName,
      "capacity":editedCapacity,
      "status":editedStatus
    }
    setTableData(temp)
    handleClose()
  }
const deleteRow = (index) =>{
      const temp=[...tableData]
      temp.splice(index,1)
      setTableData(temp)
  }


  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className='wrapper-inner'>
          <div className='form'>
            Layout:
            <select className='select' value={editedLayout}   onChange={(e)=>{setEditedLayout(e.target.value)}}>
              <option value="">Select Layout</option>
              <option value="Layout1">Layout1</option>
              <option value="Layout2">Layout2</option>
              <option value="Layout3">Layout3</option>
            </select>
          </div>
          <div className='form'>
            Name:<input type="text" className="input1" value={editedName}   placeholder="Enter Name" onChange={(e)=>{setEditedName(e.target.value)}}/>
          </div>
          <div className='form'>
            Capacity:<input type="number" className="input2" value={editedCapacity} placeholder="Enter number of capacity" onChange={(e)=>{setEditedCapacity(e.target.value)}}/>
          </div>
          <div className='checkbox'>
            Status:<input type="checkbox" className="input" value={editedStatus} onChange={(e)=>{setEditedStatus(e.target.value)}}/>
          </div>
          <div className='image'>
            Image:
            <span>Choose file</span>
            <span>No file choosen</span>
          </div>

        
        </div> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UpdateRow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="wrapper">
        <h3>Create Table</h3>
        <hr/>

       <div className='wrapper-inner'>
          <div className='form'>
            Layout:
            <select className='select' onChange={(e)=>{setLayout(e.target.value)}}>
              <option value="">Select Layout</option>
              <option value="Layout1">Layout1</option>
              <option value="Layout2">Layout2</option>
              <option value="Layout3">Layout3</option>
            </select>
          </div>
          <div className='form'>
            Name:<input type="text" className="input1"  placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div className='form'>
            Capacity:<input type="number" className="input2" placeholder="Enter number of capacity" onChange={(e)=>{setCapacity(e.target.value)}}/>
          </div>
          <div className='checkbox'>
            Status:<input type="checkbox" className="input" onChange={(e)=>{setStatus(e.target.value)}}/>
          </div>
          <div className='image'>
            Image:
            <span>Choose file</span>
            <span>No file choosen</span>
          </div>

          <div className='create-table-cancel'>
            <button onClick={postData} className='span1'>Create Table</button>
            <span className='span2'>Cancel</span>
          </div>
        </div> 
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Layout</th>
            <th scope="col">Name</th>
            <th scope="col">Capacity</th>
            <th scope="col">Checkpost</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
            {
                tableData.map((data,idx)=>{
                    return(
                        <>
                          <tbody>
                            <tr>
                              <th scope="row">{data.layout}</th>
                              <td>{data.name}</td>
                              <td>{data.capacity}</td>
                              <td>{data.status}</td>
                              <td> <button className='edit-btn' onClick={()=>editRow(idx)}>Edit</button> <button className='delete-btn' onClick={()=>deleteRow(idx)}>Delete</button></td>
                            </tr>
                          </tbody>
                        </>
                    )
                })
            }
      </table>
    </>
  )
}

export default App